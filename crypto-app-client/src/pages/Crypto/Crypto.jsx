import React, { useState } from 'react'
import { mockCoinData } from '../../utils/constants/mock'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'
const Crypto = () => {
  const [coinData, setCoinData] = useState(mockCoinData)
  console.log(coinData);
  return (
    <div className='crypto-info'>
      {/* Price Info */}
      <div>

      </div>
      {/* For Chart */}
      <div>

      </div>
      
      {/* Time percentage info */}
      <div className='time-percentage-info'>
        <div className='time-period'>
          <span>24H</span>
          <span>7D</span>
          <span>14D</span>
          <span>30D</span>
          <span>60D</span>
          <span>1Y</span>
        </div>
        <hr />
        <div className='time-period-data'>
          <span className={coinData.market_data.price_change_percentage_24h < 0 ? "red" : "green" }>{coinData.market_data.price_change_percentage_24h < 0 ? <AiFillCaretDown/>:<AiFillCaretUp/>}{Math.abs(coinData.market_data.price_change_percentage_24h.toFixed(2))}%</span>
          <span className={coinData.market_data.price_change_percentage_7d < 0 ? "red" : "green" }>{coinData.market_data.price_change_percentage_7d < 0 ? <AiFillCaretDown/>:<AiFillCaretUp/>}{Math.abs(coinData.market_data.price_change_percentage_7d.toFixed(2))}%</span>
          <span className={coinData.market_data.price_change_percentage_14d < 0 ? "red" : "green" }>{coinData.market_data.price_change_percentage_14d < 0 ? <AiFillCaretDown/>:<AiFillCaretUp/>}{Math.abs(coinData.market_data.price_change_percentage_14d.toFixed(2))}%</span>
          <span className={coinData.market_data.price_change_percentage_30d < 0 ? "red" : "green" }>{coinData.market_data.price_change_percentage_30d < 0 ? <AiFillCaretDown/>:<AiFillCaretUp/>}{Math.abs(coinData.market_data.price_change_percentage_30d.toFixed(2))}%</span>
          <span className={coinData.market_data.price_change_percentage_60d < 0 ? "red" : "green" }>{coinData.market_data.price_change_percentage_60d < 0 ? <AiFillCaretDown/>:<AiFillCaretUp/>}{Math.abs(coinData.market_data.price_change_percentage_60d.toFixed(2))}%</span>
          <span className={coinData.market_data.price_change_percentage_1y < 0 ? "red" : "green" }>{coinData.market_data.price_change_percentage_1y < 0 ?<AiFillCaretDown/>:<AiFillCaretUp/>}{Math.abs(coinData.market_data.price_change_percentage_1y.toFixed(2))}%</span>
        </div>
      </div>

      <div className='crypto-info--description'>
        <div className='description-cell'>
          <span className='description-cell--title'>Market Cap Rank</span>
          <span className='description-cell--data'>#{coinData.market_data.market_cap_rank}</span>
        </div>

        <div className='description-cell'>
          <span className='description-cell--title'>Market Cap</span>
          <span className='description-cell--data'>${coinData.market_data.market_cap.usd}</span>
        </div>

        <div className='description-cell'>
          <span className='description-cell--title'>Fully Diluted Valuation</span>
          <span className='description-cell--data'>${coinData.market_data.fully_diluted_valuation.usd}</span>
        </div>

        <div className='description-cell'>
          <span className='description-cell--title'>Trading Volume</span>
          <span className='description-cell--data'>${coinData.market_data.total_volume.usd}</span>
        </div>

        <div className='description-cell'>
          <span className='description-cell--title'>24H High</span>
          <span className='description-cell--data'>${coinData.market_data.high_24h.usd}</span>
        </div>

        <div className='description-cell'>
          <span className='description-cell--title'>24H Low</span>
          <span className='description-cell--data'>${coinData.market_data.low_24h.usd}</span>
        </div>

        <div className='description-cell'>
          <span className='description-cell--title'>Available Supply</span>
          <span className='description-cell--data'>${coinData.market_data.circulating_supply}</span>
        </div>

        <div className='description-cell'>
          <span className='description-cell--title'>Total Supply</span>
          <span className='description-cell--data'>${coinData.market_data.total_supply}</span>
        </div>

        <div className='description-cell'>
          <span className='description-cell--title'>Max Supply</span>
          <span className='description-cell--data'>${coinData.market_data.max_supply}</span>
        </div>

        <div className='description-cell'>
          <span className='description-cell--title'>All Time High</span>
          <span className='description-cell--data'>${coinData.market_data.ath.usd}</span>
        </div>

        <div className='description-cell'>
          <span className='description-cell--title'>All Time Low</span>
          <span className='description-cell--data'>${coinData.market_data.atl.usd}</span>
        </div>

      </div>
    </div>
  )
}

export default Crypto