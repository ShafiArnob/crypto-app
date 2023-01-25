import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './firebase/RequireAuth';
import Crypto from './pages/Crypto/Crypto';
import Login from './pages/Login/Login';
import Markets from './pages/Markets/Markets';
import Portfolio from './pages/Portfolio/Portfolio';
import Signup from './pages/Signup/Signup';
import Navbar from './Shared/Navbar';
import { fetchMarketList } from './utils/api/coinGecko-api';
import { mockMarketList } from './utils/constants/mock';

export const MARKET_DATA = createContext()

function App() {
  const [marketDataList, setMarketDataList] = useState([])
  const value = {marketDataList, setMarketDataList}
  useEffect(()=>{
    const updatemarketList = async() =>{
      try{
        const response = await fetchMarketList()
        setMarketDataList(response)
      }catch(error){
        setMarketDataList([])
        console.log(error);
      }
    }
    updatemarketList()
  }, [])
  return (
    <MARKET_DATA.Provider value={value}>
      <div>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Markets/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/coins/:id" element={<RequireAuth><Crypto/></RequireAuth>}></Route>
            <Route path='/portfolio' element={<RequireAuth><Portfolio/></RequireAuth>}></Route>
          </Routes>
        </div>
      </div>
    </MARKET_DATA.Provider>
  )
}

export default App;
