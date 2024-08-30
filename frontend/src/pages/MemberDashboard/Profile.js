import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../axiosConfig'; // Adjust the path as necessary

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

    // Fetch user data when the component loads
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            api.get('/profile/', {
                headers: { 
                    Authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                setUserData(response.data);
                if (response.data.profile_picture) {
                    setProfilePicturePreview(response.data.profile_picture);
                }
            })
            .catch((err) => {
                setError('Failed to load user data.');
            });
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'profile_picture') {
            setUserData({
                ...userData,
                profile_picture: files[0]
            });
            // Create a preview URL for the selected profile picture
            setProfilePicturePreview(URL.createObjectURL(files[0]));
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
        for (const key in userData) {
            if (userData[key] !== null) { // Avoid appending null values
                formData.append(key, userData[key]);
            }
        }
        const token = localStorage.getItem('authToken');
        if (token) {
            api.put('/profile/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
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

    const handleDelete = () => {
        const token = localStorage.getItem('authToken');
        if (token) {
            api.delete('/profile/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(() => {
                setMessage('Account deleted successfully!');
                setError('');
                // Optionally redirect user or clear localStorage
                localStorage.removeItem('authToken');
                window.location.href = '/login'; // Redirect to login or home page
            })
            .catch(() => {
                setError('Error deleting account.');
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
                        type="text"
                        name="age"
                        value={userData.age}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Age"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <input
                        type="text"
                        name="gender"
                        value={userData.gender}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Gender"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="text"
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
                        type="text"
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
                <button type="button" onClick={handleDelete} className="btn btn-danger ms-2">Delete Account</button>
            </form>
        </div>
    );
};

export default Profile;
