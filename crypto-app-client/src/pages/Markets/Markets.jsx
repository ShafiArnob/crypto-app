import React, { useContext, useEffect, useState } from 'react'
import { MARKET_DATA } from '../../App'
import { fetchMarketList } from '../../utils/api/coinGecko-api'
import { mockMarketList } from '../../utils/constants/mock'
import MarketList from './MarketList'

const Markets = () => {
  // const [marketList, setmarketList] = useState(mockMarketList)
  const {marketDataList} = useContext(MARKET_DATA)
  // let counter = 0
  // useEffect(()=>{
  //   const updatemarketList = async() =>{
  //     try{
  //       const response = await fetchMarketList()
  //       setmarketList(response)
  //       console.log(counter++);
  //     }catch(error){
  //       setmarketList([])
  //       console.log(error);
  //     }
  //   }
  //   // updatemarketList()
  // }, [])
  // // console.log(marketList);
  return (
    <div className='' style={{backgroundColor:""}}>
      <MarketList marketList={marketDataList}/>
    </div>
  )
}

export default Markets