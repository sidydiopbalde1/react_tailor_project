// src/components/NotificationItem.js
import React from 'react';

function NotificationItem({ notification }) {
  return (
    <div className="notification-item">
      <img src={notification.user.avatar} alt={notification.user.name} className="avatar" />
      <p>{notification.text}</p>
    </div>
  );
}

export default NotificationItem;




