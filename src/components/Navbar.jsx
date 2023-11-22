// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../resources/Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar">
        <Link to="/dashboard">Home</Link>
      <Link to="/home">AddCustomer</Link>
      <Link to="/aboutus">About us</Link>
      <Link to="/contacts">Contact us</Link>

      <div className="navbar-right">
      </div>
    </div>
  );
};

export default Navbar;
