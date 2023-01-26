
import { useState } from 'react'
import { mockMarketStat } from '../../utils/constants/mock'
import './Markets.css'

const MarketStat = () => {
  const [marketStat, setMarketStat] = useState(mockMarketStat.data)  
  return (
    <div className='market-stat'>
      
      <div className='stat-block'>
        <span className='stat-block-title'>Market Cap</span>
        <p className='stat-block-value'>
          {marketStat.total_market_cap.usd.toFixed(0)}
          <span style={{marginLeft:"3px"}} className={`${marketStat.market_cap_change_percentage_24h_usd["price_change_percentage_24h"] < 0  ? "red"  : "green"}`}>{marketStat.market_cap_change_percentage_24h_usd.toFixed(2)}%</span>
        </p>
      </div>
      
      <div className='stat-block'>
        <span className='stat-block-title'>24H Volume</span>
        <p className='stat-block-value'>{marketStat.total_volume.usd.toFixed(0)}</p>
      </div>

      <div className='stat-block'>
        <span className='stat-block-title'>BTC Dominance</span>
        <p className='stat-block-value'>{marketStat.market_cap_percentage.btc.toFixed(2)}%</p>
      </div>

      <div className='stat-block'>
        <span className='stat-block-title'>ETH Dominance</span>
        <p className='stat-block-value'>{marketStat.market_cap_percentage.eth.toFixed(2)}%</p>
      </div>

    </div>
  )
}

export default MarketStat