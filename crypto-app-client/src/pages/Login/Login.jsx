import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useIdToken, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import './Login.css'
import { projectAuth } from '../../firebase/config';
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(projectAuth);
  
  const navigate = useNavigate()
  const [token] = useIdToken(projectAuth);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  
  useEffect(() =>{
    if (token) {
        navigate(from, { replace: true });
    }
}, [token, from, navigate])

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