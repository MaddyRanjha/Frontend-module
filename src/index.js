import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ModuleTest from './ModuleTest';
import ModuleMock from './moduleMock';
import Stopwatch from './stopwatch';
import Mocktest from './mocktest';
import Mocktest31 from './mocktest31';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ModuleTest />
     {/* <ModuleMock /> */}
    {/* <Stopwatch /> */} 
    {/* <Mocktest /> */}
    {/* <Mocktest31 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
