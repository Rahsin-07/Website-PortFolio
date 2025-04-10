import React from 'react'
import Navbar from './Navbar'
import "./UseCasePage.css"
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Footer from './Footer';

const testimonials = [
  {
    message:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    position: "Marketing Director at XYZ",
  },
  {
    message:
      "We chose Positivus to handle our marketing campaigns and have been thrilled with the results. They are knowledgeable, responsive, and truly care about our success.",
    author: "Jane Doe",
    position: "CEO at ABC",
  },
  {
    message:
      "Their expertise helped our brand grow exponentially. We now get more leads and engagement than ever before!",
    author: "Michael Brown",
    position: "Founder at TechCo",
  },
  {
    message:
      "Positivus transformed our online presence and gave us a competitive edge. We couldn't be happier with their service!",
    author: "Sarah Wilson",
    position: "CMO at Startup Inc.",
  },
];

const UseCasePage = () => {
  return (
    <div className="use-cage-page">
        <Navbar/>
        <div className="uc-content">
        <div className="uc-page-intro">
        <img src="servicepageintro.png" alt="Service Intro" className='service-web-image' />
        <div className="uc-page-intro-right">
          <h1>
            Proven Success  Stories
          </h1>
          <img src="servicepageintro.png" alt="Service Intro" className='service-res-image' />
          <p>
           See how our innovative digital marketing strategies have transformed businesses and driven growth across various industries. Explore our case studies to discover the impact of our tailored solutions and how we can help you achieve your goals.
          </p>
        </div>
      </div>
      <div className="success-story-box">
        <div className="success-story">
            <h4>Featured Success Story </h4>
            <h5><b>Scaling Success for a Leading E-Commerce Brand</b></h5>
            <p>Through a comprehensive SEO and PCC strategy we helped this e-commerce brand increases visibility,drive traffic,and boost sales</p>
            <a style={{color:"#b9ff66",textDecoration:"none"}} href="/"><BsArrowUpRightCircleFill style={{fontSize:"28px",marginRight:"8px"}} />Read</a>
        </div>
        <div className="success-boxes">
                        <div className="sbox">
                            <h4>200%</h4>
                            <p>Increase in organic traffic</p>
                            </div>
                        <div className="sbox">
                        <h4>150%</h4>
                        <p>Rise in <br />online sales</p>
                        </div>
                        <div className="sbox">
                        <h4>75%</h4>
                        <p>Reduction in cost per click(CPC)</p>
                        </div>
                        <div className="sbox">
                        <h4>300%</h4>
                        <p>Improvement in conversion rate</p>
                        </div>
        </div>
      </div>
      <div className="success-stories">
        <h4>All Success Stories</h4>
        <p>Explore Real-Life Examples of our proven Digital Marketing success through our case studies</p>
      </div>
      <div className="uc-usecase-container">
     

      <div className="uc-usecase-content">
        <div className="uc-inside-content">
          <h4>E-Commerce <br /> Fashion Brand</h4>
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <a style={{textDecoration:"none",color:"black"}} href="/"><BsArrowUpRightCircleFill style={{fontSize:"22px",marginRight:"8px"}} />Learn More</a>
        </div>

        <div className="uc-inside-content">
          <h4 >Local Restaurant Chain</h4>
          <p >
            For a B2B software company, we developed an SEO strategy that
            resulted in a first-page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <a style={{textDecoration:"none",color:"black"}} href="/"><BsArrowUpRightCircleFill style={{fontSize:"22px",marginRight:"8px"}} />Learn More</a>
        </div>

        <div className="uc-inside-content">
          <h4>HealthCare Provider</h4>
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <a style={{textDecoration:"none",color:"black"}} href="/"><BsArrowUpRightCircleFill style={{fontSize:"22px",marginRight:"8px"}} />Learn More</a>
        </div>
        <div className="uc-inside-content">
          <h4>E-Commerce <br /> Fashion Brand</h4>
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <a style={{textDecoration:"none",color:"black"}} href="/"><BsArrowUpRightCircleFill style={{fontSize:"22px",marginRight:"8px"}} />Learn More</a>
        </div>

        <div className="uc-inside-content">
          <h4 >Local Restaurant Chain</h4>
          <p >
            For a B2B software company, we developed an SEO strategy that
            resulted in a first-page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <a style={{textDecoration:"none",color:"black"}} href="/"><BsArrowUpRightCircleFill style={{fontSize:"22px",marginRight:"8px"}} />Learn More</a>
        </div>

        <div className="uc-inside-content">
          <h4>HealthCare Provider</h4>
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <a style={{textDecoration:"none",color:"black"}} href="/"><BsArrowUpRightCircleFill style={{fontSize:"22px",marginRight:"8px"}} />Learn More</a>
        </div>
      </div>
    </div>
    <div className="uc-testimonials">
      <h4>Testimonials</h4>
      <p>Here from our satisfied Clients:Read  our testimonials too learn more about our Digital Marketing Services</p>
    </div>
    <div className="uc-slider">
      
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="uc-test-content">
                    <div className="uc-test-msg">
                      <p>"{testimonial.message}"</p>
                    </div>
                    <div className="uc-author">
                      <h5>
                        {testimonial.author} <br />{" "}
                        <span>{testimonial.position}</span>
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
    </div>
    <div className="career">
        <div className="car-left">
            <h2><b>Let's create your next success story</b></h2>
        
         <p>Contact us today to learn more about how our digital marketing services  can help your business grow and succeed online</p>
         <button type="button" class="btn btn-dark text-white" style={{width:"300px"}}>Get Your Free Proposal</button>

        </div>
        <div className="car-right">
            <img src="Illustration (8).png" alt="" />
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default UseCasePage