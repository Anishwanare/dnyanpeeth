import React from "react";
import logo from "../images/logo.png";
import slider from "../images/slider.jpg";

const Slider = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 w-full h-full -z-20">
        <img
          src={slider}
          alt="Slider Background"
          className="w-full h-full object-cover filter-blur -z-20 blur-sm"
        />
      </div>
      <div className="py-20 md:py-28 lg:py-72 xl:py-52 md:mt-32 relative z-10">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-around gap-8">
            <div className="flex justify-center md:justify-center items-center">
              <img src={logo} alt="Logo" className="h-16 md:h-20 lg:h-32 hidden md:block" />
            </div>
            <div className="flex flex-col gap-3 md:gap-5">
              <p className="text-xl md:text-4xl text-red-600">
                VRTM Education Society
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-6xl font-semibold leading-tight mt-2 text-gray-800">
                R.S. PATIL COLLEGE OF <br className="hidden " />{" "}
                <br />
                <span className="text-blue-600 text-3xl md:text-7xl">PHARMACY</span>
              </h1>
              <p className="text-center  text-sm md:text-2xl mt-2 text-white bg-blue-500 p-2 rounded-full shadow-lg">
                Approved by PCI & Govt. of Maharashtra
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
