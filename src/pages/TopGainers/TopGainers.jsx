import React, { useContext, useEffect, useState } from 'react';
import './TopGainers.css';
import { CoinContext } from '../../context/CoinContext';

const TopGainers = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    // Sort coins by price change percentage in the last 24 hours in descending order
    const topGainers = allCoin
      .filter((coin) => coin.price_change_percentage_24h > 0)
      .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
    setDisplayCoin(topGainers.slice(0, 10)); // Limit to top 10 gainers
  }, [allCoin]);

  return (
    <div className="top-gainers">
      <div className="hero">
        <h1>Top Gainers</h1>
        <p>Stay updated with the biggest gainers in the crypto market over the last 24 hours.</p>
      </div>

      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: 'center' }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>

        {displayCoin.map((item, index) => (
          <div className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="coin" />
              <p>{item.name} - {item.symbol}</p>
            </div>
            <p>{currency.symbol}{item.current_price.toLocaleString()}</p>
            <p
              style={{ textAlign: 'center' }}
              className={item.price_change_percentage_24h > 0 ? 'green' : 'red'}
            >
              {item.price_change_percentage_24h.toFixed(2)}%
            </p>
            <p className="market-cap">{currency.symbol}{item.market_cap.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopGainers;
