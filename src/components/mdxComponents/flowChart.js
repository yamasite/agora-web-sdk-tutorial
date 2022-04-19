import * as React from 'react';
import ReactFlow from 'react-flow-renderer';
import { MiniMap } from 'react-flow-renderer';
import { Controls } from 'react-flow-renderer';

const elements = [
   {
     id: '1',
     type: 'input', // input node
     data: { label: <div>音视频采集设备（摄像头、麦克风）</div>},
     position: { x: 50, y: 25 },
     style:{fontSize: 18},
  },
  {
    id: '2',
    type: 'input', // input node
    data: { label: <div>音视频渲染设备（屏幕、扬声器）</div> },
    position: { x: 50, y: 425 },
    style:{fontSize: 18},
  },
  {
    id: '3',
    type: 'default', // input node
    data: { label: <div>声网实时音视频 Web SDK</div> },
    position: { x: 0, y: 225 },
    style:{fontSize: 18},
  },
  {
    id: '5',
    type: 'default', // output node
    data: { label: <div>音视频传输通道（SD-RTN™）</div> },
    position: { x: 250, y: 225 },
    style:{fontSize: 18},
  },
  {
    id: '6',
    type: 'input', // input node
    data: { label: <div>音视频采集设备（摄像头、麦克风）</div>},
    position: { x: 450, y: 25 },
    style:{fontSize: 18},
 },
 {
   id: '7',
   type: 'input', // input node
   data: { label: <div>音视频渲染设备（屏幕、扬声器）</div> },
   position: { x: 450, y: 425 },
   style:{fontSize: 18},
 },
 {
   id: '8',
   type: 'default', // input node
   data: { label: <div>声网实时音视频 Web SDK</div> },
   position: { x: 500, y: 225 },
   style:{fontSize: 18},
 },
  // animated edge
  { id: 'e1-3', source: '1', target: '3', animated: true,  type: 'custom', arrowHeadType: 'arrow', style: { stroke: 'red' }, label:'采集', labelBgPadding: [8, 4],
  labelBgBorderRadius: 4,
  labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.5 },},
  { id: 'e3-2', source: '3', target: '2', animated: true,  type: 'custom', arrowHeadType: 'arrow', style: { stroke: 'purple' }, label:'渲染本地和远端音视频', labelBgPadding: [8, 4],
  labelBgBorderRadius: 4,
  labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.5 },},
  { id: 'e3-5', source: '3', target: '5', animated: true,  type: 'custom', arrowHeadType: 'arrow', style: { stroke: 'red' },label:'传输与编解码', labelBgPadding: [8, 4],
  labelBgBorderRadius: 4,
  labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.5 },},
  { id: 'e5-3', source: '5', target: '3', animated: true,  type: 'custom', arrowHeadType: 'arrow', style: { stroke: 'yellow' }},

  { id: 'e6-8', source: '6', target: '8', animated: true,  type: 'custom', arrowHeadType: 'arrow', style: { stroke: 'yellow' },label:'采集', labelBgPadding: [8, 4],
  labelBgBorderRadius: 4,
  labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.5 },},
  { id: 'e8-7', source: '8', target: '7', animated: true,  type: 'custom', arrowHeadType: 'arrow', style: { stroke: 'purple' }, label:'渲染本地和远端音视频', labelBgPadding: [8, 4],
  labelBgBorderRadius: 4,
  labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.5 },},
  { id: 'e8-5', source: '8', target: '5', animated: true,  type: 'custom', arrowHeadType: 'arrow', style: { stroke: 'yellow' }, label:'传输与编解码', labelBgPadding: [8, 4],
  labelBgBorderRadius: 4,
  labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.5 },},
  { id: 'e5-8', source: '5', target: '8', animated: true,  type: 'custom', arrowHeadType: 'arrow', style: { stroke: 'red' }},
];

// Use custom node styles
const customNodeStyles = {
    background: '#257C8E',
    color: '##769FCE',
    padding: 10,
    height: 800,
  };

const BasicFlow = () => (
  <div style={customNodeStyles}>
    <ReactFlow
    elements={elements}
    paneMoveable={false}
    nodesDraggable={true}
    zoomOnScroll={true}
    panOnScroll={true}
    panOnScrollMode={"vertical"}
    // panOnScrollSpeed={1}
    nodesConnectable={false}
    elementsSelectable={true}
    snapToGrid={true}
    zoomOnDoubleClick={false}
    >
        <Controls showInteractive={false}/>

        <MiniMap
        nodeColor={(node) => {
        switch (node.type) {
          case 'input':
            return '#00ff00';
          case 'default':
            return '#00ff00';
          case 'output':
            return '#00ff00';
          default:
            return '#eee';
        }
      }}
      nodeStrokeWidth={3}
    />
    </ReactFlow>
  </div>
);

export default BasicFlow;