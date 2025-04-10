import React from 'react'
import './Pricing.css'
import Navbar from './Navbar'
import { FaCheckCircle } from "react-icons/fa";
import { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import Footer from './Footer'
const Pricing = () => {
   const [expandedIndex, setExpandedIndex] = useState(null);
  
    const toggleBox = (index) => {
      setExpandedIndex(expandedIndex === index ? null : index);
    };
  
    const questions = [
      { id: 1, title: "Are there any additional fees or charges that may apply?", description: "Yes, there may be additional fees or charges depending on the service or product. Please check the details for more information. These may include taxes, delivery fees, or optional add-ons.We recommend reviewing the final price before completing your purchase." },
      { id: 2, title: "Can i change or cancel my plan at any time ?", description: "Yes, you can change or cancel your plan at any time. We aim to offer flexibility to suit your needs. Some changes may take effect at the start of your next billing cycle, and certain conditions may apply, so please review the terms for full details." },
      { id: 3, title: "Do you offer  any free trial or consultation?", description: "Yes, we offer a free trial and consultation to help you get started. This gives you a chance to explore our services and see if they're the right fit for you, with no commitment required during the trial period." },
      { id: 4, title: "How do you bill and Invoice Your Clients?", description: "We bill and invoice our clients through a secure and transparent process. Invoices are typically sent via email and include a clear breakdown of all charges. Billing can be set up on a recurring basis or per project, depending on the service agreement." },
      { id: 5, title: "Are your services guaranteed to deliver results?", description: "While we strive to deliver the best possible results, outcomes can vary depending on individual goals and circumstances. We are committed to quality and customer satisfaction, and we work closely with clients to achieve the best results." },
      { id: 6, title: "Do you offer contracted-based or monthly retainer-based pricing?", description: "Yes, we offer both contract-based and monthly retainer-based pricing options. This allows you to choose a plan that best fits your needs and budget. Whether you prefer the flexibility of a monthly retainer or the structure of a contract, we’ve got you covered." }
    ];
  return (
   <div className="pricing-page">
    <Navbar/>
    <div className="price-content">
    <div className="pricing-head">
      <h1><b>Pricing</b></h1>
      <p>Elevate Your Online Presence :Competitive Pricing for Exceptional Results </p>
    </div>
    <div className="price-container">
      <div className="base-plan">
        <div className="plan-name">
          <h4>Basic Plan</h4>
          <h3>$500 <span style={{fontSize:"16px",fontWeight:"normal"}}>/month</span></h3>
          <button type="button" class="btn btn-dark text-white">Get Started</button>
          <button type="button" class="btn btn-light">Request a Quote</button>
        </div>
        <div className="plan-details">
          <p> <FaCheckCircle style={{color:"#b9ff66",marginRight:"8px"}} />Website Optimization</p>
          <p><FaCheckCircle style={{color:"#b9ff66",marginRight:"8px"}} />Social media Setup  and management (1 platform)</p>
          <p><FaCheckCircle style={{color:"#b9ff66",marginRight:"8px"}} />Monthly Progress Report</p>
          <p><FaCheckCircle style={{color:"#b9ff66",marginRight:"8px"}} />Email Support</p>
          <p><FaCheckCircle style={{color:"#b9ff66",marginRight:"8px"}} />Basic competitor analysis</p>
          <p><FaCheckCircle style={{color:"#b9ff66",marginRight:"8px"}} />Initial SEO audit</p>
        </div>
      </div>
      <div className="pro-plan">
        <div className="pro-plan-name">
         <div className="pro-head">
         <h4>Pro Plan</h4> 
         <h6>Popular</h6>
         </div> 
          <h3>$1000 <span style={{fontSize:"16px",fontWeight:"normal",color:"white"}}>/month</span></h3> 
          <button type="button" class="btn btn-dark " style={{backgroundColor:"#b9ff66"}}>Get Started</button>
          <button type="button" class="btn btn-dark text-white" style={{border:"1px solid white"}} >Request a Quote</button>
        </div>
        <div className="plan-details">
          <p> <FaCheckCircle style={{color:"#b9ff66",marginRight:"8px"}} />Website Optimization</p>
          <p><FaCheckCircle style={{color:"#b9ff66",marginRight:"8px"}} />Social media Setup  and management (3 platform)</p>
          <p><FaCheckCircle style={{color:"#b9ff66",marginRight:"8px"}} />Monthly Progress Report</p>
          <p><FaCheckCircle style={{color:"#b9ff66",marginRight:"8px"}} />Email Support</p>
          <p><FaCheckCircle style={{color:"#b9ff66",marginRight:"8px"}} />Basic competitor analysis</p>
          <p><FaCheckCircle style={{color:"#b9ff66",marginRight:"8px"}} />Initial SEO audit</p>
        </div>
      </div>
      <div className="base-plan">
        <div className="plan-name">
          <h4>Elite Plan</h4>
          <h3>$2000 <span style={{fontSize:"16px",fontWeight:"normal"}}>/month</span></h3>
          <button type="button" class="btn btn-dark text-white">Get Started</button>
          <button type="button" class="btn btn-light">Request a Quote</button>
        </div>
        <div className="plan-details">
          <p> <FaCheckCircle style={{color:"#b9ff66",marginRight:"8px"}} />Website Optimization</p>
          <p><FaCheckCircle style={{color:"#b9ff66",marginRight:"8px"}} />Social media Setup  and management (5 platform)</p>
          <p><FaCheckCircle style={{color:"#b9ff66",marginRight:"8px"}} />Monthly Progress Report</p>
          <p><FaCheckCircle style={{color:"#b9ff66",marginRight:"8px"}} />Email Support</p>
          <p><FaCheckCircle style={{color:"#b9ff66",marginRight:"8px"}} />Basic competitor analysis</p>
          <p><FaCheckCircle style={{color:"#b9ff66",marginRight:"8px"}} />Initial SEO audit</p>
        </div>
      </div>
    </div>
    <div className="price-questions">
            <h4>Frequently Asked Questions</h4>
      
            </div>
        
        <div className="price-ques-container">
       
         
    
          {questions.map((step, index) => (
            <div
              key={step.id}
              className={`price-box ${expandedIndex === index ? "expanded" : ""}`}
            >
              <div className="price-header" onClick={() => toggleBox(index)}>
                <h3>
                  <span>0{step.id}</span> {step.title}
                </h3>
                <button>{expandedIndex === index ? <FaMinus /> : <FaPlus />}</button>
              </div>
    
          
              {expandedIndex === index && (
                <div className="price-content">
                  <hr />
                  <p>{step.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        </div>
        <Footer/>
   </div>
  )
}

export default Pricing