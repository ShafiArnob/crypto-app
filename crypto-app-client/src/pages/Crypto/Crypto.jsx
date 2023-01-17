import React, { useState } from 'react'
import { mockCoinData } from '../../utils/constants/mock'

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