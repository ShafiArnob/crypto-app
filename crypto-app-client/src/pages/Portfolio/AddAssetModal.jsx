import { useState, useContext } from 'react'
import Modal from 'react-modal'
import { v4 as uuidv4 } from 'uuid';
import {IoMdClose} from 'react-icons/io'
import DatePicker from 'react-date-picker/dist/entry.nostyle'

import { MARKET_DATA } from '../../App';

import './Portfolio.css'
import './DatePicker.css'
import axios from 'axios';
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';

const AddAssetModal = ({openModal, setopenModal, portfolioData}) => {
  const {marketDataList} = useContext(MARKET_DATA)
  const [transactionType,setTransactionType] = useState('buy')
  const [selectedCoin, setSelectedCoin] = useState('bitcoin')
  const [quantity, setQuantity] = useState(0)
  const [pricePerCoin, setPricePerCoin] = useState(0)
  const [date, setDate] = useState(new Date())

  const navigate = useNavigate()
  const uniqueId = uuidv4()
  
  const findCoinDataFromList = (coinId) =>{
    const coin = marketDataList.find(coin=>coin.id===coinId)
    return coin
  }

  const ifCoinExistsInPortfolio = (coinId) =>{
    const getCoin = portfolioData?.portfolio[coinId] || null
    // console.log(getCoin);
    if(getCoin===null){
      return false
    }
    else{
      return true
    }
  }
  // console.log(portfolioData);
  const dataIfCoinDoesNotExistInPortfolio = {
    query:{
      coinId:selectedCoin,
      transId:uniqueId
    },
    [selectedCoin]:{
      name:findCoinDataFromList(selectedCoin).name,
      symbol:findCoinDataFromList(selectedCoin).symbol,
      totalValue:quantity,
      totalSpent:(quantity * pricePerCoin),
      transaction:{
        [uniqueId]:{
          type:transactionType,
          date:date,
          pricePerCoin:pricePerCoin,
          value:quantity
        }
      }
    }
  }
  const dataIfCoinExistsInPortfolio = {
    query:{
      coinId:selectedCoin,
      transId:uniqueId
    },
    [uniqueId]:{
      type:transactionType,
      date:date,
      pricePerCoin:pricePerCoin,
      value:quantity
    }
  }
  let response;
  const handleSubmit = async(e) =>{
    e.preventDefault()
    //Coin does not exist so create coin key then update in that
    if(quantity>0 && pricePerCoin>0 && !ifCoinExistsInPortfolio(selectedCoin)){
      const tempObj = {...dataIfCoinDoesNotExistInPortfolio, exists:false}
      response = await axios.post(`http://localhost:5000/portfolio/${portfolioData.uid}`,tempObj)
      // console.log(response);
      if(response.data.modifiedCount){
        navigate('/portfolio')
      }
    }
    //coin exists to update transaction in that
    else if(quantity>0 && pricePerCoin>0 && ifCoinExistsInPortfolio(selectedCoin)){
      const tempObj = {...dataIfCoinExistsInPortfolio, exists:true}
      if(tempObj[uniqueId].type === "buy"){
        const newTotalValue = parseFloat(portfolioData.portfolio[selectedCoin].totalValue) + parseFloat(quantity)
        const newTotalSpent =  parseFloat(portfolioData.portfolio[selectedCoin].totalSpent) + parseFloat(quantity*pricePerCoin)

        const newTempObj = {...tempObj, newTotalValue:newTotalValue, newTotalSpent:newTotalSpent}
        console.log(newTempObj);
        response = await axios.post(`http://localhost:5000/portfolio/${portfolioData.uid}`,newTempObj)
        // console.log(response);
        if(response.data.modifiedCount){
          navigate('/portfolio')
        }
      }
      //For sell
      else{
        const newTotalValue = parseFloat(portfolioData.portfolio[selectedCoin].totalValue) - parseFloat(quantity)
        const newTotalSpent =  parseFloat(portfolioData.portfolio[selectedCoin].totalSpent) - parseFloat(quantity*pricePerCoin)

        const newTempObj = {...tempObj, newTotalValue:newTotalValue, newTotalSpent:newTotalSpent}
        console.log(newTempObj);
        response = await axios.post(`http://localhost:5000/portfolio/${portfolioData.uid}`,newTempObj)
        // console.log(response);
        if(response.data.modifiedCount){
          navigate('/portfolio')
        }
      }
    }
    
  }
  return (
    <Modal className="Modal" overlayClassName="Overlay" isOpen={openModal} onRequestClose ={()=>setopenModal(!openModal)} ariaHideApp={false}>
      {/* Modal Header */}
      <div className='modal-header'>
        <h2>Add Assets</h2>
        <div className='modal-close' onClick={()=>setopenModal(!openModal)}><IoMdClose/></div>
      </div>
      {/*Modal Body */}
      <div className='modal-body'>
        <form onSubmit={handleSubmit}>
        <div className='transaction-type'>
          <p onClick={(e)=>setTransactionType(e.target.id)} className={transactionType==="buy"?"active":null} id="buy">Buy</p>
          <p onClick={(e)=>setTransactionType(e.target.id)} className={transactionType==="sell"?"active":null} id="sell">Sell</p>
        </div>
        <div className='coin-dropdown'>
          <select onChange={(e)=>setSelectedCoin(e.target.value)} name="coins" id="coins">
            {/* <option value="">Select Coin</option> */}
            {
              marketDataList?.map(coin=>(
                <option key={coin.id} value={coin.id}>
                    {coin.name}
                </option>
              ))
            }
          </select>
        </div>
        {/* quantity & price-per-coin */}
        <div className='coin-values'>
          <div className='coin-value-cell'>
            <p>Quantity</p>
            <input onChange={(e)=>setQuantity(e.target.value)} value={quantity} min="0" type="number" step="0.00001" id='quantity' required/>
          </div>
          <div className='coin-value-cell'>
            <p>Price Per Coin</p>
            <input onChange={(e)=>setPricePerCoin(e.target.value)} value={pricePerCoin} min="0" type="number" step="0.00001" id='price-per-coin' required/>
          </div>
        </div>

        <div className='date'>
          <DatePicker className="date-picker" onChange={setDate} value={date} format="dd/MM/y"/>
        </div>

        <div className='total-spent'>
          <p>Total Spent</p>
          <h1>${(quantity*pricePerCoin).toFixed(4)}</h1>
        </div>
        <button className='btn-modal'>Add Transaction</button>
        </form>
      </div>
    </Modal>
  )
}

export default AddAssetModal