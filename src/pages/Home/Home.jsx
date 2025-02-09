import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Home = () => {

  const {allCoin, currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (e) => {
    setInput(e.target.value);
    if (e.target.value === '') {
      setDisplayCoin(allCoin);
    }
  }

  const searchHandler = async (e) => {
    e.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    })
    setDisplayCoin(coins);
  }

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin])


  return (
    <div>
      <div className="home">
        <div className="hero">
          <h1>Track Your Cryptos in Real-Time</h1>
          <p>Stay updated with live prices, trends, and news.</p>
          <form onSubmit={searchHandler}>


            <input onChange={inputHandler} list='coinlist' value={input} type="text" placeholder='Search for a coin...' required/>

            <datalist id="coinlist">
              {allCoin.map((item, index) => (
                <option key={index} value={item.name} />
              ))}
            </datalist>

            <button typeof='submit'>Search</button>
          </form>
        </div>
        <div className="crypto-table">
            <div className="table-layout">
              <p>#</p>
              <p>Coins</p>
              <p>Price</p>
              <p style={{textAlign: 'center'}}>24H Change</p>
              <p className='market-cap'>Market Cap</p>
            </div>
            {
              displayCoin.slice(0, 10).map((item,index)=>(
                <Link to={`/coin/${item.id}`} className='table-layout' key={index}>
                    <p>{item.market_cap_rank}</p>
                    <div>
                      <img src={item.image} alt="image" />
                      <p>{item.name + " - " + item.symbol}</p>
                    </div>
                    <p>{currency.symbol}{item.current_price.toLocaleString()}</p>
                    <p style={{textAlign: 'center'}} className={item.price_change_percentage_24h>0 ? 'green' : 'red'}>
                      {item.price_change_percentage_24h.toFixed(2)}
                      </p>
                    <p className='market-cap'>{currency.symbol}{item.market_cap.toLocaleString()}</p>
                </Link>
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default Home