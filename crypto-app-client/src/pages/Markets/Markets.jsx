import React, { useContext, useEffect, useState } from 'react'
import { MARKET_DATA } from '../../App'
import { fetchMarketList } from '../../utils/api/coinGecko-api'
import { mockMarketList } from '../../utils/constants/mock'
import MarketList from './MarketList'

const Markets = () => {
  const {marketDataList} = useContext(MARKET_DATA)
  const [marketList, setmarketList] = useState(mockMarketList)
  let counter = 0

  // console.log(marketList);
  return (
    <div className='' style={{backgroundColor:""}}>
      <MarketList marketList={marketDataList}/>
    </div>
  )
}

export default Markets