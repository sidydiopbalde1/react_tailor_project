// src/components/NotificationList.js
import React from 'react';
import NotificationItem from './NotificationItem';

function NotificationList() {
  const notifications = [
    { id: 1, user: { name: "User1", avatar: "./uifaces-popular-image (2).jpg" }, text: "User1 liked your post." },
    // More notifications...
  ];

  return (
    <div className="notification-list">
      {notifications.map(notification => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
}

export default NotificationList;