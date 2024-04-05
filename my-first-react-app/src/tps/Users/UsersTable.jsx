import React, {useContext} from 'react';
import {UsersContext} from "./UsersApp";
import {Link} from "react-router-dom";

export default function UsersTable() {
    const context = useContext(UsersContext);
    const displayUsers = () => {
        return context.users.length > 0 ? context.users.map((user, key) => (
            <tr key={key}>
                <td scope="row">{user.id}</td>
                <td>{user.fullName}</td>
                <td>{user.country}</td>
                <td>
                    <Link to={`users/${user.id}/update`}  className="btn btn-primary mx-2">Update</Link>
                    <Link to={`users/${user.id}/delete`} className="btn btn-danger" >Delete</Link>
                </td>
            </tr>
        )) : <tr>
            <td className="text-center font-monospace" colSpan="4">There is no Users</td>
            </tr>

    }

    return (
        <>
            <h1 className="mt-2">Users Table : </h1>
            <table className="table table-striped table-inverse table-responsive">
                <thead className="thead-inverse">
                <tr>
                    <th>@Id</th>
                    <th>Full Name</th>
                    <th>Country</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {displayUsers()}
                </tbody>
            </table>
        </>
    );
}
