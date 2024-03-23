import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FormValidation from "./forms/FormValidation";

const root = ReactDOM.createRoot(document.getElementById('root'));
// const fruits = ['dela7', 'le3neb', 'teffah', 'lbanan']
root.render(
    <React.StrictMode>
        <FormValidation/>
    </React.StrictMode>
);

