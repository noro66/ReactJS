import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from "./HelloReact/hello";
import Input from "./forms/input";
import Fruits from "./fruits";
import Counter from "./Counter/counter";
import Event from "./Event/event";
import Form from "./forms/form";




const root = ReactDOM.createRoot(document.getElementById('root'));
const fruits = ['dela7', 'le3neb', 'teffah', 'lbanan']
root.render(
  <React.StrictMode>
      <Form/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
