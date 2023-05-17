import * as React from 'react';
 
import { StrictMode } from 'react';
 
import { createRoot } from 'react-dom/client';
 
import { BrowserRouter } from 'react-router-dom';
 
// import ReactDOM from "react-dom/client";
 
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
 
 
import App from './App';
 
 
import './index.css'
 
const rootElement = document.getElementById('root');
 
const root = createRoot(rootElement);
 
 
root.render(
 
  <StrictMode>
 
    <BrowserRouter>
 
      <App />
 
    </BrowserRouter>
 
  </StrictMode>
 
);