import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from '../axiosConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all fields.');
        } else {
            setError('');
            api.post('login/', { email, password }, { headers: { 'Content-Type': 'application/json' } })
                .then((response) => {
                    console.log('Login successful:', response.data);
                    localStorage.setItem('authToken', response.data.token); // Save token to localStorage
                    navigate('/admin'); // Redirect to profile page
                })
                .catch((err) => {
                    // Update error handling to check for the actual response structure
                    const errorMessage = err.response?.data?.error || 'Unexpected error occurred';
                    setError(`Error logging in: ${errorMessage}`);
                });
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card" style={{ width: '25rem' }}>
                <div className="card-body">
                    <h5 className="card-title text-center">Login</h5>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    <div className="mt-3 text-center">
                        <a href="/ForgotPassword">Forgot your password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
