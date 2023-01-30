import { useContext } from "react";
import { MARKET_DATA } from "../../App";
import Loading from "../../Shared/Loading";
import PortfolioStatsPieChart from "./PortfolioStatsPieChart/PortfolioStatsPieChart";

const PortfolioStats = ({portfolio}) => {
  const {marketDataList} = useContext(MARKET_DATA)
  const data = [
    { name: 'BTC', value: 40 },
    { name: 'ETH', value: 300 },
    { name: 'USDT', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
    { name: 'Group F', value: 189 },
    { name: 'Group F', value: 189 },

  ];
  // console.log(portfolioBalance(portfolio.portfolio));
  const findCoinDataFromList = (coinId) =>{
    const coin = marketDataList.find(coin=>coin.id===coinId)
    return coin
  }
  const calculateSpentOnCoin = (coinId) => {
    let spentPerCoin = 0
    Object.keys(portfolio.portfolio[coinId].transaction).map(transaction=>{
      if(portfolio.portfolio[coinId].transaction[transaction].type === "buy"){
        spentPerCoin +=  (portfolio.portfolio[coinId].transaction[transaction].value * portfolio.portfolio[coinId].transaction[transaction].pricePerCoin)
      }
      else{
        spentPerCoin -=  (portfolio.portfolio[coinId].transaction[transaction].value * portfolio.portfolio[coinId].transaction[transaction].pricePerCoin)
      }
    })
    return spentPerCoin
  }
  // const tportfolioBalance = (portfolio) => {
  //   let currentSum = 0
  //   let paidSum = 0
  //   Object.keys(portfolio).map((item)=>{
  //     // console.log(item,calculateSpentOnCoin(item));
  //     currentSum+= (portfolio[item].totalValue * findCoinDataFromList(item).current_price)
  //     paidSum += calculateSpentOnCoin(item)
  //   })
  //   const pnl = currentSum - paidSum
  //   const pnlPercentage = ((currentSum * 100) / paidSum) - 100
  //   return [currentSum, paidSum, pnl, pnlPercentage]
  // }
  // if(portfolio){
  //   console.log(tportfolioBalance(portfolio.portfolio));
  // }
  const portfolioBalance = (portfolio) => {
    let currentSum = 0
    let paidSum = 0
    Object.keys(portfolio).map((item)=>{
      currentSum+= (portfolio[item].totalValue * findCoinDataFromList(item).current_price)
      paidSum +=  calculateSpentOnCoin(item)
    })
    const pnl = currentSum - paidSum
    const pnlPercentage = ((currentSum * 100) / paidSum) - 100
    return [currentSum, paidSum, pnl, pnlPercentage]
  }

  const formatChartData = (portfolio) => {
    return Object.keys(portfolio).map((item)=>{
      const currentPrice = findCoinDataFromList(item).current_price
      const pValue = parseFloat((portfolio[item].totalValue * currentPrice))
      return {
        name: portfolio[item].symbol.toUpperCase(),
        value: (pValue)
      }
    })
  }
  
  return (
    <div className="portfolio-stats-container">
      
      <div className="portfolio-overview">
        
        <div className="left">
          <span className="title">Current Balance</span>
          <h2>{portfolioBalance(portfolio.portfolio)[0].toFixed(2)}</h2>
          {/* <span>{}(24h)</span> */}
        </div>
        
        <div className="">
          <h1>{portfolioBalance(portfolio.portfolio)[3].toFixed(2)}%</h1>
        </div>
      </div>

      <div className="portfolio-stats">
        
        <div className="portfolio-stats-chart">
          <PortfolioStatsPieChart data={formatChartData(portfolio.portfolio)}/>
        </div>

        <div className="portfolio-stats-values">

          <div className="total-change">
            <span>Total Profit / Loss</span>
            <h3>{portfolioBalance(portfolio.portfolio)[2].toFixed(2)}</h3>
          </div>

          <div className="sub-stats">
            <div className="sub-stats-block">
              <div>

                <h4>Binance Coin</h4>
              </div>
              <span>Best Performance</span>
            </div>
            <div className="sub-stats-block">
              <div>
                <h4>Etherium</h4>
              </div>
              <span>Worst Performance</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default PortfolioStats