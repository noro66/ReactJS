import React, {useContext, useEffect, useRef, useState} from 'react';
import {UsersContext} from "./UsersApp";
import {useParams} from "react-router-dom";

function AddUser({onAddUser}) {
    const context = useContext(UsersContext);
    const params = useParams();
    const  handelSubmit = (e) =>{
        e.preventDefault();
      const id = params.id;
            context.actions.deleteUser({
                payload: {
                    id: parseInt(id)
                }
            });

    }

    return (
        <>
            <h1>Are You sure you want to Delete this user ? </h1>
            <form onSubmit={handelSubmit}>
                <button type="submit" className="btn btn-danger">Delete User</button>
            </form>
        </>
    );
}

export default AddUser;