import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import './header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <Link to="/"><img className="logo" src={logo} alt="mindful logo" /></Link>
                
                <ul className="navbar">
                    <li><a href="#">I need Help</a></li>
                    <li><a href="#">Learn</a></li>
                    <li><a href="#">Our Story</a></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;