import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ToogleName from "./Toogle/toogleName";

const root = ReactDOM.createRoot(document.getElementById('root'));
const fruits = ['dela7', 'le3neb', 'teffah', 'lbanan']
root.render(
  <React.StrictMode>
      <ToogleName/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
