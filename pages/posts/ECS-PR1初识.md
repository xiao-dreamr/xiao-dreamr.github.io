---
title: ECS-PR1 初识
icon : i-ri-stack-line
date: 2024-12-21
categories: ECS
tags:
  - ECS
  - C#
  - 实践
---

ECS系列的第一章实践~ 本章会直接从代码实现部分开始，不再提及与OOP的区别等概念。

代码水平不高，如有疏漏，还请多多批评指正(￣▽￣)"

>理论部分请看[ECS-TH1 初识](https://linium.xin/posts/ECS-TH1%E5%88%9D%E8%AF%86)

废话不多说，直接进入正题

<!-- more -->

## Entity

由TH1，Entity即为纯粹的Index，与Component一一对应，因此实现非常简单。

```csharp
namespace Entity{
    public struct Entity(int id)
    {
        /// 实体Id
        int Id { get; } = id;
    }
}
```

当然，如果你已经对游戏开发或ECS有所了解，那么你肯定会有所疑惑：“entity的复用如何处理？” 这一部分，我们会在以后的章节中详细实现（大约在PR3？）

## Component

什么？你问Component怎么实现？

Component当然是Component！它可以是任何东西，一个Vector3，一个int，只是挂个名而什么都没有，甚至Entity也可以视为Component！

比如：

```csharp
struct Vector3(double x, double y, double z)
{
    // 常规三维向量
    public double X = x;
    public double Y = y;
    public double Z = z;
}

struct FireResistance{} // 仅作为标签使用

enum FoodType{
    Juice,
    Alcohol,
    Fruits,
    Vegetables,
    Meat
    //......
}

struct Food(FoodType type, float hunger, float satiety){
    // 更复杂些的
    public FoodType Type = type;
    public float Hunger = hunger;
    public float Satiety = satiety;
}
```

当然，以上实现只是个例子，记住：Component只是数据，不用携带除了数据以外的任何东西，它甚至连Id也不需要，而只是纯粹的，美好的数据。（什么奇怪的形容啊喂）

## Context（Component-Entity的对应关系）

即为我们在TH1中提到的[对象补完计划](https://linium.xin/posts/ECS-TH1初识#对象补完计划)，下面我们来试着实现它。

### Pool

首先，我们需要一个存储Component的容器，此处命名为“Pool”，其职责有三：

1. 对Component的增删查改
2. 内存管理（建立内存连续的数组）
3. Component复用

> 但是，多数情况下，C#的GC的内存分配本就几乎一定是连续的，所以第二点在这里并不是主要目标
> 如果一定要实现，Span\<T>或许是个不错的选择

大段的代码各位大概率不愿意看，因此在这里先大致总结一下Pool的实现思路，其实也并不困难。

- 存放：使用`List<C?>`来存储，分为components（活跃组件）与freeComponents（死亡组件）
- 增删查改：略，但只有`Remove`和`Add`时需要与`freeComponents`数组产生关联值得一提

具体实现如下：

::: code-group

```csharp [Pool.cs]
namespace Context{
    /// <summary>
    /// 存放某种Component的Pool，以Entity.Id为索引
    /// </summary>
    /// <typeparam name="C">该Pool存放的Component类型</typeparam>
    public class Pool<C> where C : new()
    {
        private List<C?> components = [];
        private List<C?> freeComponents = []; // 弃用的组件存放处
        /// <summary>
        /// 在Id处新建一个component
        /// </summary>
        /// <param name="Id">要新建组件的Id</param>
        /// <returns>添加成功则true，否则false</returns>
        public bool Add(int Id)
        {
            if (components[Id] is not null)
            {
                // 若此处已有对象，则不能添加
                return false;
            }
            C? new_component = freeComponents.Count > 0 ? freeComponents.Last() : new();
            freeComponents.Remove(new_component);
            // 若有空闲对象则挑出来最后一个，并移除freeComponents中对其的引用，没有就新建
            if (Id > components.Count)
            {
                // 若超过了List上限，则先扩容再插入
                components.AddRange(Enumerable.Repeat<C?>(default, Id - components.Count + 1));
                components.Add(new_component);
                return true;
            }
            else
            {
                components[Id] = new_component;
                return true;
            }

        }
        /// <summary>
        /// 移除Id处的component，并存入freeComponents中
        /// </summary>
        /// <param name="Id">要移除组件的Id</param>
        /// <returns>若移除成功则true，否则false</returns>
        public bool Remove(int Id)
        {
            if (components[Id] is null)
            {
                // 若此处没有对象，则不能移除
                return false;
            }
            else
            {
                freeComponents.Add(components[Id]);
                components[Id] = default;
                return true;
            }
        }
        /// <summary>
        /// 获取Id处的component
        /// </summary>
        /// <param name="Id">要获取组件的Id</param>
        /// <returns>该Id处的component，若没有则返回null</returns>
        public C? Get(int Id) => components[Id];
        /// <summary>
        /// 清空所有component
        /// </summary>
        public void Clear() => components.Clear();

        // 此处方法均只写了其中的一个重载，其他重载略
    }
}
```

```csharp [Entity.cs]
namespace Entity{
    public class Entity(int id)
    {
        /// 实体Id
        int Id { get; } = id;
    }
}
```

:::

### Context

有了存储Components的容器Pool，接下来我们需要Context来更加方便地管理Entity与Component之间的关系——毕竟没有谁喜欢拿着完全没有封装的底层自嗨（

Context的职责有三：

1. Entity的创建与复用（复用部分PR3再说）
2. Pools的管理
3. Entity与多种Component间的管理

同样，先来梳理一下实现思路：

- Pool管理：将每个Component类型编号，并将每个Component对应的Pool储存在List\<Pool>
