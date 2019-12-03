import React from 'react';
import './App.css';
import { Link } from "react-router-dom";


function Navbar(){

    const navStyle = {
        color: 'white',
    }

    return (
        <nav className="nav">

            <div class="pos-f-t">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg p-4">
                        
                        <ul className="nav-links">
                            <Link style={navStyle} to="/">
                                <p>Home</p>
                            </Link>
                            <Link style={navStyle} to="/about">
                                <p>About</p>
                            </Link>
                        </ul>

                    </div>
                </div>
                <nav class="navbar navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                </nav>
            </div>
            
            <h1 id="title" >THE COOK NOOK</h1>

            {/* <ul className="nav-links">
                    <Link style={navStyle} to="/">
                        <p>Home</p>
                    </Link>
                    <Link style={navStyle} to="/about">
                        <p>About</p>
                    </Link>
            </ul> */}

        </nav>
    )
}

export default Navbar;

