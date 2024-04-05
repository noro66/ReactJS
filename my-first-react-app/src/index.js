import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {compose, pipe} from "lodash/fp";
import UsersApp from "./tps/Users/UsersApp";
import store from "./Redux/Store/Store";
import * as ActionTypes from "../src/Redux/Store/ActionTypes";

const root = ReactDOM.createRoot(document.getElementById('root'));
// const fruits = ['dela7', 'le3neb', 'teffah', 'lbanan']
const unsubscribe = store.subscribe(() =>{
        console.log("store changed ", store.getState())
})
store.dispatch({
        type: ActionTypes.ADD_BUG,
        payload : {
                description : "bug is added to the store",
        }
});
unsubscribe();
store.dispatch({
        type: ActionTypes.REMOVE_BUG,
        payload : {
                id: 1,
        }
})
console.log(store.getState())
const add = a => b => a + b;
console.log(add(6)(4))
const trim = str => str.trim();
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLower = str => str.toLowerCase();

const transform = pipe(trim, toLower, wrap('div'));
console.log(transform('javascript'));
root.render(
        <div className="container m-auto mt-3">
        {/*<UsersApp/>*/}
        </div>

);

