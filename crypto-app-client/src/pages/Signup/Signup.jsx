import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword, useIdToken, useUpdateProfile } from 'react-firebase-hooks/auth';
import { projectAuth } from '../../firebase/config';
import axios from 'axios';

const Signup = () => {
  const [ createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(projectAuth);
  const [updateProfile] = useUpdateProfile(projectAuth);

  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()
  const [token] = useIdToken(projectAuth);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  
  useEffect( () =>{
    if (token) {
        navigate(from, { replace: true });
    }
}, [token, from, navigate])

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const res = await createUserWithEmailAndPassword(email, password)
    const success = await updateProfile({displayName:username})
    const data = {
      uid:res.user.uid,
      email:res.user.email,
      username:username,
      portfolio:{}
    }
    console.log(res);
    console.log("payload", data);
    if(success){
      var response_server = await axios.post('http://localhost:5000/users',data)
      console.log(response_server);
    }
  } 
  return (
    <div className='login-page'>
      <div className='login-form'>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>

          <div className='input-block'>
            <p>Username: </p>
            <input onChange={(e)=>setUserName(e.target.value)} value={username} type="text" name="username" id="username" required/>
          </div>

          <div className='input-block'>
            <p>Email: </p>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" name="email" id="email" required/>
          </div>

          <div className='input-block'>
            <p>Password: </p>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name="password" id="password" required/>
          </div>
          <button className='btn-login'>Signup</button>
        </form>
        <p>Already have an account <span><Link to="/login">click</Link></span> to login</p>
        {error && <p className='error-message'>{error?.message}</p>}
      </div>
    </div>
  )
}

export default Signup