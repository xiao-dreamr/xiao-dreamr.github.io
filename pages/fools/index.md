---
title: 笑林新编
icon : i-ri-lightbulb-line
layout: post
---

用于记载平时的弱智错误，根据频次排序，以供考前查阅

## 通病

### 非能力因素

#### 涂卡

注意选项是**横向**排列还是**纵向**排列，涂完卡后一定要检查**是否涂错**，切莫侥幸！

#### 奇奇怪怪的笔误...?

比如区间少写了一半括号，“必要不充分”写成了“要不充分”，“细胞壁”写成了“细细壁”等...

怪（

## 语文

### 默写

#### 易错字

**故** 木受绳则直，金就砺则利。

**故**不积跬步，无以**至**千里

**固**知一死生为虚诞，齐彭殇为妄作。

假舆马者，非利足也，而**致**千里

天生我**材**必有用，千金散尽还复来。

噫吁**嚱**，危乎高哉！

出师未捷身先死，**长**使英雄泪满襟。

### 作文

#### 核心词

核心词 **不要替换！** **不要替换！** **不要替换！**

> 典例
>
> 题目要求：**无为与有为**、**进与止**
>
> 经典偏题：**舍与得**、进与**退**

## 数学

### 运算

#### 开方取正负

偶数次方开方时切记 $\bold{\pm}$ **号**，并且多数情况下会涉及分类讨论

#### 瞎 分数化简

$$\frac{111}{66} = \frac{37}{22}$$

#### 瞎 交并区间

看好题目中所求为 $\cup$ 区间还是 $\cap$ 区间，不要惯性思维认为是交集

#### 四则运算

...?

以下内容将对你造成严重的精神污染，请谨慎查看（

::: details 今日首蚌

$$1 + 1 = 3$$
$$2 + 8 = 9$$
$$2^3 = 6$$
$$\log_21 = 1$$
$$1+1 \ln1=0$$
$$\ln1+\ln1=\ln2$$

:::

#### 正负变号

当同乘某个因式时，切记检查该因式的正负，以防大于/小于号改变方向

#### 上下同除

上下同除，而不是上除下乘，例子应该说得更清楚：

现有 $\dfrac{ac}{b}$

则原式 $= \dfrac{a}{ \frac{b}{c} } \neq \dfrac{a}{bc}$

> 典型错误：
>
> $\frac{2n^2-n}{2n+1} = \frac{n(2n-1)}{2n+1} = \frac{n}{4n^2-1}$  完全**错误**
>
> $\frac{n(2n-1)}{2n+1} = \dfrac{n}{ \frac{2n+1}{2n-1} }$ 正确

#### 十字相乘

十字相乘后未知量分子分母弄倒，非常阴险

### 函数

#### 二次型开口方向

建议第一时间关注二次项系数，并**画图**讨论，画图远比死记硬背好

开口向上 $\implies$ 大于取两边，小于取中间

开口向下 $\implies$ 大于取中间，小于取两边

#### 空集情况

在考察形如 $\text{解集}A \subsetneqq B$ 时，切莫忘记讨论 $A=\phi$ 的情况，建议放在第一位讨论

> 典例：
>
> $A=\left\{x| -2\le x \le 5, x\in \R\right\}; B=\left\{x|1-m\le x \le 2m+1, x\in\R\right\}$，若 $B\subsetneqq A$，求 $m$ 的范围
>
> 答案：
>
> ① $B=\phi \implies 1-m>2m+1 \implies m<0$
>
> ② $B\not ={\phi} \implies \left\{\begin{aligned}1-m&\ge-2\\2m+1&\le5\\1-m&\le2m+1\end{aligned} \right. \implies m\in[0,2]$
>
> 综上， $m\in(-\infin,2]$

#### 定义域

在写取值范围是检查定义域是否影响范围，尤其是在又臭又长的题中，极易忽略定义域。

推荐在求自变量范围时优先将定义域写在最明显的位置，以防忽略！

> 典例：
>
> $f(x)=\log_2x$，若 $f(x)-f\left(\dfrac{1}{x-3}\right) \leq 2$，求 $x$ 取值范围
>
> 答案：
>
> 原式可化为 $\log_2x+\log_2{(x-3)}\leq2$
>
> 即 $x\cdot(x-3)-4\leq0$
>
> 解得 $x\in \left[-1,4\right]$
>
> **又因为** $\left\{\begin{aligned}x&\gt0\\\cfrac{1}{x-3}&\gt0\end{aligned}\right. \implies x\in \left(3,+\infin\right)$
>
> 综上， $x\in\left(3,4\right]$

此外，在换元后也极易忽略原变量的取值范围，从而扩大了新元的范围，如:

> 典例：
>
> $f(x)=1-\log_3x, x\in[1,9]$，现使 $g(x)=f^2(x)+f(x^2)$，求 $g(x)_{min}$
>
> 典型错误：
>
> 令 $t=\log_3x, t\in[0,2]$
>
> 正确答案：
>
> 令 $t=\log_3x, t\in[0,1]$ （因为 $x^2\in[1,9]$，故 $x\in[1,3]$）
>
> $g(t)=t^2-4t+2, t\in[0,1] \implies g(t)_{min}=g(1)=-1$

#### 极值点

设函数$f(x)$，则
$f'(x)=0$ 推不出 $f(x)$ 有极值点，是**必要不充分**条件

#### 求导

求导之后函数前的符号千万别忘，导数一错满盘皆输。

此外， $x'=1$，而不是 $x'=x$ （

#### 关于画图

画图很好，可以帮助理解各种情况

——但不要妄想拿你误差大的离谱的图去求值。

### 向量

#### 关于投影

$\vec{a} = (1,0)$ 为 $\vec{b} = (1,1)$ 在 $\vec{c} = (-1,0)$ 上的投影向量，则

投影向量：$\vec{a} = (1,0)$

投影：$\frac{\vec{b} \cdot \vec{c} }{ |\vec{c}| } = -1$

投影向量模长：$|\vec{a}| = 1$

> 典例：
>
> 向量 $(1,3,5)$ 在向量 $(-1, 0, -1)$ 上的投影是？
>
> 答案： $-3\sqrt{2}$

### 概率与统计

#### 瞎 概率看错对立事件

误将 $P(\overline{A}B)$ 看为 $P(AB)$，**瞎**

> 典例：
>
> 已知$A$、$B$ 互为独立事件，$P(A)=0.4$，$P(\overline{A}B)=0.18$，求 $P(AB)$
>
> 答案：  
> $P(\overline{A}B)= P(\overline{A}) \cdot P(B) \implies P(B)=0.3$
>
> $P(AB)=P(A)\cdot P(B)=0.12$

#### 瞎 至多至少

不要看漏事件前的“至多两个”这类而算成“恰好两个”！

## 物理

### 答题规范

#### 瞎 求矢量写方向

求 $F_N \implies$ 大小+方向

求 $F_N$ 的**大小** $\implies$ 大小

#### 牛顿三定律

涉及**相互作用力** $\implies$ 牛顿**第三**定律

涉及**加速度** $\implies$ 牛顿**第二**定律

### 读数

#### 瞎 秒表

看好小表盘**是否过半**，不要在确认**未**过半后又读30s表盘！

### 动量

#### 求冲量算全力

算物体之间的冲量不要忘记**用于平衡的恒力**（如支持力、拉力...）

> 典例：
>
> 有 $m=1kg$ 的木块在一固定木板上匀减速滑动，摩擦系数 $\mu=0.1$，初速度 $v_0=1m/s$，求全过程中木板对木块的冲量
>
> 答案：  
> $t=\frac{v_0}{\mu g} = 10s$
>
> $I_N=mgt=100 N\cdot m$
>
> $I_f=-\mu mgt=\Delta p=-1 N\cdot m$
>
> $I=\sqrt{ {I_f}^2+{I_N}^2 }=\sqrt{101} N\cdot m$

### 简谐振动

#### 单摆时间忘记除周期

$$T = \frac{2t}{N-1}$$

$N$ 为从最高点开始计时，并记为第一次，经过最高点的次数

#### 单摆的F-t图像

单摆的 $\rm F_T-t$ 图像始终不为零，且一个图像周期仅为 $\frac{1}{2}$ 个实际周期

#### 单摆的回复力

单摆的回复力是**重力**的垂直于绳的分量，而非重力与拉力的合力

## 化学

### 方程式

#### 书写

考虑顺序：

> 反应物 $\rightarrow$ 生成物( **常漏**：$\rm H_2O$ ) $\rightarrow$ 物态( $\rm \uparrow \downarrow g\space l \space s$ ) $\rightarrow$ 反应条件( $\leftrightharpoons \Delta$ 催化剂 $\ldots$ )

#### 瞎 离子 & 化学方程式

看准是离子方程式还是化学方程式！

离子方程式

$$\rm 2 MnO_4^{-} + HC{\equiv}CH + 6H^{+} \rightarrow 2CO_2 + 4H_2O + 2Mn^{2+}$$

化学方程式

$$\rm 2KMnO4 + HC{\equiv}CH + 3H_2SO_4 \rightarrow 2CO_2 + 4H_2O + 2MnSO_4 + K_2SO_4$$

### 计量

#### 标准状况

常常在“该物质在标况下非气体”设错，极容易忽略

标准状况下非气体： $\rm SO_3,HF,CH_2Cl_2,CHCl_3,CCl_4$ ,乙醇,苯等

### 化学原理

#### 沉淀平衡

注意根据题目中所给 $\rm K_{sp}$ 判断该物质是否溶解，不要根据*经验*主观臆断！

### 物质结构

#### 碳原子杂化

$sp^3$ 的碳一定全是单键

羰基、醛基、酯基、羧基的碳均是 $sp^2$ 杂化！

### 有机化学

#### 瞎 数官能团

不要把**酯基**当作**醚键**！

不要把**羰基**当作**醛基**！

#### 瞎 写化学式

数完 $\Omega$ 后切记不要忘了除了 $\rm C,H$ 以外的其他元素！如 $\rm O,N,P \ldots$

切记不要写了 $\rm C_xH_y$ 就直接走人...

（好无语的错）

#### 环烷烃&苯环

环烷烃的C是 $sp^3$ 杂化，一个C可以有**两个**取代基！

尤其是数同分异构体的情况下，最后要检查两个取代基可不可以连到**同一个碳上**

> 典例：
>
> $\rm C_8H_{16}$ 有多少种含有六元环的同分异构体？
>
> 答案：
>
> 5种（1-乙基、**1,1-二甲基**、1,2-二甲基、1,3-二甲基、1,4-二甲基）

#### 蒸馏

蒸馏时温度计需要放在**支管口处**，若无温度计，则只能作为蒸馏水的装置

## 生物

### 材料题

#### 注意与常识相悖的材料

有时材料会与书上的内容恰恰相反，一定要具体题目**具体分析**，主观臆断是大忌

> 典例：
>
> 核酸**外**切酶，露出 $3'\rightarrow 5'$ 端，而非常见的 $5'\rightarrow 3'$

#### 奇怪的专有名词

有时会涉及一些较为晦涩的中草药名称，一定要注意不写错字
