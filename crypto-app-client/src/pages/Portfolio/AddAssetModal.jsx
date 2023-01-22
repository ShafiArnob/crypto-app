import Modal from 'react-modal'
import './Portfolio.css'
import {IoMdClose} from 'react-icons/io'
import { mockMarketList } from '../../utils/constants/mock'
import { useState } from 'react'
const AddAssetModal = ({openModal, setopenModal}) => {
  const [selecCoin, setSelecCoin] = useState('')
  console.log(selecCoin);
  return (
    <Modal className="Modal" overlayClassName="Overlay" isOpen={openModal} onRequestClose ={()=>setopenModal(!openModal)} ariaHideApp={false}>
      {/* Modal Header */}
      <div className='modal-header'>
        <h2>Add Assets</h2>
        <div className='modal-close' onClick={()=>setopenModal(!openModal)}><IoMdClose/></div>
      </div>
      {/*Modal Body */}
      <div className='modal-body'>
        <div className='coin-dropdown'>
          {/* <label htmlFor="coins">Select Coin</label> */}
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
      </div>
    </Modal>
  )
}

export default AddAssetModal