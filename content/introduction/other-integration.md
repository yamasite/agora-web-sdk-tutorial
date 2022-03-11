---
title: "拓展内容：在 TypeScript 项目中集成 SDK"
metaTitle: "拓展内容：在 TypeScript 项目中集成 SDK"
metaDescription: "拓展内容：在 TypeScript 项目中集成 SDK"
---

> 这个部分属于拓展内容，为选做，对下面的教程没有影响。如果你对 TypeScript 没有兴趣，也可以直接跳转到下一个章节。

在这个部分，你将学会在 TypeScript 项目中集成声网实时音视频 Web SDK 并验证 SDK 版本和浏览器兼容性。

如果你不熟悉 TypeScript，推荐参考 [TypeScript 入门教程](https://github.com/xcatliu/typescript-tutorial) 或[官方手册](http://www.typescriptlang.org/docs/handbook/basic-types.html)。

## 实现方法

你可以通过以下方法集成并验证 SDK 版本。假设你的项目使用 npm 构建，

### 步骤一：获取并集成 SDK

本教程以 v4.9.3 为例。你可以在 `package.json` 文件中加入引用：



