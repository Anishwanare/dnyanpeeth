import React from "react";
import Title from "./Title";

const service = [
  { name: "Experienced & Dedicated Staff" },
  { name: "State-of-the-art Infrastructure" },
  { name: "Round-the-clock Wifi for Students" },
  { name: "All Campus Under CCTV Surveillance" },
  { name: "Different Playground For Sports Activity" },
  { name: "Well Equipped Laboratories And Digital Classroom" },
];

const Services = () => {
  return (
    <div className="py-6 md:py-12 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center text-xl md:text-4xl">
          <Title title="Our Services" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-4 md:px-10 lg:px-20 ">
          {service.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center mb-4 hover:scale-105 cursor-pointer transition-transform duration-300"
            >
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-blue-700">
                <span className="text-red-700">{index + 1}.</span> {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
