import React, { useState } from 'react'
import AddAssetModal from './AddAssetModal'
import './Portfolio.css'
const Assets = () => {
  const [openModal, setopenModal] = useState(false)
  return (
    <div className='assets'>
      <h4>Your Assets</h4>
      <div className='assets-title'>
        <p>Assets</p>
        <p>Price</p>
        <p>Holdings</p>
      </div>
      <hr />
      <div className='assets-value'>
        <div className='asset'>
          <p>Ethereum</p>
          <span>ETH</span>
        </div>
        <div className='price'>
          <p>$1657.47</p>
          <span>4.40%</span>
        </div>
        <div className="holding">
          <p>$828.73</p>
          <span>ETH0.05</span>
        </div>
      </div>
      <hr className='asset-divide'/>
      <button onClick={()=>setopenModal(!openModal)}>Add New Asset</button>
      <AddAssetModal openModal={openModal} setopenModal={setopenModal}/>
    </div>
  )
}

export default Assets