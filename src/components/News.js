import React from "react";

const News = ({ news }) => {
  return (
    <div className="bg-green-500 fixed top-0 w-full h-10 z-50 overflow-hidden">
      <div className="flex items-center justify-center h-full bg-yellow-500 text-2xl font-semibold px-4">
        <span className="mr-2">Announcement:</span>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-slidein">{news}</div>
        </div>
      </div>
    </div>
  );
};

export default News;
