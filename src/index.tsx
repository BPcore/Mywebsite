import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// runtime helper sets the CSS variable --header-height to the actual header height
// this ensures the hero negative-margin math matches the real header size on all devices
import './set-header-height';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);