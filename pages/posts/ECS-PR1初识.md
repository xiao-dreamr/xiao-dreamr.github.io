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

ECS系列的第一章实践~ 本章会直接从ECS实现部分开始，不再提及与OOP的区别等概念。

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
    public double X = x;
    public double Y = y;
    public double Z = z;
    static double Dot(Vector3 a, Vector3 b){
        return a.X * b.X + a.Y * b.Y + a.Z * b.Z;
    }
    static double Length(Vector3 v){
        return Math.Sqrt(v.X * v.X + v.Y * v.Y + v.Z * v.Z);
    }
    // ......
}
```

当然，以上实现只是个例子，记住：Component只是数据，不用携带除了数据以外的任何东西，它甚至连Id也不需要，而只是纯粹的，美好的数据。（什么奇怪的形容啊喂）

## Hierarchies

乍一看这个名字似乎很唬人，实际上Hierarchies就是我们在TH1中提到的“Entity与Component的对应关系”，只不过我没想到什么好的译名就这么放在这了（

下面我们来试着实现它。

```csharp
```

暂鸽，寒假继续（