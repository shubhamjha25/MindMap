import React from 'react';
import {Link} from 'react-router-dom';

function Navbar({setIsLogin}) {

    const logoutSubmit = () => {
        localStorage.clear();
        setIsLogin(false);
    }

    return (
        <header>
            <div className="logo">
                <h1><Link to="/">MindMap</Link></h1>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Make a Note</Link></li>
                <li onClick={logoutSubmit}><Link to="/">Logout</Link></li>
            </ul>
        </header>
    )
}

export default Navbar;