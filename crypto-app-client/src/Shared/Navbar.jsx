import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <Link to='/' style={{"color":"white","textDecoration":"none"}}><h2 className='navbar-title'>CryptoFolio</h2></Link>
      </div>
      <ul>
        <li><Link to="/">Market</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>
    </div>
  )
}

export default Navbar