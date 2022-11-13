import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../context/AuthContext'
function Navbar() {
    const { user, logout } = useAuth();
    return (
        <div className='navbar'>
            <div className="wrapper">
                <NavLink exact activeClassName='active' to='/'>Home</NavLink>
                <NavLink activeClassName='active' to='/app'>App</NavLink>
                <NavLink activeClassName='active' to='/contact'>Contact</NavLink>
                {
                    !user && <NavLink activeClassName='active' to='/login'>Login</NavLink>
                }
                {
                    user && <button onClick={logout}>Logout</button>
                }
            </div>
        </div>
    )
}

export default Navbar