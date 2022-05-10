import React from 'react';
import ReactDOM from 'react-dom/client';
import HookDemo from './hook-demo';
import ClassDemo from './class-demo';
import './style.css'

// 引入样式文件
import 'agora-videojs/dist/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HookDemo />
    <ClassDemo/>
  </React.StrictMode>
);

