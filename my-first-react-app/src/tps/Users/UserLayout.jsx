import React from 'react';
import {BrowserRouter, Link, Outlet, Route, Routes} from "react-router-dom";
import UsersTable from "./UsersTable";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";

function UserLayout(props) {
    return (
       <>
           <BrowserRouter>
               <nav>
                   <ul className="nav justify-content-center">
                       <li className="nav-item">
                           <Link className='nav-link active' to={'/'}>Users List</Link>
                       </li>
                       <li className="nav-item">
                           <Link className='nav-link active' to={'/users/create'}>Add User</Link>
                       </li>
                   </ul>
               </nav>
               <Routes>
                   <Route index element={<UsersTable/>} />
                   <Route path={'/users/create'} element={<AddUser/>} />
                   <Route path={'/users/:id/update'} element={<UpdateUser/>} />
                   <Route path={'/users/:id/delete'} element={<DeleteUser/>} />
               </Routes>
           </BrowserRouter>
           <Outlet/>
       </>
    );
}

export default UserLayout;