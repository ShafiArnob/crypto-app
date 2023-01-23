import Modal from 'react-modal'
import { v4 as uuidv4 } from 'uuid';
import './Portfolio.css'
import './DatePicker.css'
import {IoMdClose} from 'react-icons/io'
import { mockMarketList } from '../../utils/constants/mock'
import { useState } from 'react'
import DatePicker from 'react-date-picker/dist/entry.nostyle'
const AddAssetModal = ({openModal, setopenModal, portfolioData}) => {
  const [transactionType,setTransactionType] = useState('buy')
  const [selectedCoin, setSelectedCoin] = useState('bitcoin')
  const [quantity, setQuantity] = useState(0)
  const [pricePerCoin, setPricePerCoin] = useState(0)
  const [date, setDate] = useState(new Date())
  const uniqueId = uuidv4()
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    const dataIfCoinDoesNotExistInPortfolio = {
      [selectedCoin]:{
        totalValue:quantity,
        [uniqueId]:{
          type:transactionType,
          date:date,
          pricePerCoin:pricePerCoin,
          value:quantity
        }
      }
    }
    const dataIfCoinExistsInPortfolio = {
      [uniqueId]:{
        type:transactionType,
        date:date,
        pricePerCoin:pricePerCoin,
        value:quantity
      }
    }
    if(quantity>0 && pricePerCoin>0){
      console.log(dataIfCoinDoesNotExistInPortfolio);
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
              mockMarketList.map(coin=>(
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