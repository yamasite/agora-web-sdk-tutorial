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

本教程以 v4.9.3 为例。你可以全局安装声网实时音视频 Web SDK：

```shell
npm i agora-rtc-sdk-ng
```

在 `.ts` 文件中引用 SDK 就可以通过 `AgoraRTC` 对象调用 SDK：

```typescript
import AgoraRTC from "agora-rtc-sdk-ng"
```

### 步骤二：验证 SDK 版本

我们可以通过调用 SDK 的方法，将 SDK 版本打印到 HTML 文件中来验证集成。

确保你的 HTML 文件中包含一个 id 为 `version` 的 `<p>` 标签：

**HTML**

```html
<p>你使用的声网实时音视频 Web SDK 版本是：</p>
<p id="version"> </p>
```

在 TypeScript 文件中，先通过 `VERSION` 变量获取 SDK 版本号，再通过 `getElementById` 方法将版本号打印到 HTML 中。

**TypeScript**

```typescript
import AgoraRTC from "agora-rtc-sdk-ng"
// AgoraRTC 类是声网实时音视频 Web SDK 的调用入口
let version = AgoraRTC.VERSION;
// 将 SDK 版本号打印到 HTML 中
document.getElementById("version").innerHTML = version;
```

### 步骤三：验证浏览器兼容性

确保你的 HTML 文件中包含一个 id 为 `compatibility` 的 `<span>` 标签：

```html
<p>你现在使用的浏览器 <span id="compatibility"> </span> 声网实时音视频 Web SDK。</p>
```

在 TypeScript 文件中，先通过 `checkSystemRequirements` 方法获取浏览器兼容信息，再通过 `getElementById` 方法将版本号打印到 HTML 中。

```typescript
let supportText = "";
let isSupported = AgoraRTC.checkSystemRequirements();

switch (isSupported) {
  case true:
    supportText = "支持";
    break;
  case false:
    supportText = "不支持";
    break;
}

// 将浏览器兼容信息打印到 HTML 中
document.getElementById("compatibility").innerHTML = supportText;
```

## 效果验证

你可以在下面的 CodePen 控件中分别对 HTML、CSS 和 TypeScript 文件进行编辑，并运行项目验证效果。如果运行成功，HTML 页面会显示 SDK 的版本号并检查 SDK 是否兼容当前浏览器。

项目中已经引用了 SDK 的 npm 包作为外部 Package。在 Codepen 中用 cdn.skypack.dev 进行暂存。

<iframe height="400" style="width: 100%;" scrolling="no" title="Extension: Integrate SDK in a TypeScript project" src="https://codepen.io/yamasite/embed/preview/PoEYpGL?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="{true}">
  See the Pen <a href="https://codepen.io/yamasite/pen/PoEYpGL">
  Extension: Integrate SDK in a TypeScript project</a> by Lutkin Wang (<a href="https://codepen.io/yamasite">@yamasite</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>