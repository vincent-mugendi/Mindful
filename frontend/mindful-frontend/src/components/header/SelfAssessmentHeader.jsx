import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../header/DashboardHeader.css";
import logo from "../../assets/logo.png";


const SelfAssesmentHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="dashboard-header">
                <nav className="dashboard-nav">
                    <Link to="/dashboard"><img className="dashboard-logo" src={logo} alt="mindful logo" /></Link>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? 'Close' : 'Menu'}
                    </button>
                    <ul className={`dashboard-navbar ${isMenuOpen ? 'open' : ''}`}>
                        <li>
                            <span id="active">Self Assessment</span>
                        </li>
                        <li><a href="#">Community</a></li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default SelfAssesmentHeader;