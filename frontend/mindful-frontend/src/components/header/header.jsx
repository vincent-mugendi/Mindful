import React from "react";
import { Link } from "react-router-dom";

import './header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
            <ul className="navbar">
                <li><Link to="/">Mindful</Link></li>
                <li><Link to="/signup">SIGN UP</Link></li>
                <li><Link to="/login">LOG IN</Link></li>
            </ul>
        </nav>
        </div>
    )
}

export default Header;