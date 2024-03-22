import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductList from "./tps/Store/ProductList";
import Form from "./forms/form";
import Event from "./Event/event";
import ValidationForm from "./forms/ValidationForm";

const root = ReactDOM.createRoot(document.getElementById('root'));
// const fruits = ['dela7', 'le3neb', 'teffah', 'lbanan']
root.render(
    <React.StrictMode>
        <ValidationForm/>
    </React.StrictMode>
);

