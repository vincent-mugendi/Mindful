import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./SignupForm.css"

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Submitting form with data:', formData);

        fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            console.log('Response status:', response.status);
            return response.json();
        })
        .then(data => {
            console.log('Response data:', data);
            if (data.message === 'User registered successfully') {
                console.log('Registration successful, navigating to dashboard...');
                navigate('/dashboard');
                console.log('Navigation to dashboard attempted');
            } else {
                console.log('Registration failed:', data);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <section className="signup">
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2>Welcome to Mindful</h2>
                    <Link to="/"><img className="logo" src={logo} alt="mindful logo" /></Link>
                </div>

                <h3>Create an acccount</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
                <div className="footer">
                    <Link to="/login">
                    <p>
                        Already have an account? <span style={{ fontWeight: 'bold' }}>Log In Here</span>
                    </p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SignupForm;
