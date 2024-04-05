import React from 'react';
import {Provider} from "react-redux";
import {store} from './Store/Store';
import User from "./User";
import UserForm from "./UserForm";

const App = () => {
    return (
        <Provider store={store}>
            <div className="d-flex flex-column align-items-center gap-4">
                <UserForm/>
                <User />
            </div>
        </Provider>
    );
};

export default App;