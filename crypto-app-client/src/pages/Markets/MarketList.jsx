import React from 'react'

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
          <div className='market-list--row' key={coin.id}>
            {/* <p className='list-item'>{coin.market_cap_rank}</p> */}
            <p className='coin'>
              <img className='coin-image' src={coin.image} alt="img" />
              <p>{coin.name}</p>
            </p>
            <p className='list-item'>{coin.current_price}</p>
            <p className='list-item'>{coin.price_change_percentage_24h.toFixed(2)}</p>
            <p className='list-item'>{coin.market_cap}</p>
          </div>))
      }
    </div>
  )
}

export default MarketList