import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import TopGainers from './pages/TopGainers/TopGainers'
import TopLosers from './pages/TopLosers/TopLosers'
import About from './pages/About/About'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinId' element={<Coin />} />
        <Route path='/top-gainers' element={<TopGainers />} />
        <Route path='/top-losers' element={<TopLosers />} />
        {/* <Route path='/about' element={<About />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App