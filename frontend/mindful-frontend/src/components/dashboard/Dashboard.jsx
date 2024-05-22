import React, { useEffect, useState } from 'react';
import Dashboardheader from '../header/Dashboardheader';

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
            <h1>Dashboard Content</h1>
        </div>
    );
};

export default Dashboard;