import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header.jsx';
import LandingPage from './components/landing/Landing.jsx';
import SignupForm from './components/signup/SignupForm.jsx';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupForm />} />
            {/* Add other routes here */}
        </Routes>
    </Router>
);

export default App;
