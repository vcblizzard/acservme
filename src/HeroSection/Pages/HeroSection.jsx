import React from "react";
import HeroContent from "../Layout/HeroContent.jsx";
import herosection from "../assets/images/herosection.jpg";
import LogoClouds from "../Layout/LogoClouds.jsx";
import FeatureSection from "../Layout/FeatureSection.jsx";
import Testimonial from "../Layout/Testimonial.jsx";
import NavbarHome from "../Layout/Navigation/NavbarHome.jsx";
import Footer from "../Layout/Footer.jsx";


function HeroSection() {
  return (
    <div>
      <NavbarHome />
      <div className="flex justify-center grid-cols-1">
        <HeroContent />
        <div className="hero-image-container">
          <img
            src={herosection}
            alt="AC"
            className="hero-image grid-cols-2"
            style={{ width: "900px" }}
          />
        </div>
      </div>
      <FeatureSection />
      <LogoClouds />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default HeroSection;
