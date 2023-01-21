import React from 'react'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import { projectAuth } from '../firebase/config';

const Navbar = () => {
  const [user] = useAuthState(projectAuth);
  const [signOut, loading, error] = useSignOut(projectAuth);
  const handleLogout = async() => {
    const success = await signOut();

    if (success) {
      alert('You are signed out');
    }
  }
  return (
    <div className='navbar'>
      <div>
        <Link to='/' style={{"color":"white","textDecoration":"none"}}><h2 className='navbar-title'>Block</h2></Link>
      </div>
      <ul>
        <li><Link to="/">Market</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        {!user && <li><Link to="/login">Login</Link></li>}
        
        {user && <li><Link onClick={()=>handleLogout()}>Logout</Link></li>}
      </ul>
    </div>
  )
}

export default Navbar