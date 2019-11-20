import React from 'react';
import './App.css';
// import { Link } from "react-router-dom";


function Navbar(){

    const navStyle = {
        color: 'white'
    }

    return (
        <nav className="nav">
            <h1 id="title" >THE COOK NOOK</h1>
            {/* <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
            </ul> */}
        </nav>
    )
}

export default Navbar;

