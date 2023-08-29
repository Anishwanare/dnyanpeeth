import React from "react";
import Title from "./Title";
import kokate from "../images/R.G.Kokate.webp";

const Mentor = () => {
  return (
    <div className="py-6 md:py-12 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <Title title="Our Mentor" />
        <div className="w-full flex justify-center items-center">
          <div className="flex items-center justify-center shadow-lg bg-white rounded-md w-full md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl border border-red-200 p-4 hover:scale-105 cursor-pointer transition-transform duration-300">
            <div className="text-center">
              <p className="text-xl md:text-2xl lg:text-3xl">
                <img src={kokate} alt="Dr. Rajendra Kokate MD" />
              </p>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-2xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold">
                Dr. Rajendra Kokate MD
                <br />
                <span className="text-blue-700">Medicine</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
