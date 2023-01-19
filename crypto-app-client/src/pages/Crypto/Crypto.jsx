import React, { useState } from 'react'
import { marketData, mockCoinData } from '../../utils/constants/mock'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'
import { Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { convertUnixTimestampToDate } from '../../utils/helpers/date-helper'
const Crypto = () => {
  const [coinData, setCoinData] = useState(mockCoinData)
  const [chartData, setChartData] = useState(marketData)
  console.log(coinData);
  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
  const formatPriceData = (data) => {
    return data.prices.map(price=>{
      return {
        value: price[1].toFixed(0),
        date: convertUnixTimestampToDate(price[0])
      }
    })
  }

  const priceData = formatPriceData(chartData)
  console.log(priceData);
  return (
    <div className="crypto-info">
      {/* Price Info */}
      <div className='price-info'>
        <div className='price-info--header'>
          <div className='price-info--title'>
            <img src={coinData.image.thumb} alt="" />
            <h2>{coinData.name}({coinData.symbol.toUpperCase()})</h2>
          </div>
          <div className={`price-info--value`}>
            <h1>${coinData.market_data.current_price.usd}</h1>
            <span className={`${coinData.market_data.price_change_percentage_7d < 0 ? "red" : "green"}`}>{coinData.market_data.price_change_percentage_24h < 0 ? (<AiFillCaretDown/>) : (<AiFillCaretUp />)}{Math.abs(
              coinData.market_data.price_change_percentage_24h.toFixed(2)
            )}%</span>
          </div>
        </div>
        {/* For Chart */}
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer >
            <AreaChart data={priceData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5c459c" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#5c459c" stopOpacity={0}/>
              </linearGradient>
            </defs>
              <XAxis dataKey={"date"} />
              <YAxis domain={["dataMin", "dataMax"]} />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#5c459c" fillOpacity={1} strokeWidth={0.9} fill="url(#chartColor)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Time percentage info */}
      <div className="time-percentage-info">
        <div className="time-period">
          <span>24H</span>
          <span>7D</span>
          <span>14D</span>
          <span>30D</span>
          <span>60D</span>
          <span>1Y</span>
        </div>
        <hr />
        <div className="time-period-data">
          <span
            className={
              coinData.market_data.price_change_percentage_24h < 0
                ? "red"
                : "green"
            }
          >
            {coinData.market_data.price_change_percentage_24h < 0 ? (
              <AiFillCaretDown />
            ) : (
              <AiFillCaretUp />
            )}
            {Math.abs(
              coinData.market_data.price_change_percentage_24h.toFixed(2)
            )}
            %
          </span>
          <span
            className={
              coinData.market_data.price_change_percentage_7d < 0
                ? "red"
                : "green"
            }
          >
            {coinData.market_data.price_change_percentage_7d < 0 ? (
              <AiFillCaretDown />
            ) : (
              <AiFillCaretUp />
            )}
            {Math.abs(
              coinData.market_data.price_change_percentage_7d.toFixed(2)
            )}
            %
          </span>
          <span
            className={
              coinData.market_data.price_change_percentage_14d < 0
                ? "red"
                : "green"
            }
          >
            {coinData.market_data.price_change_percentage_14d < 0 ? (
              <AiFillCaretDown />
            ) : (
              <AiFillCaretUp />
            )}
            {Math.abs(
              coinData.market_data.price_change_percentage_14d.toFixed(2)
            )}
            %
          </span>
          <span
            className={
              coinData.market_data.price_change_percentage_30d < 0
                ? "red"
                : "green"
            }
          >
            {coinData.market_data.price_change_percentage_30d < 0 ? (
              <AiFillCaretDown />
            ) : (
              <AiFillCaretUp />
            )}
            {Math.abs(
              coinData.market_data.price_change_percentage_30d.toFixed(2)
            )}
            %
          </span>
          <span
            className={
              coinData.market_data.price_change_percentage_60d < 0
                ? "red"
                : "green"
            }
          >
            {coinData.market_data.price_change_percentage_60d < 0 ? (
              <AiFillCaretDown />
            ) : (
              <AiFillCaretUp />
            )}
            {Math.abs(
              coinData.market_data.price_change_percentage_60d.toFixed(2)
            )}
            %
          </span>
          <span
            className={
              coinData.market_data.price_change_percentage_1y < 0
                ? "red"
                : "green"
            }
          >
            {coinData.market_data.price_change_percentage_1y < 0 ? (
              <AiFillCaretDown />
            ) : (
              <AiFillCaretUp />
            )}
            {Math.abs(
              coinData.market_data.price_change_percentage_1y.toFixed(2)
            )}
            %
          </span>
        </div>
      </div>

      <div className="crypto-info--description">
        <div className="description-cell">
          <span className="description-cell--title">Market Cap Rank</span>
          <span className="description-cell--data">
            #{coinData.market_data.market_cap_rank}
          </span>
        </div>

        <div className="description-cell">
          <span className="description-cell--title">Market Cap</span>
          <span className="description-cell--data">
            ${coinData.market_data.market_cap.usd}
          </span>
        </div>

        <div className="description-cell">
          <span className="description-cell--title">
            Fully Diluted Valuation
          </span>
          <span className="description-cell--data">
            ${coinData.market_data.fully_diluted_valuation.usd}
          </span>
        </div>

        <div className="description-cell">
          <span className="description-cell--title">Trading Volume</span>
          <span className="description-cell--data">
            ${coinData.market_data.total_volume.usd}
          </span>
        </div>

        <div className="description-cell">
          <span className="description-cell--title">24H High</span>
          <span className="description-cell--data">
            ${coinData.market_data.high_24h.usd}
          </span>
        </div>

        <div className="description-cell">
          <span className="description-cell--title">24H Low</span>
          <span className="description-cell--data">
            ${coinData.market_data.low_24h.usd}
          </span>
        </div>

        <div className="description-cell">
          <span className="description-cell--title">Available Supply</span>
          <span className="description-cell--data">
            ${coinData.market_data.circulating_supply}
          </span>
        </div>

        <div className="description-cell">
          <span className="description-cell--title">Total Supply</span>
          <span className="description-cell--data">
            ${coinData.market_data.total_supply}
          </span>
        </div>

        <div className="description-cell">
          <span className="description-cell--title">Max Supply</span>
          <span className="description-cell--data">
            ${coinData.market_data.max_supply}
          </span>
        </div>

        <div className="description-cell">
          <span className="description-cell--title">All Time High</span>
          <span className="description-cell--data">
            ${coinData.market_data.ath.usd}
          </span>
        </div>

        <div className="description-cell">
          <span className="description-cell--title">All Time Low</span>
          <span className="description-cell--data">
            ${coinData.market_data.atl.usd}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Crypto