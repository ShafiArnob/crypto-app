import Modal from 'react-modal'
import './Portfolio.css'
import {IoMdClose} from 'react-icons/io'
import { mockMarketList } from '../../utils/constants/mock'
import { useState } from 'react'
const AddAssetModal = ({openModal, setopenModal}) => {
  const [transactionType,setTransactionType] = useState('buy')
  const [selecCoin, setSelecCoin] = useState('')
  // console.log(transactionType);
  return (
    <Modal className="Modal" overlayClassName="Overlay" isOpen={openModal} onRequestClose ={()=>setopenModal(!openModal)} ariaHideApp={false}>
      {/* Modal Header */}
      <div className='modal-header'>
        <h2>Add Assets</h2>
        <div className='modal-close' onClick={()=>setopenModal(!openModal)}><IoMdClose/></div>
      </div>
      {/*Modal Body */}
      <div className='modal-body'>
        <div className='transaction-type'>
          <p onClick={(e)=>setTransactionType(e.target.id)} className={transactionType==="buy"?"active":null} id="buy">Buy</p>
          <p onClick={(e)=>setTransactionType(e.target.id)} className={transactionType==="sell"?"active":null} id="sell">Sell</p>
        </div>
        <div className='coin-dropdown'>
          <select onChange={(e)=>setSelecCoin(e.target.value)} name="coins" id="coins">
            <option value="">Select Coin</option>
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
        <div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
    </Modal>
  )
}

export default AddAssetModal