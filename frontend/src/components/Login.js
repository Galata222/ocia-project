import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from '../axiosConfig'; // Adjust import based on your axios configuration
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
                    navigate('/dashboard'); // Navigate to dashboard or any page you like
                })
                .catch((err) => {
                    setError('Error logging in: ' + (err.response && err.response.data ? err.response.data.error : 'Unexpected error'));
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
                        <a href="#">Forgot your password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
