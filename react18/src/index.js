import React from 'react';
import ReactDOM from 'react-dom/client';
import HookDemo from './hook-demo';
import ClassDemo from './class-demo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HookDemo />
    <ClassDemo/>
  </React.StrictMode>
);

