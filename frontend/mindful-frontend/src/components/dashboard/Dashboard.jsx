import React, { useEffect, useState } from 'react';
import Dashboardheader from '../header/Dashboardheader';
import { Link } from "react-router-dom";
import DashboardWelcome from './DashboardWelcome';

const Dashboard = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Fetch the username from the server or local storage
        // Here we assume it's stored in local storage
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    return (
        <div>
            <Dashboardheader username={username} />
            <DashboardWelcome />
            <h1>Dashboard Content</h1>
            <Link to="/selfassessment">Self Assessment</Link>
        </div>
    );
};

export default Dashboard;
