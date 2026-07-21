---
title: 【安利】开源好物 Vol.1
icon : i-ri-sparkling-2-line
date: 2025-10-12
categories: 安利
cover: https://pic1.imgdb.cn/item/68eb6afac5157e1a8868a17c.png
tags:
  - 音乐
  - 开发
---

最近发现了许多很好用的开源工具，觉得如此好的东西却只有少数人关注实在是太不应该了，是故开了一个**安利**分类来推荐一些咱平常常用的开源小工具✧(≖‿≖✿)

<!-- more -->

这篇文章主要推荐四个开源软件，分别是[Coriander Player](https://github.com/Ferry-200/coriander_player)、[Alger Music Player](https://github.com/algerkong/AlgerMusicPlayer)、[Koodo Reader](https://github.com/koodo-reader/koodo-reader)、和[Dev Sidecar](https://github.com/docmirror/dev-sidecar)。

## Coriander Player

::: info

Github项目地址：[戳我喵](https://github.com/Ferry-200/coriander_player)

:::

![Coriander Player](https://raw.githubusercontent.com/Ferry-200/coriander_player/main/%E8%BD%AF%E4%BB%B6%E6%88%AA%E5%9B%BE/%E9%9F%B3%E4%B9%90%E9%A1%B5.png)

一个使用`Rust`构建的本地音频播放器。功能足够精简，也足够满足我的日常需求。

对于像咱一样习惯本地存音乐的朋友来说，Windows原生的播放器歌单功能残破，也没有豪堪的UI，所以这样一个播放器可以说是正中喜好。

它没有太花哨的界面，占用的内存也不像现在的Electron套壳软件一样动辄几百MB。作为一个小巧的本地播放器，咱认为Coriander Player做得还是相当合格的。

## Alger Music Player

::: info

Github项目地址：[戳我喵](https://github.com/algerkong/AlgerMusicPlayer)

:::

刚刚说完了本地的，Alger则是一个在线播放器。

![Alger](https://raw.githubusercontent.com/algerkong/AlgerMusicPlayer/refs/heads/main/docs/image.png)


它集成了网易云的API，可以直接登录网易云账号使用，体验相当无缝。

而它最重要的功能则是**下载音乐**。

下载一段在线音乐，有的人选择直接劫走电脑媒体音频流，有的人选择从网页爬下来，甚至是在一些广告满天飞的第三方网站苦苦搜寻。

而Alger Music Player可以直接从网易云下载高质量音频，而且是带着封面、作者信息、歌词等一系列属性的`.mp3`文件。

不会出现大批的无封面音乐，再搭配咱前文推荐的Coriander Player，本地音乐库的构建无疑变得非常简单。

## Koodo Reader

::: info

Github项目地址：[戳我喵](https://github.com/koodo-reader/koodo-reader)

:::

![Koodo](https://pic1.imgdb.cn/i/033smArvncwLLc6XLzjnTo.png)

一个开源的小说/文档阅读器。

支持的格式非常多，从`txt`到`epub`乃至`pdf`，Koodo Reader都可以识别并将其按正确的排版输出。

除了支持的格式多，自定义程度高也是咱很喜欢的一点。行间距、字体、颜色、纸张材质、翻页方式等各种自定义选项任君调整。

顺便提一嘴，[朱雀仿宋](https://github.com/TrionesType/zhuque)这个字体看小说是真的很享受（）尤其是在高分屏上

## Dev Sidecar

::: info

Github项目地址：[戳我喵](https://github.com/docmirror/dev-sidecar)

:::

![Dev](https://pic1.imgdb.cn/i/033smLRGyBocx9AI1NWek8.png)

最后一位，也是最重磅，咱使用频率最高的一位——开发者边车。

> “没有梯子大人，我们该如何连接Github？！”开发者跺着脚，瞪着Dev Sidecar。
>
> Dev Sidecar淡笑一声：**“很简单，我成尊不就是了？”**
>
> 说完，他的气息终于不再掩饰，显露而出！
>
> **直连Github！**

实际上，不止是Github，npm、git等一系列国内可能连接不稳定的工具都可以使用开发者边车进行加速。

除此之外，更有Github下载加速通道，妈妈再也不用担心我的Release一下下一天了。

## 结语

咱也是第一次写这种安利类的文章，基本就是写一下自己的使用体验。

下一篇应该会在攒齐了四个开源好物之后一并发出，领域不限，敬请期待喵。╰(\*°▽°*)╯
