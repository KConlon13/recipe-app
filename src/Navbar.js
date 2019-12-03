import React from 'react';
import './App.css';
import { Link } from "react-router-dom";


function Navbar(){

    const navStyle = {
        color: 'white',
    }

    return (
        <nav className="nav">
            <h1 id="title" >THE COOK NOOK</h1>
            <ul className="nav-links">
                    <Link style={navStyle} to="/">
                        <p>Home</p>
                    </Link>
                    <Link style={navStyle} to="/about">
                        <p>About</p>
                    </Link>
            </ul>
        </nav>
    )
}

export default Navbar;

