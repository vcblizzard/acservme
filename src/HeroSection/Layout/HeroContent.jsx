import React from "react";
import { Link } from "react-router-dom";

function HeroContent() {
  return (
    <div>
      <div className="mt-10 text-center md:mt-28 md:text-center">
        <h2 className="font-medium text-[#519de8] text-3xl md:text-4xl lg:text-5xl subpixel-antialiased">
          AIR CONDITIONER REPAIR
        </h2>
        <h2 className="font-extrabold text-[#519de8] text-6xl md:text-7xl lg:text-8xl">
          SERVICES
        </h2>
        <p className="text-black text-lg mb-5 font-extrabold">
          We provide the best AC repair services at affordable prices Affordable and friendly and professional service.
        </p>
        <Link to="/login" className="rounded-full bg-[#519de8] font-medium text-sm px-6 py-2 text-white w-full sm:w-auto md:grid-cols-4">
          GET STARTED
        </Link>
      </div>
    </div>
  );
}

export default HeroContent;
