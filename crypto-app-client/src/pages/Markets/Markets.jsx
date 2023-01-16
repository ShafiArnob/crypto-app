import React, { useEffect, useState } from 'react'
import { fetchMarketList } from '../../utils/api/coinGecko-api'
import { mockMarketList } from '../../utils/constants/mock'
import MarketList from './MarketList'

const Markets = () => {
  const [marketList, setmarketList] = useState(mockMarketList)
  let counter = 0
  useEffect(()=>{
    const updatemarketList = async() =>{
      try{
        const response = await fetchMarketList()
        setmarketList(response)
        console.log(counter++);
      }catch(error){
        setmarketList([])
        console.log(error);
      }
    }
    // updatemarketList()
  }, [])
  console.log(marketList);
  return (
    <div className='' style={{backgroundColor:""}}>
      <MarketList marketList={marketList}/>
    </div>
  )
}

export default Markets