import React, { useState } from 'react';
import api from '../axiosConfig';

const Register = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        age: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
        occupation: '',
        employer: '',
        monthly_income: '',
        bank_name: '',
        bank_account_number: '',
        swift_bic_code: '',
        registration_date: '',
        status: '',
        password: '',
    });

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('register/', formData)
            .then((response) => {
                setMessage('User registered successfully!');
                setError('');
            })
            .catch((err) => {
                setError('Error registering user: ' + JSON.stringify(err.response.data));
                setMessage('');
            });
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    value={formData.gender}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="occupation"
                    placeholder="Occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="employer"
                    placeholder="Employer"
                    value={formData.employer}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="monthly_income"
                    placeholder="Monthly Income"
                    value={formData.monthly_income}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="bank_name"
                    placeholder="Bank Name"
                    value={formData.bank_name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="bank_account_number"
                    placeholder="Bank Account Number"
                    value={formData.bank_account_number}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="swift_bic_code"
                    placeholder="SWIFT/BIC Code"
                    value={formData.swift_bic_code}
                    onChange={handleChange}
                />
                
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option value="">Select Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                </select>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Register;
