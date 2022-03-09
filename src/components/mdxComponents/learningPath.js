import * as React from 'react';

import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const learningPath = () => (
  <div><Timeline lineColor={'#ddd'}>
    <TimelineItem
      key="001"
      dateText="集成 SDK"
      dateInnerStyle={{ background: '#9CC9F4', color: '#000' }}
      style={{ color: '#9CC9F4' }}
    >
      <h3><a href="introduction">一行代码集成 SDK</a></h3>
      <p>将 SDK 集成到你的网页中。</p>
    </TimelineItem>
    <TimelineItem
      key="002"
      dateText="视频采集与渲染"
      dateInnerStyle={{ background: '#84BDF4', color: '#000' }}
      style={{ color: '#84BDF4' }}
    >
      <h3><a href="video-capture-render">采集并渲染本地视频</a></h3>
      <p>调用 SDK 操作本地摄像头，采集视频信号并在本地渲染。</p>
    </TimelineItem>
    <TimelineItem
      key="003"
      dateText="音频采集与渲染"
      dateInnerStyle={{ background: '#69B1F6', color: '#000' }}
      style={{ color: '#69B1F6' }}
    >
      <h3><a href="audio-capture-render">采集并渲染本地音频</a></h3>
      <p>调用 SDK 操作本地麦克风，采集音频信号并在本地渲染。</p>
    </TimelineItem>
    <TimelineItem
      key="004"
      dateText="建立传输通道"
      dateInnerStyle={{ background: '#3F9DF7', color: '#000' }}
      style={{ color: '#3F9DF7' }}
    >
      <h3><a href="create-connection">建立传输通道</a></h3>
      <p>调用 SDK 建立音视频传输通道。</p>
    </TimelineItem>
    <TimelineItem
      key="005"
      dateText="发送与接收媒体流"
      dateInnerStyle={{ background: '#1C8DFA', color: '#000' }}
      style={{ color: '#1C8DFA' }}
    >
      <h3><a href="send-receive-media">发送与接收媒体流</a></h3>
      <p>调用 SDK 发送本地采集的媒体流，接收并渲染远端发送的媒体流。</p>
    </TimelineItem>
  </Timeline>
  </div>
);
export default learningPath;