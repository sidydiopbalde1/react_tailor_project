// src/components/Header.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Header.css';
function Header() {
  return (
    <header className="header">
      <h1>Instagram</h1>
      <input type="text" placeholder="Rechercher" />
      <div className="icons">
        <i className="fas fa-envelope"></i>  {/* Message icon */}
        <i className="fas fa-bell"></i>  {/* Notification icon */}
      </div>
    </header>
  );
}

export default Header;
