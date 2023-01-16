import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div>
        <h1>crypto</h1>
      </div>
      <ul>
        <li><Link to="/">Market</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>
    </div>
  )
}

export default Navbar