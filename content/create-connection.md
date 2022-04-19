---
title: "建立传输通道"
metaTitle: "建立传输通道"
metaDescription: "建立传输通道"
---

通过上一个部分的学习，你已经掌握了如何使用声网实时音视频 Web SDK 采集并渲染本地音频。

在这个部分，你将学会如何使用声网实时音视频 Web SDK 创建音视频传输通道。

## 实现方法

假设 Alice 想和 Bob 进行音视频通话，他们就需要创建一个传输通道，这个通道需要满足以下条件：

- 通道可以双向传输音视频信号。

    > 声网实时音视频 Web SDK 的传输通道就是声网自研的[软件定义实时传输网（SD-RTN™）](https://www.agora.io/cn/sd-rtn)。
- Alice 需要知道 Bob 在传输通道上的地址；Bob 也需要知道 Alice 在传输通道上的地址。

    > 声网实时音视频 Web SDK 定义了用户名（uid），用于标记某个特定的人，从而实现一对一通话。

    > 但是，通话的场景显然不止一对一，还可能是一对多或者多对多。比如，Alice、Bob 和 Charlie 三人互相视频通话。在这种情况下，一个一个互相传输用户名会非常麻烦，因此声网实时音视频 Web SDK 还引入了频道（channel）的概念。一个频道可以容纳多人。如果三个人都加入相同的频道，就可以在频道中广播发送媒体流，这样频道内的其他人都能收到媒体流而无需一对一传递用户名信息。

在声网实时音视频 Web SDK 中，你需要进行以下操作：

1. 调用 `createClient` 创建客户端实例。

    你需要配置传输通道模式、视频编码格式等参数。SDK 会把采集的音视频帧进行编码后发送到 SD-RTN™ 进行传输。

    ```javascript
    // 通话模式，VP8 视频编码格式
    let config = {mode: "rtc", codec: "vp8"};
    // 创建客户端实例。createClient 方法返回一个 AgoraRTCClient 对象。
    let client = AgoraRTC.createClient(config);
    ```

2. 为频道创建事件监听器。

   `createClient` 返回的客户端实例是一个 `AgoraRTCClient` 对象，而 `AgoraRTCClient` 类继承了 Node.js 的 [EventEmitter 类](https://nodejs.org/api/events.html#class-eventemitter)。因此你可以使用 `emitter.on(eventName, listener)` 为相应的事件添加监听器。声网实时音视频 Web SDK 通过事件返回传输通道的状态，包括用户加入或离开频道的提醒、传输通道网络状态反馈等。同理，你也可以使用 `emitter.off(eventName, listener)` 移除监听器。

    仿照 `EventEmitter` 创建事件监听的逻辑：

    ```javascript
    server.on('connection', (stream) => {
        console.log('someone connected!');
    });
    ```

    我们可以为频道创建以下监听器：

    ```javascript
    // 添加远端用户成功加入当前频道事件监听器
    client.on('user-joined', (AgoraRTCRemoteUser) => {
        console.log('用户：' +  AgoraRTCRemoteUser.uid + ' 加入当前频道');
    });
    ```

3. 调用 `join` 方法加入频道。你需要配置 App ID、Token、频道名（channelId）和用户名（uid）。

    > App ID 是你的应用使用声网云服务的凭证。你会发现，教程之前的部分完全没有用到 App ID，这是因为你之前的操作都是在本地进行的，并没有涉及到音视频传输。你需要参考 [开始使用 Agora 平台](https://docs.agora.io/cn/Agora%20Platform/get_appid_token?platform=All%20Platforms) 注册声网 Agora 账号，创建一个声网 Agora 项目（鉴权机制选择 **调试模式：App ID** ）并获取 App ID。对于同一款应用，应当使用相同的 App ID 认证。使用不同 App ID 的应用是无法互相通信的。

    > Token 是声网为了提升你的 App 的安全性而设计的一种鉴权机制，与 App ID 结合使用。你可以自行选择是否启用。出于学习成本的考虑，为了降低复杂度，本教程建议你暂不使用 Token 鉴权。如果你还是选择使用 Token 鉴权，详见 [开始使用 Agora 平台](https://docs.agora.io/cn/Agora%20Platform/get_appid_token?platform=All%20Platforms) 获取一个音视频临时 Token。

    > 频道名和用户名的概念可以参考上文的解释。如果你没有启用 Token 鉴权，你可以任意为频道名和用户名命名。例如，频道名可以是 `"testChannel"`，用户名可以是 `123456`。如果你启用了 Token 鉴权，因为 Token 是包含频道信息的，你需要保证频道名与生成临时 Token 时填入的频道名一致。

    ```javascript
    // 声网 App ID
    let appId = "";
    // 频道名。
    let channelId = "testChannel";
    // Token。不使用 Token 鉴权时填 null。
    let token = null;
    // 用户名。
    let uid = 123456;

    // 加入频道
    client.join(appId, channelId, token, uid)
    .then((uid) => {
        console.log(uid + " joined channel!");
    })
    .catch((e) => {
        console.log("Failed to join channel!", e);
    });
    ```

## 效果验证

你可以在下面的 CodePen 控件中分别对 HTML、CSS 和 JavaScript 文件进行编辑（例如将 user ID 改为 654321），并运行项目验证效果。如果运行成功，页面会显示加入频道成功的信息。

此外，你还可以在一个新的选项卡中重复打开此页面，修改 JavaScript 文件中的 uid 变量的值，模拟远端用户加入频道。你是不能使用同一个用户 ID 重复加入一个频道的。

> 你需要在 appId 变量中填入 App ID 才能成功加入频道。参考上文注册声网账号、创建项目并获取 App ID。请不要在公共仓库或页面保存你的 App ID。

> 本示例假设你的声网项目没有开通 Token 鉴权。如果你想尝试 Token 鉴权，请根据 [开始使用 Agora 平台](https://docs.agora.io/cn/Agora%20Platform/get_appid_token?platform=All%20Platforms) 生成 RTC 临时 token 并将值填入 token 参数。

<iframe height="800" style="width: 100%;" scrolling="no" title="04: Create a transmission channel" src="https://codepen.io/yamasite/embed/preview/wvPLgjL?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="{true}" allow="microphone;camera">
  See the Pen <a href="https://codepen.io/yamasite/pen/wvPLgjL">
  04: Create a transmission channel</a> by Lutkin Wang (<a href="https://codepen.io/yamasite">@yamasite</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 课后练习

<Newquiz04 />