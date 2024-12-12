import React from 'react';
import '../../style/notificationoverview.css';

function NotificationOverview() {
  const notifications = [
    { id: 1, message: 'You have a new message from Admin team.', date: '2024-12-01' },
    { id: 2, message: 'Your payment was successful!', date: '2024-11-30' },
    { id: 3, message: 'New risk submitted.', date: '2024-11-29' },
    { id: 5, message: 'Password change successful.', date: '2024-11-27' },
  ];

  return (
    <div className="notificationoverview_container">
      <h2 className="notificationoverview_title">Notification Overview</h2>
      <div className="notificationoverview_summary">
        <div className="notificationoverview_item">
          <span className="notificationoverview_label">Total Notifications:</span>
          <span className="notificationoverview_value">{notifications.length}</span>
        </div>
      </div>
      <ul className="notificationoverview_list">
        {notifications.map((notification) => (
          <li key={notification.id} className="notificationoverview_notification">
            <span className="notificationoverview_message">{notification.message}</span>
            <span className="notificationoverview_date">{notification.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationOverview;