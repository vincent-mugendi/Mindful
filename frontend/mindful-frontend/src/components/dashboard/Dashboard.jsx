import React, { useEffect, useState } from 'react';
import Dashboardheader from '../header/Dashboardheader';
import DashboardWelcome from './DashboardWelcome';
import DashboardDailyNote from './DashboardDailyNote';
import DashboardTools from './DashboardTools';
import DashboardActionCenter from './DashboardActionCenter';
import LandingFooter from "../landing/LandingFooter";

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
            <Dashboardheader />
            <DashboardWelcome username={username} />
            <DashboardDailyNote />
            <DashboardTools />
            <DashboardActionCenter />
            <LandingFooter />
        </div>
    );
};

export default Dashboard;
