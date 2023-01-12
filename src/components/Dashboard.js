import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Dashboard = () => {
    const location = useLocation()
    const {username } =  location.state
  return (
    <div style={{display : "flex" , flexDirection : "column"}}>
        <Header/>
        <p style={{fontSize:'30px', color:'blue'}}>Welcome</p>
        <p style={{fontSize:'25px'}}>{username}</p>
        <Footer/>
    </div>

  )
}

export default Dashboard