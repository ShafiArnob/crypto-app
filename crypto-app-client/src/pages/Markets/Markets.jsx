import React, { useContext} from 'react'
import { MARKET_DATA } from '../../App'
import MarketList from './MarketList'
import MarketStat from './MarketStat'

const Markets = () => {
  const {marketDataList} = useContext(MARKET_DATA)
  

  // console.log(marketList);
  return (
    <div>
      <MarketStat/>
      <MarketList marketList={marketDataList}/>
    </div>
  )
}

export default Markets