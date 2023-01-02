import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-header'>
            <h3>Cholan Technology LLP </h3>
        </div>
        <div className='footer-container'>
                <div className='sub-container'>
                    <p>Company</p>
                    <ul style={{listStyleType : "none"}}>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Contact Us</a></li>
                        <li><a href='#'>About us</a></li>
                        <li><a href='#'>Get Started</a></li>
                    </ul>
                </div>
                <div className='sub-container'>
                    <p>Services</p>
                    <ul style={{listStyleType : "none"}}>
                        <li><a href='#'>App design</a></li>
                        <li><a href='#'>Web design</a></li>
                        <li><a href='#'>Logo design</a></li>
                        <li><a href='#'>Banner design</a></li>
                    </ul>
                </div>
                <div className='sub-container'>
                    <p>Account</p>
                    <ul style={{listStyleType : "none"}}>
                        <li><a href='#'>Profile</a></li>
                        <li><a href='#'>My account</a></li>
                        <li><a href='#'>Prefrences</a></li>
                        <li><a href='#'>Purchase</a></li>
                    </ul>
                </div>
                <div className='sub-container'>
                    <p>Courses</p>
                    <ul style={{listStyleType : "none"}}>
                        <li><a href='#'>HTML & CSS</a></li>
                        <li><a href='#'>JavaScript</a></li>
                        <li><a href='#'>Bootstrap</a></li>
                        <li><a href='#'>Node.js</a></li>
                    </ul>
                </div>
        </div>
        <div className='footer-footer'>
            <p>Copyright&copy; 2022 Cholan Tech.All rights reserved. Privacy policy  Teams & Condition. </p>
        </div>
    </div>
  )
}

export default Footer