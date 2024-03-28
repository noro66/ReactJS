import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FormValidation from "./forms/FormValidation";
import App from "./Route/App";
import UsersApp from "./tps/Users/UsersApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
// const fruits = ['dela7', 'le3neb', 'teffah', 'lbanan']
root.render(
        <div className="container m-auto mt-3">
        <UsersApp/>
        </div>

);

