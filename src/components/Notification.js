import React from "react";
import notification from "../images/notification.png";
import Title from "./Title";

const Notification = () => {
  return (
    <div className="py-6 md:py-12 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <Title title={"Admission Notification"} />
        <div className="flex flex-col md:flex-row items-center justify-between mt-8">
          <div className="flex flex-col w-full md:w-1/2 md:max-w-md lg:max-w-lg mx-auto md:mx-0">
            <div className="bg-blue-400 text-white p-4 rounded-lg shadow-md text-center mb-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                Admission open for <br /> 2023-24
              </h2>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg md:text-xl lg:text-3xl font-semibold mb-2">
                D.PHARMA <br />
                <span className="text-base md:text-lg lg:text-2xl">
                  60 SEATS <br />
                  <span>Duration 2 Years</span>
                </span>
              </h3>
              <p className="text-sm md:text-base">
                <b>NOTE:</b> The candidates should be passed in 10+2 Examination
                from Science Stream
              </p>
            </div>
          </div>
          <div className="mt-8 md:mt-0 w-full md:w-1/2 md:max-w-md mx-auto md:mx-0">
            <img
              src={notification}
              alt="Notification"
              className="md:hover:scale-150 w-full h-auto transition-transform ease-in-out duration-300 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
