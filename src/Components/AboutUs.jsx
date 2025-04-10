import React from "react";
import "./AboutUs.css";
import Navbar from "./Navbar";
import { GiSpiderMask } from "react-icons/gi";
import Footer from "./Footer"

const AboutUs = () => {
  return (
    <div className="about-container">
      <Navbar />

      <div className="about-content">
      <div className="intro">
        <div className="introleft">
          <img src="about-intro.png" alt="" className="about-us-image" />
        </div>
        <div className="intro-right">
          <h1>
            Together for  Success
          </h1>
          <img src="about-intro.png" alt="" className="res-about-us-image" />
          <p style={{ fontSize: "18px" }}>
            At Positivus, we help businesses grow by combining creativity,
            innovation, and data-driven strategies. Together, we build a future
            of shared success.{" "}
          </p>
        </div>
      </div>

      <div className="impact-container">
        <div className="impact-header">
          <h4>Our Impact in Numbers</h4>
          <p>
            A snapshot of the milestones and achievements <br /> that drive our
            success
          </p>
        </div>
      </div>

      <div className="numbers-list">
        <div className="number1">
          <h3>8+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="number2">
          <h3>50+</h3>
          <p>Experts</p>
        </div>
        <div className="number3">
          <h3>100+</h3>
          <p>Successfull Campaigns</p>
        </div>
        <div className="number4">
          <h3>20+</h3>
          <p>Industry Awards</p>
        </div>
        <div className="number5">
          <h3>500%</h3>
          <p>ROI for our clients</p>
        </div>
      </div>

      <div className="journey">
        <h3>Our Journey</h3>
        <p>
          From humble Beginnings to industry leaders,discover how Positivus has
          evolved to drive success for business worldwide{" "}
        </p>
      </div>
      <div className="journey-list">
        <div className="nineteen">
          <div className="year">
            <h1>2019</h1>
          </div>
            <div className="year-exp">
            
             <div className="spider-logo">
              <GiSpiderMask
                style={{
                  position: "relative",
                  top: "30px",
                  left: "15px",
                  fontSize: "2rem",
                  color:"#b9ff66"
                }}
              />
              </div>
                <div className="year-exp-content">
              <h4>The Beginning</h4>
            
            <p>
              {" "}
              Positivus was founded to help business navigate the digital world
              and achieve online success{" "}
            </p>
            </div>
          </div>
       
        </div>
        <div className="horizontal-line">
            
            </div>
        <br />
        <div className="twenty-one">
          <img src="ring.png" alt="" />
          <div className="year2021">
            <h1>2021</h1>
          </div>
          <div className="year-exp">
            
              {" "}
              <div className="spider-logo2">
              <GiSpiderMask
                style={{
                  position: "relative",
                  top: "30px",
                  left: "15px",
                  fontSize: "2rem",
                  color:"#b9ff66"
                }}
              />
              </div>
              <div className="year-exp-content">
              
            <h4>Industry Recognition</h4>
            <p>
              {" "}
              Positivus was named among the top 50 global digital agencies
              affirming our leadership{" "}
            </p>
            </div>
          </div>
        </div> 
        <div className="horizontal-line2"> </div>
        <div className="nineteen">
          <div className="year">
            <h1>2023</h1>
          </div>
          <div className="year-exp">
            
              {" "}
              <div className="spider-logo3">
              <GiSpiderMask
                style={{
                  position: "relative",
                  top: "30px",
                  left: "15px",
                  fontSize: "2rem",
                  color:"#b9ff66"
                }}
              />
              </div>
              <div className="year-exp-content">
              <h4>Innovation and Growth</h4>
           
            <p>
              {" "}
              Positivus was founded to help business navigate the digital world
              and achieve online success{" "}
            </p>
            </div>
          </div>
          <img
            src="ring2.png"
            alt=""
            style={{ position: "relative", left: "280px", top: "10px" }}
          />
        </div>   <div className="horizontal-line3"> </div>
        <div className="twenty-one">
          <img src="ring.png" alt="" />
          <div className="year2021">
            <h1>2025</h1>
          </div>
          
          <div className="year-exp">
          
              {" "}
              <div className="spider-logo4">
              <GiSpiderMask
                style={{
                  position: "relative",
                  top: "30px",
                  left: "15px",
                  fontSize: "2rem",
                  color:"#b9ff66"
                }}
              />
              </div>
              <div className="year-exp-content">
                  <h4> Leading the Future</h4>
             
           
            <p>
              {" "}
              Positivus was named among the top 50 global digital agencies
              affirming our leadership{" "}
            </p>
            </div>  
          </div>
        </div>
      </div>
      <div className="core-values">
        <h3>Core Values</h3>
        <p>At the Heart of everything we do are our core values:</p>
      </div>
      <div className="core-value-items">
        <div className="core-items-odd">
            <h3>Client Success Meet</h3>
            <p>We are dedicated to achieving measurable results for our clients.Each salary is tailored to meet unique business goals and drive long-term success</p>
        </div>
        <div className="core-items-even">
            <div className="core-left">
            <h3>Innovation</h3>
            <p>We constantly strive to stay ahead of industry trends</p>
            </div>
            <div className="core-right">
                <img src="core-right.png" alt="" />
            </div>
      
        </div>
        <div className="core-items-even">
        <div className="core-left">
            <h3>Innovation</h3>
            <p>We constantly strive to stay ahead of industry trends</p>
            </div>
            <div className="core-right">
                <img src="core-left.png" alt="" />
            </div>
      
        </div>
        <div className="core-items-odd">
        <h3>Transparency</h3>
        <p>We are dedicated to achieving measurable results for our clients.Each salary is tailored to meet unique business goals and drive long-term success</p>
        </div>
      </div>

      <div className="core-end">
        <div className="core-content">
        <div className="core-image">
            <img src="Illustration07.png" alt="Marketing Illustration" />
          </div>
          <div className="core-text">
            <h1>"At Positivus,we believe that success is built on innovation,collaboration and a relentless focus on delivering results."</h1>
            <p>
              --Nishar Ahammed ,Founder
            </p>
          
          </div>
         
        </div>
      </div>
      <div className="awards">
        <h3>Awards & Recognition</h3>
        <p>At Positivus,our commitment to excellence has been recognized by industry leaders Here are some of our achievements</p>
      </div>
      <div className="award-lists">
        <div className="award-item">
            <img src="award.png" alt="" />
            <h5><b>Best Small Business Digital Marketing Agency of the Year </b> </h5>
            <p>Celebrating our success In delivering innovative strategies and measurable results for small business clients.</p>
        </div>
        <div className="award-item">
        <img src="award.png" alt="" />
            <h5><b>Best Small Business Digital Marketing Agency of the Year </b> </h5>
            <p>Celebrating our success In delivering innovative strategies and measurable results for small business clients.</p>
       
        </div>
        <div className="award-item">
        <img src="award.png" alt="" />
            <h5><b>Best Small Business Digital Marketing Agency of the Year </b> </h5>
            <p>Celebrating our success In delivering innovative strategies and measurable results for small business clients.</p>
       
        </div>
        <div className="award-item">
        <img src="award.png" alt="" />
            <h5><b>Best Small Business Digital Marketing Agency of the Year </b> </h5>
            <p>Celebrating our success In delivering innovative strategies and measurable results for small business clients.</p>
       
        </div>
      </div>
      <div className="career">
        <div className="car-left">
            <h2>Join Our Team</h2>
        
         <p>At Positivus, we thrive on Innovation and collaboration. We're always looking for passionate individuals to join our team and help businesses grow. Ready to make an impact?</p>
         <button type="button" class="btn btn-dark text-white">Explore careers</button>

        </div>
        <div className="car-right">
            <img src="career.png" alt="" />
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
