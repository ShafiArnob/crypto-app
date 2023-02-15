import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { projectAuth } from '../../firebase/config';
import Loading from '../../Shared/Loading';
import Assets from './Assets'
import PortfolioStats from './PortfolioStats'

const Portfolio = () => {
  const [user, loading, error] = useAuthState(projectAuth);
  
  const [portfolioData, setPortfolioData] =useState("")
  const [refetchPortfolio, setRefetchPortfolio] = useState('')
  useEffect(()=>{
    const getUser = async() =>{
      if(user?.uid){
        const response = await axios.get(`https://crypto-app-server.vercel.app/portfolio/${user.uid}`)
        setPortfolioData(response.data)
      }
    }
    getUser()
  },[user, refetchPortfolio])
  if(user && !portfolioData){
    return <Loading/>
  }
  return (
    <div className='portfolio-container'>
      <div>
        {/* <h1>Portfolio</h1> */}
      </div>
      <div>
        {portfolioData && <PortfolioStats portfolio={portfolioData}/>}
      </div>
      <div>
        {portfolioData && <Assets refetch={{refetchPortfolio, setRefetchPortfolio}} portfolioData={portfolioData}/>}
      </div>
    </div>
  )
}

export default Portfolio