import React from "react";
import "./Services.css";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Services = () => {
  return (
    <div className="services-container">
      <div className="service-intro">
        <div className="intro-head"><h2>Services</h2></div>
        <div className="intro-para">
          <span className="intro-span">
           <p>At our digital marketing agency, we offer a range of services to
            help
            businesses grow and succeed online. These services include:</p> 
          </span>
        </div>
      </div>

      <div className="content-boxes">
        {/* Service Boxes */}
        {[
          { text: "Search Engine Optimization", img: "box1.webp" },
          { text: "Pay-Per-Click Advertising", img: "box2.webp" },
          { text: "Social Media Marketing", img: "email.png" },
          { text: "Email Marketing", img: "email.png" },
          { text: "Content Creation", img: "content.png" },
          { text: "Data & Analytics Tracking", img: "analytics.png" },
        ].map((service, index) => (
          <div key={index} className="content-box">
            <div className="boxleft">
              <p className="box-para">{service.text}</p>
              <img className="service-box-res-image" src={service.img} alt={service.text} />
              <a href="https://www.google.com">
                <BsArrowUpRightCircle className="icon" /> Learn More
              </a>
            </div>
            <div className="boxright">
              <img src={service.img} alt={service.text} />
            </div>
          </div>
        ))}
      </div>

      <div className="service-end">
        <div className="service-content">
          <div className="service-text">
            <h3>Let's Make Things Happen</h3>
            <p>
              Contact us today to learn more about how our digital marketing services <br />
              can help your business grow and succeed online.
            </p>
            <button>Get your free proposal</button>
          </div>
          <div className="service-image">
            <img src="Frame 19.png" alt="Marketing Illustration" className="service-box-web-image"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
