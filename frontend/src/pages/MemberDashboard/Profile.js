import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../axiosConfig';
const mediaUrl = 'http://localhost:8000';
const Profile = () => {
    const [userData, setUserData] = useState({
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
        profile_picture: null,
    });

    const [profilePicturePreview, setProfilePicturePreview] = useState(null);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            api.get('/profile/', {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then((response) => {
                setUserData(response.data);
                // Set the profile picture preview, if available
                if (response.data.profile_picture) {
                    setProfilePicturePreview(`${mediaUrl}${response.data.profile_picture}`);
                }
            })
            .catch(() => setError('Failed to load user data.'));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'profile_picture') {
            if (files.length > 0) {
                setUserData({
                    ...userData,
                    profile_picture: files[0] // Store the file object directly
                });
                setProfilePicturePreview(URL.createObjectURL(files[0])); // Preview the new image
            }
        } else {
            setUserData({
                ...userData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(userData).forEach(([key, value]) => {
            if (value) {
                if (key === 'profile_picture' && value instanceof File) {
                    formData.append(key, value); // Append the file directly
                } else if (key !== 'profile_picture') {
                    formData.append(key, value);
                }
            }
        });
        const token = localStorage.getItem('accessToken');
        if (token) {
            api.put('/profile/', formData, {
                headers: {
                    Authorization: `Bearer ${token}` // Just include the Authorization header
                }
            })
            .then(() => {
                setMessage('Profile updated successfully!');
                setError('');
            })
            .catch(() => {
                setError('Error updating profile.');
                setMessage('');
            });
        }
    };

    return (
        <div className="container">
            <h2>User Profile</h2>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="profile_picture" className="form-label">Profile Picture</label>
                    <input
                        type="file"
                        name="profile_picture"
                        onChange={handleChange}
                        className="form-control"
                    />
                    {profilePicturePreview && (
                        <div className="mt-2">
                            <img
                                src={profilePicturePreview}
                                alt="Profile Preview"
                                style={{ maxWidth: '200px', maxHeight: '200px' }}
                                className="img-thumbnail"
                            />
                        </div>
                    )}
                    {userData.profile_picture && !profilePicturePreview && (
                        <div className="mt-2">
                            <p>Current Profile Picture: {userData.profile_picture.split('/').pop()}</p>
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        value={userData.first_name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="First Name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        value={userData.last_name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Last Name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input
                        type="number"
                        name="age"
                        value={userData.age}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Age"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select
                        name="gender"
                        value={userData.gender}
                        onChange={handleChange}
                        className="form-control"
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Phone"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={userData.address}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Address"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="occupation" className="form-label">Occupation</label>
                    <input
                        type="text"
                        name="occupation"
                        value={userData.occupation}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Occupation"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="employer" className="form-label">Employer</label>
                    <input
                        type="text"
                        name="employer"
                        value={userData.employer}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Employer"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="monthly_income" className="form-label">Monthly Income</label>
                    <input
                        type="number"
                        name="monthly_income"
                        value={userData.monthly_income}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Monthly Income"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="bank_name" className="form-label">Bank Name</label>
                    <input
                        type="text"
                        name="bank_name"
                        value={userData.bank_name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Bank Name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="bank_account_number" className="form-label">Bank Account Number</label>
                    <input
                        type="text"
                        name="bank_account_number"
                        value={userData.bank_account_number}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Bank Account Number"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="swift_bic_code" className="form-label">SWIFT/BIC Code</label>
                    <input
                        type="text"
                        name="swift_bic_code"
                        value={userData.swift_bic_code}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="SWIFT/BIC Code"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;