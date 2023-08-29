import React from "react";

const Title = ({ title }) => {
  return (
    <div className="my-3 md:m-8 text-xl md:text-2xl lg:text-3xl text-white bg-yellow-500 w-full md:w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/5 text-center p-1 shadow-lg md:p-1 lg:p-2 xl:p-3  rounded-3xl font-semibold mb-4">
      {title}
    </div>
  );
};

export default Title;
