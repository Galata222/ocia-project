import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const NotificationsWrite = () => {
    const [message, setMessage] = useState('');
    const [notificationType, setNotificationType] = useState('info');
    const [targetUser, setTargetUser] = useState(''); // User ID or empty for all users
    const [users, setUsers] = useState([]);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    // Fetch list of users for admin to select
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.get('/users/'); // Make sure the API endpoint exists
                setUsers(response.data);
            } catch (err) {
                console.error('Failed to fetch users:', err);
                setError('Failed to load users. Please try again later.');
            }
        };

        fetchUsers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!message.trim()) {
            setError('Message cannot be empty.');
            return;
        }

        try {
            const data = {
                message,
                notification_type: notificationType,
                user_id: targetUser || null, // null means send to all
            };
            const response = await api.post('/notifications/send/', data);
            setSuccess(response.data.detail || 'Notification sent successfully!');
            setMessage('');
            setTargetUser('');
            setNotificationType('info');
            // Optionally refocus the message field
            document.getElementById('message').focus();
        } catch (err) {
            const errorMessage = err.response?.data?.detail || 'Failed to send notification.';
            setError(errorMessage);
        }
    };

    return (
        <div>
            <h2>Send Notification</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        id="message"
                        className="form-control"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="notificationType" className="form-label">Notification Type</label>
                    <select
                        id="notificationType"
                        className="form-control"
                        value={notificationType}
                        onChange={(e) => setNotificationType(e.target.value)}
                    >
                        <option value="info">Info</option>
                        <option value="success">Success</option>
                        <option value="warning">Warning</option>
                        <option value="error">Error</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="targetUser" className="form-label">Send to</label>
                    <select
                        id="targetUser"
                        className="form-control"
                        value={targetUser}
                        onChange={(e) => setTargetUser(e.target.value)}
                    >
                        <option value="">All Users</option>
                        {users.map((user) => (
                            <option key={user.user_id} value={user.user_id}>
                                {user.first_name} {user.last_name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Send Notification</button>
            </form>
        </div>
    );
};

export default NotificationsWrite;
