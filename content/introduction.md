---
title: "一行代码集成 SDK"
metaTitle: "一行代码集成 SDK"
metaDescription: "一行代码集成 SDK"
---

在这个部分，你将学会如何用一行代码集成声网实时音视频 Web SDK 并验证 SDK 版本和浏览器兼容性。

## 实现方法

你可以通过以下方法集成并验证 SDK 版本。本文假设你的项目是纯 HTML + JavaScript + CSS。

### 步骤一：获取并集成 SDK

最简单的方式是通过网络链接获取并集成。本教程以 v4.9.3 为例。你可以在 HTML 文件的 `<head>` 部分加入引用：

```html
<script src="https://download.agora.io/sdk/release/AgoraRTC_N-4.9.3.js" type="text/javascript"></script>
```

SDK 会在全局导出一个 `AgoraRTC` 对象，直接访问这个对象即可。

### 步骤二：验证 SDK 版本

我们可以通过调用 SDK 的方法，将 SDK 版本打印到 HTML 文件中来验证集成。

确保你的 HTML 文件中包含一个 id 为 `version` 的 `<p>` 标签：

**HTML**

```html
<p>你使用的声网实时音视频 Web SDK 版本是：</p>
<p id="version"> </p>
```

在 JavaScript 文件中，先通过 `VERSION` 变量获取 SDK 版本号，再通过 `getElementById` 方法将版本号打印到 HTML 中。

**JavaScript**

```javascript
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

在 JavaScript 文件中，先通过 `checkSystemRequirements` 方法获取浏览器兼容信息，再通过 `getElementById` 方法将版本号打印到 HTML 中。

```javascript
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

你可以在下面的 CodePen 控件中分别对 HTML、CSS 和 JavaScript 文件进行编辑，并运行项目验证效果。如果运行成功，HTML 页面会显示 SDK 的版本号并检查 SDK 是否兼容当前浏览器。

项目中已经引用了 SDK 文件作为外部 JavaScript，你可以点击 **Resources** 按钮查看。

<iframe height="800" style="width: 100%;" scrolling="no" title="Agora RTC Web SDK Tutorial" src="https://codepen.io/yamasite/embed/preview/dyZaqMM?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="{true}" allow="microphone;camera">
  See the Pen <a href="https://codepen.io/yamasite/pen/dyZaqMM">
  Agora RTC Web SDK Tutorial</a> by Lutkin Wang (<a href="https://codepen.io/yamasite">@yamasite</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 课后练习

<Newquiz01 />
