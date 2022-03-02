import * as React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
   {
     id: '1',
     type: 'input', // input node
     data: { label: '音视频采集设备' },
     position: { x: 250, y: 25 },
  },
  {
    id: '2',
    type: 'input', // input node
    data: { label: 'SDK' },
    position: { x: 250, y: 125 },
  },
  // default node
  {
    id: '3',
    // you can also pass a React component as a label
    data: { label: <div>浏览器</div> },
    position: { x: 250, y: 225 },
  },
  {
    id: '4',
    type: 'output', // output node
    data: { label: '软件定义实时传输网' },
    position: { x: 250, y: 325 },
  },
  // animated edge
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
];

const BasicFlow = () => (
  <div style={{ height: 500 }}>
    <ReactFlow
    elements={elements}
    paneMoveable={false}
    nodesDraggable={false}
    zoomOnScroll={false}
    panOnScroll={false}
    />
  </div>
);



export default BasicFlow;