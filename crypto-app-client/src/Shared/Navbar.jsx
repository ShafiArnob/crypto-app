import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <Link to='/' style={{"color":"white","textDecoration":"none"}}><h1 className='navbar-title'>Block</h1></Link>
      </div>
      <ul>
        <li><Link to="/">Market</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  )
}

export default Navbar