import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth';
import { projectAuth } from '../../firebase/config';
import AddAssetModal from './AddAssetModal'
import './Portfolio.css'
import { async } from '@firebase/util';

const Assets = () => {
  const [openModal, setopenModal] = useState(false)
  const [user, loading, error] = useAuthState(projectAuth);
  useEffect(()=>{
    const getUser = async() =>{
      if(user?.uid){
        const response = await axios.get(`http://localhost:5000/portfolio/${user.uid}`)
        console.log(response.data);
      }
    }
    getUser()
  },[user])
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
      <button onClick={()=>setopenModal(!openModal)}>Add New Asset</button>
      <AddAssetModal openModal={openModal} setopenModal={setopenModal}/>
    </div>
  )
}

export default Assets