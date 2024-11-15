import React, { useEffect, useState } from 'react';
import api from '../axiosConfig';
import DataTable from 'react-data-table-component';
import "../style/register.css";

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false); // State to toggle form visibility

    // State for registration form
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
        password: '',
        confirmPassword: '',
        role: 'user',
    });

    const [message, setMessage] = useState('');
    const [registrationError, setRegistrationError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('accessToken');
                const response = await api.get('users/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsers(response.data);
            } catch (error) {
                setError('There was an error fetching the users!');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setRegistrationError("Passwords do not match.");
            return;
        }

        try {
            const response = await api.post('/register/', formData);
            setMessage('User registered successfully! A confirmation email has been sent.');
            setRegistrationError('');
            // Reset the form
            setFormData({
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
                password: '',
                confirmPassword: '',
                role: 'user',
            });
            setShowForm(false); // Hide the form after successful registration
        } catch (err) {
            const errorMessage = err.response?.data?.detail || 'Error registering user.';
            setRegistrationError(errorMessage);
            setMessage('');
        }
    };

    const columns = [
        { name: 'Username', selector: row => row.email, sortable: true },
        { name: 'First Name', selector: row => row.first_name, sortable: true },
        { name: 'Last Name', selector: row => row.last_name, sortable: true },
        { name: 'Status', selector: row => row.status, sortable: true },
    ];

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>User List</h2>
            {users.length > 0 ? (
                <DataTable
                    columns={columns}
                    data={users}
                    pagination
                    highlightOnHover
                    pointerOnHover
                />
            ) : (
                <p>No users found.</p>
            )}

            <button onClick={() => setShowForm(!showForm)} className="register__button">
                {showForm ? 'Cancel' : 'Register New User'}
            </button>

            {showForm && (
                <form className="register__form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="first_name"
                        className="register__input"
                        placeholder="First Name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="last_name"
                        className="register__input"
                        placeholder="Last Name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="age"
                        className="register__input"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                    <select
                        name="gender"
                        className="register__select"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <input
                        type="email"
                        name="email"
                        className="register__input"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        className="register__input"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        className="register__input"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="occupation"
                        className="register__input"
                        placeholder="Occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="employer"
                        className="register__input"
                        placeholder="Employer"
                        value={formData.employer}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="monthly_income"
                        className="register__input"
                        placeholder="Monthly Income"
                        value={formData.monthly_income}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="bank_name"
                        className="register__input"
                        placeholder="Bank Name"
                        value={formData.bank_name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="bank_account_number"
                        className="register__input"
                        placeholder="Bank Account Number"
                        value={formData.bank_account_number}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="swift_bic_code"
                        className="register__input"
                        placeholder="SWIFT/BIC Code"
                        value={formData.swift_bic_code}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        className="register__input"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        className="register__input"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    
                    <button type="submit" className="register__button">Register</button>
                </form>
            )}

            {message && <p className="register__message">{message}</p>}
            {registrationError && <p className="register__error">{registrationError}</p>}
        </div>
    );
};

export default ManageUsers;