import React from 'react'
import './Homescreen.css'


const HomeScreen = () => {
  return (
    <div className="container">
   
      <div className="row">
       
        <div className="content-left">
          <h1>Navigating the digital landscape for success</h1>
          <img src="ilustration.png" alt="illustration" className="res-home-img" />
          <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
          <button>Book a consultancy</button>
        </div>

      
        <div className="content-right">
          <img src="ilustration.png" alt="illustration" className="home-img" />
        </div>
      </div>

    
      
    </div>
  )
}

export default HomeScreen
