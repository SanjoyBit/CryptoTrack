import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [isMobile, setIsMobile] = useState(false); // State for toggle mobile menu

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case 'usd':
        setCurrency({ name: 'USD', symbol: '$' });
        break;
      case 'inr':
        setCurrency({ name: 'INR', symbol: '₹' });
        break;
      case 'eur':
        setCurrency({ name: 'EUR', symbol: '€' });
        break;
      default:
        setCurrency({ name: 'USD', symbol: '$' });
    }
  };

  const toggleMenu = () => {
    setIsMobile(!isMobile); // Toggle mobile menu visibility
  };

  return (
    <div className="navbar">
      <Link to={'/'} className="logo-container">
        <img className="logo" src={logo} alt="LOGO" />
        <span className="logo-name">CryptoTrack</span>
      </Link>
      {/* Navbar Links */}
      <ul className={`navbar-links ${isMobile ? 'active' : ''}`}>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/top-gainers'}><li>Top Gainers</li></Link>
        <Link to={'/top-losers'}><li>Top Losers</li></Link>
        <li>About</li>
        <li>Blog</li>
      </ul>
      {/* Currency Dropdown and Hamburger - visible only on mobile */}
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
        </select>
        <div className="hamburger" onClick={toggleMenu}>
          <span className={isMobile ? 'bar active' : 'bar'}></span>
          <span className={isMobile ? 'bar active' : 'bar'}></span>
          <span className={isMobile ? 'bar active' : 'bar'}></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
