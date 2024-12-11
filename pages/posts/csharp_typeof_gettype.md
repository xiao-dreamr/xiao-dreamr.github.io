---
title: C#中的typeof()与GetType()
date: 2024-11-17
update: 2024-12-08
author: Lin
categroies: C#
tags:
  - C#
  - 随笔
---
## 获取类型
获取类型主要通过 `Object.GetType() `方法和`typeof()` 运算符两种方式。

不同点：
- `Object.GetType()`是Object类的方法，可以获取任何对象的类型。
- 而`typeof()`运算符是运算符，只是长得像函数，需要传入类本身而非实例

相同点：
- `Object.GetType()`与`typeof()`获取的信息是一致的

在实际应用中经常使用`Object.GetType()`方法获取实例的类型

```csharp
Foo Foo1 = new Foo();
Console.WriteLine($"GetType():  {Foo1.GetType()}");
Console.WriteLine($"typeof(GetType()): {typeof(Foo1.GetType())}"); //错误
Console.WriteLine($"typeof(): {typeof(Foo)}"); //正确

class Foo { }

```

输出结果：

```
GetType():  Foo
typeof(GetType()): *报错*
typeof():   Foo

```

## 对象类型判断

主要使用`is`运算符进行判断，`is`运算符可以判断对象是否是某个类型或派生自某个类型或接口。

```csharp
Foo Foo1 = new Foo();
Console.WriteLine($"Foo1 is IFoo: {Foo1 is IFoo}");
Console.WriteLine($"Foo1 is Foo: {Foo1 is Foo}");

interface IFoo { }
class Foo : IFoo { }
```

输出结果：

```
Foo1 is IFoo: True
Foo1 is Foo: True
```

