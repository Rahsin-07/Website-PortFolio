// import React from 'react'
// import './Navbar.css'
// import { GiSpiderMask } from "react-icons/gi";
// import { IoMdMenu } from "react-icons/io";

// const Navbar = () => {
//   return (
//     <nav class="navbar navbar-expand-lg bg-body-tertiary" className="navbar">
// <div className="logo"><a class="navbar-brand" href="/">
// <span ><GiSpiderMask className='spidey' /> Nishar</span>
// </a>
// <button className='menu-btn'><IoMdMenu /></button>


// </div>

// <div className="item">
// <ul class="container-row list-items navbar-nav me-auto mb-2 mb-lg-0">
//       <li class="nav-item">
//         <a class="nav-link active" aria-current="page" href="/">
//           About Us
//         </a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link active" aria-current="page" href="/">
//           Services
//         </a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link active" aria-current="page" href="/">
//           Use Cases
//         </a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link active" aria-current="page" href="/">
//           Pricing
//         </a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link active" aria-current="page" href="/">
//           Blog
//         </a>
//       </li>
//     </ul>
// </div>



// <div className="btn">
// <button class="btn btn-outline-success" type="submit">
//       Request a quote
//     </button>
    
// <div className="resp-nav">
// <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: "20px" }}>

//     <li><a href="/">About Us</a></li>
//     <li><a href="/">About Us</a></li>
//     <li><a href="/">About Us</a></li>
//     <li><a href="/">About Us</a></li>
    
//   </ul>
// </div>
// </div>


// </nav>
//   )
// }

// export default Navbar



import React, { useState } from 'react';
import './Navbar.css';
import { GiSpiderMask } from "react-icons/gi";
import { IoMdMenu, IoMdClose } from "react-icons/io";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <a className="navbar-brand" href="/">
          <span><GiSpiderMask className='spidey' /> Nishar</span>
        </a>
        <button className='menu-btn' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      <div className={`item ${menuOpen ? 'open' : ''}`}>
        <ul className="container-row list-items">
         <li className="nav-item"><a className="nav-link" href="./AboutUs">About Us</a></li> 
          <li className="nav-item"><a className="nav-link" href="/ServicePage">Services</a></li>
          <li className="nav-item"><a className="nav-link" href="/UseCasePage">Use Cases</a></li>
          <li className="nav-item"><a className="nav-link" href="/Pricing">Pricing</a></li>
          <li className="nav-item"><a className="nav-link" href="/Blog">Blog</a></li>
        </ul>
      </div>

 
      {menuOpen && (
        <div className="resp-nav">
          <ul>
          <a href="/AboutUs"><li>About Us</li></a> 
                   <a href="/ServicePage"><li>Services</li></a> 
                   <a href="/UseCasePage"><li>Use Cases</li></a> 
                   <a href="/Pricing"><li>Pricing</li></a> 
                   <a href="/Blog"><li>Blog</li></a> 
          </ul>
          <div className="btn-res">
        <button className="btn-outline-success">Request a Quote</button>
      </div>
        </div>
      )}
  
        <button className="btn btn-outline-success">Request a Quote</button>
    

     
    </nav>
  );
};

export default Navbar;
