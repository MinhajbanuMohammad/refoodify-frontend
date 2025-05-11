import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Refoodify</div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        
        <li>Reviews</li>
      </ul>
      
      <button className="login-btn">Login/Sign Up</button>
    </nav>
  );
}

export default Navbar;
