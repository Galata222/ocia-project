import React, { useState } from 'react';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';
const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault(); // Prevent page reload
        try {
            await login(email, password); // Pass email instead of username
            navigate('/ProfileHome');
            window.location.reload(); // Reload to apply new auth state
        } catch (error) {
            setError("Login failed");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card" style={{ width: '25rem' }}>
                <div className="card-body">
                    <h5 className="card-title text-center">Login</h5>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleLogin}>
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
                        <button 
                            className="btn btn-link" 
                            onClick={() => alert("Forgot password functionality is not implemented yet.")}>
                            Forgot your password?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
