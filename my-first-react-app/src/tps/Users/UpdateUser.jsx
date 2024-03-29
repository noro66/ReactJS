import React, {useContext, useEffect, useRef, useState} from 'react';
import {UsersContext} from "./UsersApp";
import {useParams} from "react-router-dom";

function AddUser({onAddUser}) {
    const fullNameRef = useRef(null);
    const countryRef = useRef(null);
    const idRef = useRef(0);
    const context = useContext(UsersContext);
    const [user, setUser] = useState({});
    const params = useParams();

    useEffect(() => {
        const {id} = params
        const userbuffer = context.users.filter(user => user.id === parseInt(id));
        userbuffer.length > 0 && setUser(...userbuffer)
    }, []);
    const  handelSubmit = (e) =>{
        e.preventDefault();
        const fullName = fullNameRef.current.value;
        const country = countryRef.current.value;
        const id = idRef.current.value;
        if (fullName && country && id){
            context.updateUser({
                payload: {
                    id: parseInt(id),
                    fullName : fullName,
                    country : country
                }
            });
        }
    }

    return (
        <form onSubmit={handelSubmit} >
            <div className="form-group">
                <label htmlFor="id">ID</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    id="id"
                    name="id"
                    ref={idRef}
                    disabled
                    defaultValue={user.id}
                />
            </div>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    ref={fullNameRef}
                    type="text"
                    className="form-control mb-3"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                    defaultValue={user.fullName}
                />
            </div>
            <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                    ref={countryRef}
                    type="text"
                    className="form-control mb-3"
                    id="country"
                    name="country"
                    placeholder="Enter country"
                    defaultValue={user.country}
                />
            </div>
            <button type="submit" className="btn btn-primary">Update User</button>
        </form>
    );
}

export default AddUser;