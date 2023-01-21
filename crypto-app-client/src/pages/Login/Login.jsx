import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import './Login.css'
import { projectAuth } from '../../firebase/config';
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(projectAuth);
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    await signInWithEmailAndPassword(email,password)
  }
  // console.log(user);
  return (
    <div className='login-page'>
      <div className='login-form'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Email: </p>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" name="email" id="email" />
          </div>

          <div>
            <p>Password: </p>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name="password" id="password" />
          </div>
          <button>Login</button>
        </form>
        <p>Dont have an account <span><Link to="/signup">click</Link></span> to signup</p>
      </div>
    </div>
  )
}

export default Login