import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth';
import { projectAuth } from '../../firebase/config';
import AddAssetModal from './AddAssetModal'
import { MARKET_DATA } from '../../App';

import './Portfolio.css'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

const Assets = ({refetch, portfolioData}) => {
  const [user, loading, error] = useAuthState(projectAuth);
  const [openModal, setopenModal] = useState(false)
  const {marketDataList} = useContext(MARKET_DATA)
  
  const {setRefetchPortfolio} = refetch

  
  const findCoinDataFromList = (coinId) =>{
    const coin = marketDataList.find(coin=>coin.id===coinId)
    return coin
  }
  // console.log(portfolioData);
  if(loading || !Object.keys(portfolioData).length){
    return <p>Loading...</p>
  }
  return (
    <div className='assets'>
      <h4>Your Assets</h4>
      <div className='assets-title'>
        <p>Assets</p>
        <p>Price</p>
        <p>Holdings</p>
      </div>
      <hr />
      {portfolioData && Object.keys(portfolioData.portfolio)?.map(coin=>(
        <div className='assets-value' key={coin}>
          <div className='asset'>
            <p>{portfolioData.portfolio[coin].name}</p>
            <span>{portfolioData.portfolio[coin].symbol.toUpperCase()}</span>
          </div>
          <div className='price'>
            <p>{findCoinDataFromList(coin)["current_price"]}</p>
            <span className={findCoinDataFromList(coin)["price_change_percentage_24h"] < 0  ? "red"  : "green"}>
              <span >{findCoinDataFromList(coin)["price_change_percentage_24h"] < 0 ? (  <AiFillCaretDown />) : (  <AiFillCaretUp />)}</span>
              {findCoinDataFromList(coin)["price_change_percentage_24h"].toFixed(2)}%
            </span>
          </div>
          <div className="holding">
            <p>{(findCoinDataFromList(coin)["current_price"] * portfolioData.portfolio[coin].totalValue).toFixed(3)}</p>
            <span>{portfolioData.portfolio[coin].symbol}{portfolioData.portfolio[coin].totalValue}</span>
          </div>
        </div>
      ))
      }
      <hr className='asset-divide'/>
      <button onClick={()=>setopenModal(!openModal)}>Add New Asset</button>
      <AddAssetModal openModal={openModal} setopenModal={setopenModal} portfolioData={portfolioData} setRefetchPortfolio={setRefetchPortfolio}/>
    </div>
  )
}

export default Assets