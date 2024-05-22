// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './components/landing/Landing.jsx';
import SignupForm from './components/signup/SignupForm.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import LoginForm from './components/login/Login.jsx';
import SelfAssessment from './components/self-assessment/Self_assessment.jsx';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/selfassessment" element={<SelfAssessment />} />
        </Routes>
    </Router>
);

export default App;
