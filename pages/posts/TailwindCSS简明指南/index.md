---
title: Tailwind 简明指南
icon : i-mdi:tailwind
date: 2025-03-19
categories: 笔记
codepen: true
tags:
  - TailwindCSS
  - 前端
---

想给博客加点花哨东西，但是笔者对前端一窍不通，是故去学TailwindCSS力（

<!-- more -->

## TailwindCSS是什么？

*CSS*想必读者并不陌生，但有过前端开发经验的人大概率经历过被*冗杂*且*复杂*的CSS绕的头晕眼花的时刻。

暂且不论这样复杂的系统故障率有多高，光是编写HTML和CSS时的**割裂**体验就足够让人恼火——那么如何让网页的构建变得流畅简单？

> 只需书写 HTML 代码，无需书写 CSS，即可快速构建美观的网站。

这便是TailWind官网上给出的解决方案，TailWind框架通过包含如`pt-4`、`flex`、`text-center`等工具集，使得我们可以直接在HTML元素的`class`中实现我们需要的样式。

多说无益，不如亮出一段分别在有无Tailwind的情境下编写的网页代码：

::: code-group

```html [有Tailwind]
<div class="abusolute w-full h-full bg-black">
    <div 
    class="flex abusolute w-full h-full justify-center items-center font-mono text-5xl text-white"
    >
        ✨Hello World!
    </div>
</div>
```

```html [无Tailwind]
<div class="background">
    <div 
    class="greeting"
    >
        <div class="greeting-text">
        ✨Hello World!
        </div>
    </div>
</div>
<style>

.background{
    position: abusolute;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0);
}

.greeting {
    justify-content: center;
    align-items: center;
}

.greeting-text{
    font-family: "Fira code";
    font-size: 2rem;
    font-weight: bold;
     color: white;
}

* {
    margin: 0;
    padding: 0;
}
</style>
```

:::

<CodePen class="h-300px" name="HelloWorld" id="wBvXzwO" user="xiao-dreamr" tab="html,result" />
