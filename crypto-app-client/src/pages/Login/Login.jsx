import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='login-page'>
      <div className='login-form'>
        <h2>Login</h2>
        <form>
          <div>
            <p>Email: </p>
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <p>Password: </p>
            <input type="password" name="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login