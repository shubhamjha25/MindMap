import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo.png';

function Navbar({setIsLogin}) {

    const logoutSubmit = () => {
        localStorage.clear();
        setIsLogin(false);
    }

    return (
        <section className="navbar">
            <div className="logo">    
                <img className="mindmap-logo" src={Logo} alt="MindMap Logo"/>
            </div>
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Make a Note</Link></li>
                <li onClick={logoutSubmit}><Link to="/">Logout</Link></li>
            </ul>
        </section>
    )
}

export default Navbar;