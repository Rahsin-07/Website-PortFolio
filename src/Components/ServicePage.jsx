import React from "react";
import Navbar from "./Navbar";
import "./ServicePage.css";
import { GiSpiderMask } from "react-icons/gi";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Footer from "./Footer"

const steps = [
  {
    number: "1",
    title: "Website Audit and Analysis",
    description:
      "We begin by conducting a comprehensive audit to identify areas for improvement, including technical issues, content quality, and keyword opportunities.",
  },
  {
    number: "2",
    title: "Keyword Research and strategy",
    description:
      "We analyze high-performing keywords relevant to your business to maximize your website’s visibility on search engines.",
  },
  {
    number: "3",
    title: "On-Page Optimization",
    description:
      "We optimize your website’s content, meta tags, and internal linking structure to improve search engine rankings.",
  },
  {
    number: "4",
    title: "Technical SEO Fixes",
    description:
      "We resolve technical issues such as site speed, mobile-friendliness, and structured data to ensure seamless indexing.",
  },
  {
    number: "5",
    title: "Content Strategy",
    description:
      "We create and optimize high-quality content to engage users and improve organic search rankings.",
  },
  {
    number: "6",
    title: "Backlink Building",
    description:
      "We acquire high-authority backlinks to enhance your website’s credibility and ranking in search engines.",
  },
];

const ServicePage = () => {
  return (
    <div className="service-page-container">
     
      <Navbar />
      <div className="service-page-content">
     
      <div className="service-page-intro">
        <img src="servicepageintro.png" alt="Service Intro" className="service-intro-image"/>
        <div className="service-page-intro-right">
          <h1>
            Expert Digital Marketing  Services
          </h1>
          <img src="servicepageintro.png" alt="Service Intro" className="service-res-image" />
          <p>
            Unlock your business's full potential with tailored strategies
            designed to drive growth and deliver results.
          </p>
        </div>
      </div>

  
      <div className="service-page-seo">
        <div className="sp-logo">
          <GiSpiderMask style={{ fontSize: "32px", color: "#b9ff66" }} />
        </div>

        <div className="sp-seo-head">
          <h4>Search Engine Optimization</h4>
        </div>

        <div className="sp-seo-content" style={{ width: "100%" }}>
          <p>
            SEO is the process of improving your website's visibility on search
            engines like Google. By optimizing your content and site structure,
            we help your business rank higher in search results, driving more
            organic traffic and potential customers.
          </p>
          <button
            type="button"
            className="btn btn-light"
            style={{ width: "700px", maxWidth: "100%" }}
          >
            Boost My Rankings
          </button>
        </div>
      </div>

   
      <div className="seo-work">
        <h3>How We Work: SEO Process</h3>
        <p>
          Our step-by-step SEO process ensures your website ranks higher,
          attracts more traffic, and drives lasting results.
        </p>
      </div>


      <div className="seo-work-steps">
        {steps.map((step, index) => (
          <div className="seo-steps" key={index}>
            <div className="seo-no">{step.number}</div>
            <div className="seo-exp">
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="service-page-uc">
        <h3>Use Case</h3>
        <p>Explore Real-Life Examples of our proven digital marketing success through our case studies</p>
      </div>

      <div className="sp-usecase-container">
     

      <div className="sp-usecase-content">
        <div className="sp-inside-content">
          <h4>E-Commerce <br /> Fashion Brand</h4>
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <a href="/">Case info →</a>
        </div>

        <div className="sp-inside-content">
          <h4 >Local Restaurant Chain</h4>
          <p >
            For a B2B software company, we developed an SEO strategy that
            resulted in a first-page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <a href="/">Case info →</a>
        </div>

        <div className="sp-inside-content">
          <h4>HealthCare Provider</h4>
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <a href="/">Case info →</a>
        </div>
      </div>
    </div>
    <div className="sp-other-services">
      <div className="sp-other-head">
        <h4>Our Other Services</h4>
        <p>At our digital market agency ,we offer a range of services to help business grow and succeed online.These Service include </p>
      </div>
       <div className="sp-content-boxes">
              {/* Service Boxes */}
              {[
                { text: "Search Engine Optimization", img: "box1.webp" },
                { text: "Pay-Per-Click Advertising", img: "box2.webp" },
                { text: "Social Media Marketing", img: "socialmedia.png" },
                { text: "Email Marketing", img: "email.png" },
                { text: "Content Creation", img: "content.png" },
                { text: "Data & Analytics Tracking", img: "analytics.png" },
              ].map((service, index) => (
                <div key={index} className="sp-content-box">
                  <div className="sp-boxleft">
                    <p className="box-para">{service.text}</p>
         
                    
                    <a href="https://www.google.com">
                      <BsArrowUpRightCircle className="icon" /> Learn More
                    </a>
                  </div>
                  <div className="boxright">
                    <img  className ="service-web-image"
                    src={service.img} alt={service.text} />
                  </div>
                </div>
              ))}
            </div>
    </div>
    <div className="sp-career">
        <div className="sp-car-left">
            <h2>Ready to Elevate Your Search Rankings ?</h2>
        
         <p>Our proven SEO strategies are designed to help your business achieve long-lasting success in search engines. Whether you want to boost organic traffic, improve keyword rankings, or increase conversions, we're here to make it happen</p>
         <h6><b>Lets work together to grow your online presence</b></h6>
         <button type="button" class="btn btn-dark text-white">Start My SEO Journey</button>

        </div>
        <div className="sp-car-right">
            <img src="rank.png" alt="" />
        </div>
      </div>
      
     
      </div>
      <Footer />
    </div>
  
    
  );
};

export default ServicePage;
