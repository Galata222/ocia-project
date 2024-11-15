import React, { useEffect, useState } from 'react';
import '../style/notification.css';

const Notification = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch('backend here');
                const data = await response.json();
                setNotifications(data);
            } catch (error) {
                console.error("Error fetching notifications:", error);
            }
        };

        fetchNotifications();
    }, []);

    return (
        <div className="notification-component">
            <h1>Notifications</h1>
            <div className="notification-list">
                {notifications.length > 0 ? (
                    notifications.map((notification, index) => (
                        <div className="notification" key={index}>
                            <h4>{notification.title}</h4>
                            <p>{notification.details}</p>
                            <p><strong>To:</strong> {notification.recipient}</p>
                            <p><strong>Action Required:</strong> {notification.actionRequired}</p>
                            <p><small>{new Date(notification.timestamp).toLocaleString()}</small></p>
                        </div>
                    ))
                ) : (
                    <p>No notifications available.</p>
                )}
            </div>
        </div>
    );
};

export default Notification;