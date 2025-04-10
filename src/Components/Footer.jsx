import React from 'react'
import './Footer.css'
import { BsFacebook } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa6";
import { GiSpiderMask } from "react-icons/gi";


const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="content-screen">
            <div className="footer-content">
                <div className="brand">
             
                <h1>  <a href="/"> <GiSpiderMask style={{ marginTop: '-10px' }} />
                Nishar</a></h1>
                </div>
            
                <div className="items">
                <ul>
                   <a href="/AboutUs"><li>About Us</li></a> 
                   <a href="/ServicePage"><li>Services</li></a> 
                   <a href="/UseCasePage"><li>Use Cases</li></a> 
                   <a href="/Pricing"><li>Pricing</li></a> 
                   <a href="/Blog"><li>Blog</li></a> 
                </ul>
                </div>
            
                <div className="logos">
                <a href="/"><li><BsFacebook style={{ fontSize: '30px' }} /></li></a> 
                <a href="/"><li><GrLinkedin style={{ fontSize: '30px' }} /></li></a> 
                <a href="/"><li><FaTwitter style={{ fontSize: '30px' }} />
                </li></a> 
                </div>
                </div>

                <div className='main-content'>
                    <div className="leftside">
                        <h3>Contact Us</h3>
                        <p>Email:rahsinn101@gmail.com</p>
                        <p>Phone:+91 6756767676</p>
                        <p>Address:123,abc street,dubai main road</p>
                    </div>
                    <div className="rightside">
                        <div className="outer-box">
                            <input type="email" name="" id="" placeholder='Email' />
                            <button>Subscribe  to news</button>
                        </div>
                    </div>
                  
                </div>
                <div className='copyrights'>
                    <p>2024 Nishar- made with REACT JS</p>
                    <p>Credits ( Olga, Esteban) & Licence  </p>

                </div>
               
           
        </div>
    </div>
  )
}

export default Footer