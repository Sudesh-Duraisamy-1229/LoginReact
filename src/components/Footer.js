import React from 'react'
import './Footer.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-header'>
            <h3>Cholan Technology LLP </h3>
            <div className='footer-icon'>
                <WhatsAppIcon style={{color: "lightgreen" , paddingRight:"10px"}}/>
                <InstagramIcon style={{color: "#fd5949" , paddingRight:"10px"}}/>
                <FacebookIcon style={{color: "#4267B2" , paddingRight:"10px"}}/> 
                <TwitterIcon style={{color: "#1DA1F2" , paddingRight:"10px"}}/>
                
            </div>
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