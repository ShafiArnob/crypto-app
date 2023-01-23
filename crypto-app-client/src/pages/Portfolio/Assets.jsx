import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth';
import { projectAuth } from '../../firebase/config';
import AddAssetModal from './AddAssetModal'
import './Portfolio.css'
import { async } from '@firebase/util';

const Assets = () => {
  const [openModal, setopenModal] = useState(false)
  const [portfolioData, setPortfolioData] =useState("")
  const [user, loading, error] = useAuthState(projectAuth);
  useEffect(()=>{
    const getUser = async() =>{
      if(user?.uid){
        const response = await axios.get(`http://localhost:5000/portfolio/${user.uid}`)
        setPortfolioData(response.data)
      }
    }
    getUser()
  },[user])
  
  

  if(loading){
    return <p>Loading...</p>
  }
  return (
    <div className='assets'>
      <h4>Your Assets</h4>
      <div className='assets-title'>
        <p>Assets</p>
        <p>Price</p>
        <p>Holdings</p>
      </div>
      <hr />
      {portfolioData && Object.keys(portfolioData.portfolio)?.map(coin=>(
        <div className='assets-value' key={coin}>
          <div className='asset'>
            <p>{portfolioData.portfolio[coin].name}</p>
            <span>{portfolioData.portfolio[coin].symbol}</span>
          </div>
          <div className='price'>
            <p>NAN</p>
            <span>NAN</span>
          </div>
          <div className="holding">
            <p>NAN</p>
            <span>{portfolioData.portfolio[coin].symbol}{portfolioData.portfolio[coin].totalValue}</span>
          </div>
        </div>
      ))
      }
      <hr className='asset-divide'/>
      <button onClick={()=>setopenModal(!openModal)}>Add New Asset</button>
      <AddAssetModal openModal={openModal} setopenModal={setopenModal} portfolioData={portfolioData}/>
    </div>
  )
}

export default Assets