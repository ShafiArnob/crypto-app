import React from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {convertToInternationalCurrencySystem} from '../../utils/helpers/currency-helper.js'
const MarketList = ({marketList}) => {
  return (
    <div className='market-list'>
      <div className='market-list--title'>
        {/* <p className='list-item'>#</p> */}
        <p className='list-item'>Coin</p>
        <p className='list-item'>Price</p>
        <p className='list-item'>24H</p>
        <p className='list-item'>MarketCap</p>
      </div>
      {
        marketList.map(coin=>(
          <Link to={`coins/${coin.id}`} key={coin.id}>        
            <div className='market-list--row' >
              {/* <p className='list-item'>{coin.market_cap_rank}</p> */}
              <div className='coin'>
                <img className='coin-image' src={coin.image} alt="img" />
                <p>{coin.symbol.toUpperCase()}</p>
              </div>
              <p className='list-item'>{coin.current_price}</p>
              <p  className={`${coin["price_change_percentage_24h"] < 0  ? "red"  : "green"} list-item`}><span>{coin["price_change_percentage_24h"]< 0 ? (  <AiFillCaretDown />) : (  <AiFillCaretUp />)}</span>{Math.abs(coin.price_change_percentage_24h.toFixed(2))}%</p>
              <p className='list-item'>{convertToInternationalCurrencySystem(coin.market_cap)}</p>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default MarketList