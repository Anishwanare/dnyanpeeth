import React from "react";
import gavandemadam from "../images/gavandemadam.jpg";
import gavandesir from "../images/gavandeSir.JPG";
import Title from "./Title";

const Pillars = () => {
  const pillarData = [
    {
      name: "Shri. S. V. Gawande",
      specialization: "President",
      img: gavandesir,
    },
    {
      name: " Smt. R. S. Gawande",
      specialization: "Secretary",
      img: gavandemadam,
    },
  ];

  return (
    <div className="py-6 md:py-12 bg-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        <Title title={"Our Pillar"} />
        <div className="flex justify-between items-center mt-8">
          {pillarData.map((pillar, index) => (
            <div
              key={index}
              className="shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-4 p-4 hover:scale-105 cursor-pointer transition-transform duration-300"
            >
              <div className="text-center">
                <img src={pillar.img} alt="" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
                  {pillar.name} <br />
                  <span className="text-blue-700">{pillar.specialization}</span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pillars;
