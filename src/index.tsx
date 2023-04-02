import "./index.css";

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProSidebarProvider } from "react-pro-sidebar";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <App />
    </ProSidebarProvider>
  </React.StrictMode>
);
