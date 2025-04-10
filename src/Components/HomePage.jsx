import React from "react";

import Navbar from "../Components/Navbar";
import HomeScreen from "../Components/HomeScreen";
import Logos from "../Components/Logos";
import Services from "../Components/Services";
import UseCases from "./UseCases";
import WorkingProcess from "./WorkingProcess";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <HomeScreen />
        <Logos />
        <Services />
        <UseCases />
        <WorkingProcess />
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
