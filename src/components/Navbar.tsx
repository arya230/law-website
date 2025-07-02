import React from 'react';
import logo from '../assets/logo.png';
import '../index.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <ul>
        <li><Link to="/">About</Link></li>
        <li className="dropdown">
          <a href="#">Practice Areas <span className="arrow">▼</span></a>
          <ul className="dropdown-menu">
            <li><a href="/IncomeTax">Income Tax</a></li>
            <li><a href="/CustomTradeLaw">Custom-trade-law</a></li>
            <li><a href="/gst">GST Tax Law Firm</a></li>
            <li><a href="/property">Property Case</a></li>
            <li><a href="#">Corporate Law</a></li>
            <li><a href="#">Best CAT and Service Matters Lawyer</a></li>
            <li><a href="#">Dispute Resolution | Arbitration - Law Firm</a></li>
            <li><a href="#">IP Law</a></li>
          </ul>
        </li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
