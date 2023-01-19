import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='login-page'>
      <div className='login-form'>
        <h2>Signup</h2>
        <form>
          <div>
            <p>Username: </p>
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <p>Email: </p>
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <p>Password: </p>
            <input type="password" name="password" id="password" />
          </div>
          <button>Signup</button>
        </form>
        <p>Already have an account <span><Link to="/login">click</Link></span> to login</p>
      </div>
    </div>
  )
}

export default Signup