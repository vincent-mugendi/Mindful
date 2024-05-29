import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import './DashboardHeader.css';

const DashboardHeader = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('authToken');
        navigate('/login');
    };

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
                        <li><a href="#">I need Help</a></li>
                        <li><a href="#">Learn</a></li>
                        <li>
                            <Link to="/selfassessment">Self Assessment</Link>
                        </li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#" onClick={handleLogout}>Logout</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default DashboardHeader;
