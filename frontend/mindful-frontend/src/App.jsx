// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './components/landing/Landing.jsx';
import SignupForm from './components/signup/SignupForm.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx'; // Import Dashboard component

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/dashboard" element={<Dashboard />} /> {/* Add dashboard route */}
        </Routes>
    </Router>
);

export default App;
