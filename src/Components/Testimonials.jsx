import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonials.css"; // Make sure this file exists

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

const Testimonials = () => {
  return (
    <div className="testimonial-container">
        <div className="test-head">
        <h3>Testimonials</h3>
        <p>
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
    <div className="testimonial-screen">
    

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
            <div className="test-content">
              <div className="test-msg">
                <p>"{testimonial.message}"</p>
              </div>
              <div className="author">
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
    </div>
  );
};

export default Testimonials;
