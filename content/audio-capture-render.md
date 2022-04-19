---
title: "采集并渲染本地音频"
metaTitle: "采集并渲染本地音频"
metaDescription: "采集并渲染本地音频"
---

通过上一个部分的学习，你已经掌握了如何使用 SDK 采集并渲染本地视频。

在这个部分，你将学会如何使用声网实时音视频 Web SDK 采集并渲染本地音频。

## 实现方法

一般来说，如果在网页端需要通过麦克风采集音频，需要满足以下条件：

- 主机连接了麦克风。
- 浏览器拥有访问麦克风的权限。

对于声网实时音视频 Web SDK，你需要：

1. 调用 `getMicrophones` 获取可用的摄像头列表。

    `getMicrophones` 方法会通过 Promise 异步返回一个 `MediaDeviceInfo` 对象的数组。`MediaDeviceInfo` 对象复用了 WebRTC API 中的 [MediaDeviceInfo 对象](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo)。因为是异步方法，你可以使用 then/catch (ES6) 或 async/await (ES7) 获取返回值。

    **JavaScript**

    ```javascript
    // 获取可用的麦克风设备列表。
    // 调用时，如果浏览器还没有获得麦克风访问权限，会在界面上提示你是否允许浏览器访问麦克风。
    AgoraRTC.getMicrophones()
    .then((deviceInfoArray) => {
        /* 返回 MediaDeviceInfo 数组对象之后的操作*/
    })
    .catch((e) => {
        console.log("Failed to get microphones!", e);
    });
    ```

2. 根据返回的 `MediaDeviceInfo` 对象获取摄像头设备信息。

    在此教程中，我们在 HTML 中创建一个下拉菜单来供用户选择使用的摄像头设备。在用户界面上使用 `label` 属性显示设备信息。`deviceId` 属性用于保存设备 ID，用于后续的摄像头访问。

    > `label`，即设备标签，返回一个 DOMString，代表描述对应设备的标签。如果浏览器没有获取设备权限，则返回 `""`。

    > `deviceId`，即设备 ID，返回一个 DOMString，代表对应设备。设备 ID 对于应用是唯一的，只要浏览器的 cookie 没有被清除，即使你开启了新的浏览器会话（session），设备 ID 也会保持不变。如果你清除了浏览器 cookie，则设备 ID 会重置。同理，如果你开启了浏览器隐私模式，对于同一个设备，每个浏览器会话的设备 ID 都是不同的。因此，建议每次对设备进行操作时重新获取设备 ID。

    **HTML**

    ```html
    <h1>通过麦克风采集并在本地渲染音频</h1>
    <form>
    <b> 选择你要使用的麦克风 </b>
    <select id = "microphoneList" onchange = "getDeviceId()" >
    <option> ---选择麦克风--- </option>
    </select>
    </form>
    <p>你选择设备的 deviceId 是：</p>
    <p id="deviceId"></p>
    ```

    **JavaScript**

    ```javascript
    // 定义设备 ID 与标签的映射
    let dict = {};

    // 获取摄像头列表
    AgoraRTC.getMicrophones()
    .then((deviceInfoArray) => {
        for (let deviceInfo of deviceInfoArray) {
        let option = document.createElement("option");
        document.getElementById("microphoneList").appendChild(option);
        option.innerHTML = deviceInfo.label;
        dict[deviceInfo.label] = deviceInfo.deviceId;
        }
    })
    .catch((e) => {
        console.log("Failed to get microphones!", e);
    });

    // 根据下拉菜单选择的设备标签，显示相应的设备 ID
    function getDeviceId() {
        let microphoneList = document.getElementById("microphoneList");
        let deviceLabel = microphoneList.options[microphoneList.selectedIndex].text;
        document.getElementById("deviceId").innerHTML = dict[deviceLabel];
    }
    ```

3. 调用 `createMicrophoneAudioTrack` 创建麦克风音频轨道并调用成员方法 `play` 通过系统默认扬声器对视频进行渲染。这里轨道的概念和 WebRTC 中的 [track](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaStreamTrack) 相似。一个轨道代表一路特定的视频源或音频源。声网 SDK 将不同来源的音视频轨道进行抽象，定义了摄像头视频轨道、屏幕采集视频轨道及自定义源视频轨道等。

    > 这个步骤只是为了演示麦克风音频轨道的渲染。实际开发通话应用时，本地不需要播放本地麦克风采集的音频。

    **HTML**

    ```html
    <h1>通过麦克风采集并在本地渲染音频</h1>
    <form>
    <b> 选择你要使用的麦克风 </b>
    <select id="microphoneList" onchange="getDeviceId()">
        <option> ---选择麦克风--- </option>
    </select>
    </form>
    <p>你选择设备的 deviceId 是：</p>
    <p id="deviceId"></p>
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
    // 全局变量
    let dict = {}; // 使用 dict 映射设备标签和设备 ID
    let selectedDeviceId = ""; // 下选框选择的设备对应的 ID
    let microphoneAudioTrack = null; // 麦克风音频轨道对象

    // 获取本地麦克风列表
    AgoraRTC.getMicrophones()
    .then((deviceInfoArray) => {
        for (let deviceInfo of deviceInfoArray) {
        let option = document.createElement("option");
        document.getElementById("microphoneList").appendChild(option);
        option.innerHTML = deviceInfo.label;
        dict[deviceInfo.label] = deviceInfo.deviceId;
        }
    })
    .catch((e) => {
        console.log("Failed to get microphones!", e);
    });

    // 创建麦克风音频轨道
    AgoraRTC.createMicrophoneAudioTrack()
    .then((microphoneAudioTrack) => {
        // 渲染音频。SDK 使用系统默认的扬声器播放声音。
        microphoneAudioTrack.play();
    })
    .catch((e) => {
        console.log("Failed to play audio!", e);
    });

    // 根据选择的设备标签，返回对应的设备 ID 并传给麦克风音频轨道
    function getDeviceId() {
    let microphoneList = document.getElementById("microphoneList");
    let deviceLabel = microphoneList.options[microphoneList.selectedIndex].text;
    selectedDeviceId = dict[deviceLabel];
    document.getElementById("deviceId").innerHTML = selectedDeviceId;

    if (microphoneAudioTrack != null) {
        microphoneAudioTrack.setDevice(selectedDeviceId);
    }
    }

    ```

## 效果验证

你可以在下面的 CodePen 控件中分别对 HTML、CSS 和 JavaScript 文件进行编辑，并运行项目验证效果。如果运行成功，HTML 页面会显示你的麦克风的设备 ID，并在本地渲染麦克风采集的音频。

<iframe height="800" style="width: 100%;" scrolling="no" title="03: Capture audio through microphone and render locally" src="https://codepen.io/yamasite/embed/preview/qBVGbPz?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="{true}" allow="microphone;camera">
  See the Pen <a href="https://codepen.io/yamasite/pen/qBVGbPz">
  03: Capture audio through microphone and render locally</a> by Lutkin Wang (<a href="https://codepen.io/yamasite">@yamasite</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 课后练习

<Newquiz03 />