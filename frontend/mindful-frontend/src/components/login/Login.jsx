import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";


const LoginForm = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Clear previous error

        fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data.message === 'Login successful') {
                localStorage.setItem('username', formData.username);
                navigate('/dashboard');
            } else {
                setError(data.error || 'Login failed');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        });
    };

    return (
        <>
            <div className="login-form-container">
                <div className="login-card">
                    
                    <div className='header'>
                        <h2>Welcome back</h2>
                        <Link to="/">
                            <img className="logo" src={logo} alt="mindful logo" />
                        </Link>
                    </div>


                    <form onSubmit={handleSubmit}>
                        <div className="login-form-group">
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="login-form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        {error && <p className="login-error">{error}</p>}
                        <div>
                            <button type="submit" className="login-button">Login</button>
                        </div>
                    </form>

                    <div className="footer">
                    <Link to="/signup">
                    <p>
                        Don't have an account? <span style={{ fontWeight: 'bold' }}>Create One Here</span>
                    </p>
                    </Link>
                </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
