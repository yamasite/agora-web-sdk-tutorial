---
title: "拓展内容：采集屏幕视频"
metaTitle: "拓展内容：采集屏幕视频"
metaDescription: "拓展内容：采集屏幕视频"
---

> 这个部分属于拓展内容，为选做，对下面的教程没有影响。如果你对采集屏幕视频没有兴趣，也可以直接跳转到下一个章节。

在这个部分，你将学会如何使用声网实时音视频 Web SDK 采集屏幕视频。

## 实现方法

要使用声网 SDK 实现浏览器端的屏幕共享，需要满足以下条件：

- 通过浏览器录制屏幕并截取系统声音。
- 将录制的视频和音频传输给 SDK。

对于声网实时音视频 Web SDK，你需要：

调用 `createScreenVideoTrack` 创建一个屏幕视频轨道。

**HTML**

```html
<h1>屏幕共享</h1>
<div>
  <button id="enable_sound">Share with Sound Enabled</button>
  <button id="disable_sound">Share with Sound Disabled</button>
</div>
<div id="play-area"></div>
```

**CSS**

```css
body {
font-family: system-ui;
background: #f06d06;
color: white;
text-align: center;
}

div {
height: 200px;
width: 50%;
}
```

**JavaScript**

```javascript
// 支持 Edge、Chrome、Safari、FireFox 浏览器
// 分享声音
document.getElementById("enable_sound").onclick = function shareWithSound() {
  AgoraRTC.createScreenVideoTrack(
    {
      // 配置编码属性
      encoderConfig: "1080p_1",
      // 设置视频传输优化模式，仅 Chrome 支持此参数
      optimizationMode: "detail",
      // 仅 FireFox 支持此参数
      screenSourceType: "screen" // 'screen', 'application', 'window'
    },
    // 允许传输音频。对于 Chrome 浏览器，仅在分享 Chrome 标签页时生效。分享 Chrome 标签页之外的页面会抛出错误。
    "enable"
  )
    .then((trackList) => {
      trackList[0].play("play-area");
      trackList[1].play();
    })
    .catch((e) => {
      console.log("Failed to play screen!", e);
    });
};

// 不分享声音
document.getElementById(
  "disable_sound"
).onclick = function shareWithoutSound() {
  AgoraRTC.createScreenVideoTrack(
    {
      // 配置编码属性
      encoderConfig: "1080p_1",
      // 设置视频传输优化模式，仅 Chrome 支持此参数
      optimizationMode: "detail",
      // 仅 FireFox 支持此参数
      screenSourceType: "screen" // 'screen', 'application', 'window'
      // 不允许传输音频。
    },
    "disable"
  )
    .then((screenVideoTrack) => {
      screenVideoTrack.play("play-area");
    })
    .catch((e) => {
      console.log("Failed to play screen!", e);
    });
};

```

## 效果验证

你可以在下面的 CodePen 控件中分别对 HTML、CSS 和 JavaScript 文件进行编辑，并运行项目验证效果。如果运行成功，HTML 页面会在本地渲染屏幕共享的画面和声音。

> 对于 Chrome 浏览器，示例代码中的分享音频选项仅在分享 Chrome 标签页时生效。如果你点击 **Share with Sound Enabled** 分享 Chrome 标签页之外的页面会抛出错误。

<iframe height="800" style="width: 100%;" scrolling="no" title="Extension: Screen sharing" src="https://codepen.io/yamasite/embed/preview/LYerLyK?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" allow="microphone; display-capture">
  See the Pen <a href="https://codepen.io/yamasite/pen/LYerLyK">
  Extension: Screen sharing</a> by Lutkin Wang (<a href="https://codepen.io/yamasite">@yamasite</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
