import React from 'react'
import './Portfolio.css'
const Assets = () => {
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
      <button>Add New Asset</button>
    </div>
  )
}

export default Assets