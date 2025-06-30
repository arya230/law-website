import React from 'react';
import logo from '../assets/logo.png';
import '../index.css';

const Navbar: React.FC = () => {
  return (
    <nav>
      <img src={logo} alt="Logo" />
      <ul>
        <li><a href="#">About</a></li>
        <li className="dropdown">
          <a href="#">Practice Areas <span className="arrow">▼</span></a>
        </li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
