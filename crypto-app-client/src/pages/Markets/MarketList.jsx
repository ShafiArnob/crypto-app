import React from 'react'

const MarketList = ({marketList}) => {
  return (
    <div>
      {
        marketList.map(coin=><li key={coin.id}>{coin.name}</li>)
      }
    </div>
  )
}

export default MarketList