import React from "react";
import pharma from "../images/pharma.png";
import Title from "./Title";

const Course = () => {
  return (
    <div className="py-6 md:py-12 bg-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        <Title title={"Courses Offered"} />
        <div className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-around mt-8">
          <div className="bg-blue-400 text-white p-4 md:p-8 rounded-lg shadow-md text-center md:w-1/2">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              D.PHARM 2 YEAR <br /> 60 Seats
            </h2>
          </div>
          <div className="mt-4 md:mt-0 w-full md:w-1/2">
            <img
              src={pharma}
              alt="Pharma"
              className="w-full h-auto md:w-96 mx-auto md:mx-0 hover:scale-105 transition-transform ease-in-out duration-300 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
