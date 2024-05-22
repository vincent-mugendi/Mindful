import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboardheader = ({ username }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user session or authentication state
        // This is a placeholder, adjust according to your auth logic
        localStorage.removeItem('authToken');
        navigate('/login'); // Redirect to login page
    };

    return (
        <header>
            <div className="header-content">
                <h1>Welcome, {username}!</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </header>
    );
};

export default Dashboardheader;
