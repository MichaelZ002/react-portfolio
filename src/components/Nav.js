import React from "react";
import {Link} from 'react-router-dom'



function Nav(){

    return (
        <div id="header" className="container-fluid top">
        <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/">Michael Zaslavsky</Link>
            <header className="navbar" id="navbarSupportedContent">
                <ul className="navbar-nav list-group-horizontal header-links">
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </header>
        </nav>
    </div>
    )
}

export default Nav