import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axiosConfig'; // Axios instance configured with base URL

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending POST request to the login endpoint
      const response = await api.post('/login/', { email, password });
      const { access, refresh, user_id, role, first_name, last_name, profile_picture } = response.data;

      // Storing tokens and user data in local storage
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      localStorage.setItem('user_id', user_id);
      localStorage.setItem('first_name', first_name);
      localStorage.setItem('last_name', last_name);
      localStorage.setItem('profile_picture', profile_picture || ''); // Store profile picture URL or default

      // Redirecting based on user role
      if (role === 'admin') {
        navigate('/admin');
      } else if (role === 'superadmin') {
        navigate('/superadmin'); // Add superadmin route if needed
      } else {
        navigate('/profileHome');
      }
    } catch (err) {
      // Handling error response and displaying error message
      const errorMessage = err.response?.data?.detail || 'An error occurred. Please try again.';
      setError(errorMessage);
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

export default Login;