import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch(e.target.value){
      case 'usd':
        setCurrency({name: 'USD', symbol: '$'});
        break;
      case 'inr':
        setCurrency({name: 'INR', symbol: '₹'});
        break;
      case 'eur':
        setCurrency({name: 'EUR', symbol: '€'});
        break;
      default:
        setCurrency({name: 'USD', symbol: '$'});
    }
  };

  return (
    <div className='navbar'>
        <Link to={'/'} className="logo-container"><img className='logo' src={logo} alt="LOGO" /><span class="logo-name">CryptoTrack</span></Link>
        <ul>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/top-gainers'}><li>Top Gainers</li></Link>
            <Link to={'/top-losers'}><li>Top Losers</li></Link>
            {/* <Link to={'/about'}><li>About</li></Link> */}
            <li>About</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="inr">INR</option>
                <option value="eur">EUR</option>
            </select>
        </div>
    </div>
  )
}

export default Navbar