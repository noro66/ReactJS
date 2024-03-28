import React from 'react';
import {Link, Outlet} from "react-router-dom";

function Layout(props) {
    return (
        <>
            <nav className='bg-primary-subtle'>
                <ul className="nav justify-content-center ">
                    <li className="nav-item">
                        <Link to='/' className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/blogs' className="nav-link">Link</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contacts' className="nav-link active">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="container m-auto">
                <Outlet/>
            </div>
        </>
    );
}

export default Layout;