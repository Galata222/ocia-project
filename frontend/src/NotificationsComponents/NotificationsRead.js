// NotificationsRead.js
import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const NotificationsRead = () => {
    const [notifications, setNotifications] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await api.get('/notifications/');
                setNotifications(response.data);
            } catch (err) {
                setError('Failed to fetch notifications.');
            }
        };

        fetchNotifications();
    }, []);

    const markAsRead = async (id) => {
        try {
            await api.patch(`/notifications/${id}/mark-as-read/`, { is_read: true });
            setNotifications((prev) =>
                prev.map((n) => (n.notification_id === id ? { ...n, is_read: true } : n))
            );
        } catch (err) {
            console.error('Failed to mark notification as read:', err);
        }
    };

    return (
        <div>
            <h2>Your Notifications</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {notifications.length === 0 ? (
                <p>No notifications available.</p>
            ) : (
                <ul className="list-group">
                    {notifications.map((notification) => (
                        <li
                            key={notification.notification_id}
                            className={`list-group-item ${notification.is_read ? '' : 'bg-light'}`}
                        >
                            <p>{notification.message}</p>
                            <small className="text-muted">
                                {new Date(notification.notification_date).toLocaleString()}
                            </small>
                            {!notification.is_read && (
                                <button
                                    className="btn btn-sm btn-secondary ms-2"
                                    onClick={() => markAsRead(notification.notification_id)}
                                >
                                    Mark as Read
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NotificationsRead;
