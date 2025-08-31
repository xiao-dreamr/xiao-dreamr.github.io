---
title: 【RIME】小狼毫入门指南
icon : ri:keyboard-box-line
date: 2025-08-31
categories: 随笔
cover: https://pic1.imgdb.cn/item/68b4487458cb8da5c8673b62.png
end: true
tags:
  - 输入法
---

小狼毫实在是太好用了——

小狼毫解决了我在使用微软输入法时很多的痛点，并且能进行随心所欲的**自定义**，对于一个爱折腾的人来说，可谓是**金风玉露一相逢**(✿◡‿◡)

但是小狼毫的优点也恰好是其缺点，过高的自定义程度反而让入手这款输入法成为了一项**难题**，因此，笔者便闲来无事记载一下自己构造这个独属于自己的输入法的**折腾过程**罢¯\\\_(ツ)_/¯

（顺便提一嘴，微软在输入法上属实是落后太多，诗词等古文输入困难暂且不提，连白天/黑夜的模式切换也无法自动实现，实在难受(╯‵□′)╯︵┻━┻

<!-- more -->

## 安装

不妨先来了解一下小狼毫的来由，更方便后续理解。

[小狼毫](https://github.com/rime/weasel)实际上是**RIME**的windows版本，**RIME（中州韵）** 是一个开源的输入法计算引擎，本身并不具备输入法的功能，而**小狼毫**就是从RIME上长出来的，适用于windows版本的输入法~

而**RIME**的Linux版本叫[**ibus**](https://github.com/rime/ibus-rime)，安卓版本叫[**同文**](https://github.com/osfans/trime)，Mac版本叫[**鼠须管**](https://github.com/rime/squirrel)，各位可以按照自己的系统版本，自行到[官网](https://rime.im/download/)下载更多版本。（以上链接均是对应的Github仓库）

在找到对应的版本后，直接从GitHub Release界面下载最新稳定版安装包，按照流程进行安装即可。

![官网](https://pic1.imgdb.cn/item/68b4487458cb8da5c8673b62.png)

## 选择输入法

### 自带

小狼毫下载后自带的输入法有朙月拼音、双拼等，其中**朙月拼音·简化字**是最接近我们日常使用的全拼输入法的一款。

但自带的输入法对于现在的互联网来说还是略显落后，那么如何获得更好的输入体验呢？

### 雾凇拼音

**雾凇拼音**是在Github上Star数最多且持续维护的一款输入方案，也是笔者目前正在使用的一款输入法。

只须从[其GitHub Release](https://github.com/iDvel/rime-ice/releases)界面下载，选择Assets中的`full.zip`即可覆盖我们日常的大多数使用场景。

下载解压后，右键你的任务栏输入法按钮后，进入**用户文件夹**，将`full.zip`中的所有内容直接复制进去即可。

通常情况下，小狼毫的用户文件夹位于`C:\Users\<你的账户名>\AppData\Roaming\Rime`路径下。

![右键菜单](https://pic1.imgdb.cn/item/68b44c6a58cb8da5c8674a16.png)

最后，只需在**输入法设定**选项中，选中雾凇拼音即可。（居然还是河南人的说）

![设置菜单](https://pic1.imgdb.cn/item/68b44cf258cb8da5c8674cb6.png)

其他更多输入法建议读者自行到Github上搜寻，五笔、双拼等一应俱全~

## 皮肤

### 获取

效率是一时的事，好看是一辈子的事(￣▽￣)

小狼毫的自带皮肤勉强能看，但不多（

因此，不妨到搜索引擎中去寻觅一番，小狼毫的皮肤还是非常多的。下面推荐几个较优质皮肤，前四个是官网示例~

至于怎么使用，请见[这部分](#使用)

#### 竖排-天圆地方

![竖-天圆地方](https://pic1.imgdb.cn/item/68b44fe458cb8da5c867540d.png)

```yaml [weasel.custom.yaml]
# weasel.custom.yaml
patch:
  style/+:
    inline_preedit: true
    font_point: 15
    label_font_point: 13
    comment_font_point: 15
    horizontal: false
    layout:
      min_width: 160
      margin_x: 12
      margin_y: 2
      candidate_spacing: 2
      hilite_spacing: 6
      hilite_padding: 2
      hilite_padding_x: 12
      shadow_radius: 8
      corner_radius: 8
      shadow_offset_x: 5
      shadow_offset_y: 5
```

#### 横排-天圆地方

![横-天圆地方](https://pic1.imgdb.cn/item/68b4504758cb8da5c8675537.png)

```yaml [weasel.custom.yaml]
# weasel.custom.yaml
patch:
  style/+:
    label_format: "%s"
    inline_preedit: true
    font_point: 15
    label_font_point: 15
    comment_font_point: 14
    horizontal: true
    layout:
      max_width: 1200
      min_width: 10
      margin_x: 15
      margin_y: 6
      hilite_spacing: 6
      hilite_padding_y: 6
      hilite_padding_x: 15
      shadow_radius: 8
      corner_radius: 8
      round_corner: 8
      shadow_offset_x: 5
      shadow_offset_y: 5
```

#### 仿Win11 白/黑

![仿win11](https://pic1.imgdb.cn/item/68b450b458cb8da5c86756f7.png)

```yaml [weasel.custom.yaml]
# weasel.custom.yaml
patch:
  style/+:
    label_format: "%s"
    inline_preedit: true
    font_point: 15
    label_font_point: 15
    comment_font_point: 15
    horizontal: true
    color_scheme: win11light
    color_scheme_dark: win11dark
    layout:
      min_width: 10
      margin_x: 16
      margin_y: 8
      border: 2
      candidate_spacing: 22
      hilite_spacing: 6
      hilite_padding: 2
      hilite_padding_x: 8
      corner_radius: 10
      round_corner: 8
      shadow_radius: 8
  preset_color_schemes/+:
    win11light:
      name: " Win11浅色 / Win11light"
      text_color: 0x191919
      label_color: 0x191919
      hilited_label_color: 0x191919
      back_color: 0xf9f9f9
      border_color: 0x009e5a00
      hilited_mark_color: 0xc06700
      hilited_candidate_back_color: 0xf0f0f0
      shadow_color: 0x20000000
    win11dark:
      name: "Win11暗色 / Win11Dark"
      text_color: 0xf9f9f9
      label_color: 0xf9f9f9
      back_color: 0x2C2C2C
      hilited_label_color: 0xf9f9f9
      border_color: 0x002C2C2C
      hilited_mark_color: 0xFFC24C
      hilited_candidate_back_color: 0x383838
      shadow_color: 0x20000000
```

#### 仿微信

![仿微信](https://pic1.imgdb.cn/item/68b450fe58cb8da5c867580d.png)

```yaml [weasel.custom.yaml]
# weasel.custom.yaml
patch:
  style/+:
    label_format: "%s"
    inline_preedit: true
    font_point: 15
    label_font_point: 15
    comment_font_point: 13
    horizontal: true
    color_scheme: wechat
    layout:
      max_height: 0
      max_width: 1200
      min_width: 10
      margin_x: 10
      margin_y: 8
      candidate_spacing: 24
      hilite_spacing: 6
      hilite_padding: 3
      hilite_padding_x: 5
      corner_radius: 8
      round_corner: 8
      shadow_radius: 4
  preset_color_schemes/+:
    wechat:
      name: "微信／Wechat"
      text_color: 0x424242
      label_color: 0x999999
      back_color: 0xFFFFFF
      border_color: 0xFFFFFF
      comment_text_color: 0x999999
      candidate_text_color: 0x3c3c3c
      hilited_comment_text_color: 0xFFFFFF
      hilited_back_color: 0x79af22
      hilited_text_color: 0xFFFFFF
      hilited_label_color: 0xFFFFFF
      hilited_candidate_back_color: 0x79af22
      shadow_color: 0x20000000
```

#### 仿win10

![仿win10](https://pic1.imgdb.cn/item/68b4521b58cb8da5c8675b6d.png)

作者：[luminosara](https://github.com/luminosara)

```yaml [weasel.custom.yaml]
patch:
  "preset_color_schemes/win10":
    author: luminosara
    back_color: 0xF3F3F3
    border_color: 0xDBDCDC
    candidate_text_color: 0x000000
    hilited_candidate_back_color: 0xFFD8A6 #取色来自win10默认，有需要自己调一下，记得是BGR
    hilited_label_color: 0x6F6F6F
    hilited_mark_color: 0x00000000
    label_color: 0x6F6F6F
    name: Windows10
    shadow_color: 0x4DFDFDFD
    text_color: 0x000000
  "style/capture_by_click": true #这里之后的引号可有可无，我改的时候没删，控制鼠标选词
  "style/color_scheme": win10
  "style/font_point": 14
  "style/horizontal": true
  "style/inline_preedit": true
  "style/label_font_point": 14
  "style/label_format": "%s"
  "style/layout/border_width": 2 #边框线粗细
  "style/layout/candidate_spacing": 50 
  "style/layout/corner_radius": 10 #高亮框圆角
  "style/layout/hilite_padding": 18
  "style/layout/hilite_spacing": 17 #候选词和序号之间的距离，没找到能控制高亮框的长度的，导致高亮框右侧边距有点小
  "style/layout/margin_x": 17
  "style/layout/margin_y": 17
  "style/layout/round_corner": 10 #候选框圆角
  "style/layout/shadow_offset_x": 5
  "style/layout/shadow_offset_y": 4
  "style/layout/shadow_radius": 10
  "style/mark_text": " ​​" 
```

### 使用

首先，和安装输入法的流程一样，打开用户文件夹。找到`weasel.custom.yaml`文件，如果没有就自己创建一个。

然后，将你想要的主题直接覆盖进去即可~

最后，右键输入法，点击**重新部署**，等待几秒后，你就可以在主题选择界面找到你自己心仪的主题啦~

顺带一提，进入主题选择界面需要在**输入法**选择界面点击**中**，很奇怪的设定（

![主题](https://pic1.imgdb.cn/item/68b4546558cb8da5c86762ae.png)

### 黑/白切换

和[#使用](#使用)一样，在`weasel.custom.yaml`文件中的`patch`项目下，新增`color_scheme`和`color_scheme_dark`两个选项，就可以实现输入法皮肤随系统自动切换啦

示例：

```yaml
patch:
  color_scheme: win11light
  color_scheme_dark: win11dark
```

### 更多自定义

更多自定义皮肤内容详见[官网Wiki](https://github.com/rime/weasel/wiki/Weasel-%E5%AE%9A%E5%88%B6%E5%8C%96#weaselyaml)，已经非常详尽直观，此处不再赘述。

## 调教

这一过程可以使小狼毫真正变成**独属于你**的输入法~

我们在用户文件夹下找到`custom_phrase.txt`文件后，可以在其内部自由定义我们喜欢的词汇(o゜▽゜)o☆

格式是**目标词汇-Tab-拼音-Tab-优先级**，其中，优先级为一个整数，越大越靠前；而自定义词组默认处于最高优先级（99）

通过这个特性，我们可以实现很多非常好玩的趣味小功能，比如：

![明矾](https://pic1.imgdb.cn/item/68b4556258cb8da5c8676622.png)

![IAA](https://pic1.imgdb.cn/item/68b4563458cb8da5c8676867.png)

不仅如此，你还可以将自己的邮箱绑定到`youxiang`这个拼音上，从而实现快速输入个人信息。像这样的奇妙功能完全可以自行按需开发，十分有趣

至于图片中“中”的输入法状态显示，是一个名为[InputTip](https://github.com/abgox/InputTip)的小工具，具体可以查阅[该视频](https://www.bilibili.com/video/BV17veBzkEU9)，不在此赘述了。

## 结语

在折腾完RIME后，心血来潮就写了这篇文章，不得不说，RIME的输入体验完全不输给目前大厂的输入法（微软你到底做了个什么玩意啊喂）

而隐私保护也是个老生常谈的话题了，RIME作为一款开源软件，在这方面的保护还是毋庸置疑的，也能让笔者用的很舒心~

最后，还是要说一句

小狼毫实在是太好用了——
