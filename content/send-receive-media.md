---
title: "发送与接收媒体流"
metaTitle: "发送与接收媒体流"
metaDescription: "发送与接收媒体流"
---

通过上一个部分的学习，你已经掌握了如何使用声网实时音视频 Web SDK 创建音视频传输通道。

在这个部分，你将学会如何使用声网实时音视频 Web SDK 发送与接收媒体流。

## 实现方法

现在 Alice 和 Bob 之间已经建立了传输通道。下一步，他们只需要在通道里发送媒体流，就可以实现视频通话。

在声网实时音视频 Web SDK 中，你需要进行以下操作：

1. 本地用户调用 `publish` 发送媒体流。

  > 还记得 **采集并渲染本地视频** 章节和 **采集并渲染本地音频** 章节创建的媒体轨道吗？你现在就可以通过 **建立传输通道** 章节创建的频道发布它们了！

  ```javascript
  // 发布摄像头视频轨道
  client
    .publish(cameraVideoTrack)
    .then(() => {
      console.log("视频轨道发布成功!");
    })
    .catch((e) => {
      console.log("视频轨道发布失败!", e);
    });
  // 发布麦克风音频轨道
  client
    .publish(microphoneAudioTrack)
    .then(() => {
      console.log("音频轨道发布成功!");
    })
    .catch((e) => {
      console.log("音频轨道发布失败!", e);
    });
  ```

2. 通过 `"user-published"` 事件监听接收远端用户发送的媒体流。远端用户发送媒体流之后，本地用户可以对媒体流进行订阅。

  ```javascript
  // 添加远端用户发送媒体流频道事件监听器
  client.on("user-published", (remoteUser) => {
    // 渲染远端视频
    client
    .subscribe(remoteUser, "video")
    .then((remoteVideoTrack) => {
      // 渲染音频。SDK 使用系统默认的扬声器播放声音。
      remoteVideoTrack.play("remote-video");
    })
    .catch((e) => {
      console.log("Failed to play video!", e);
    });

    // 渲染远端音频
    client
    .subscribe(remoteUser, "audio")
    .then((remoteAudioTrack) => {
      // 渲染音频。SDK 使用系统默认的扬声器播放声音。
      remoteAudioTrack.play();
    })
    .catch((e) => {
      console.log("Failed to play audio!", e);
    });
  })
  ```

## 效果验证

你可以在下面的 Codepen 控件中分别对 HTML、CSS 和 JavaScript 文件进行编辑，并运行项目验证效果。

此外，你还可以在一个新的选项卡中重复打开此页面，修改 JavaScript 文件中的 uid 变量的值（例如改为 654321），模拟远端用户加入频道。

<iframe height="800" style="width: 100%;" scrolling="no" title="05: Send and receive media tracks" src="https://codepen.io/yamasite/embed/preview/ExbqWoE?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="{true}" allow="camera;microphone">
  See the Pen <a href="https://codepen.io/yamasite/pen/ExbqWoE">
  05: Send and receive media tracks</a> by Lutkin Wang (<a href="https://codepen.io/yamasite">@yamasite</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 接下来我该做什么？

恭喜你使用声网实时音视频 Web SDK 完成了媒体流的发送与接收。到这一步，你已经了解了创建一个基于声网实时音视频 Web SDK 的浏览器应用的基本流程，并有能力通过 SDK 为网页端应用提供音视频通话能力。

接下来，你可以通过声网的[开发者文档](https://docs.agora.io/cn/Video/product_video?platform=Web)，进一步了解 SDK 的功能细节和基于 SDK 功能的场景方案。

我们后续还会推出覆盖更多功能、主题和场景的 SDK 教程，敬请关注。

## 课后练习

<Newquiz05 />