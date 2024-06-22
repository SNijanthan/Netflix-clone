import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] md:px-24 px-6 absolute text-white bg-gradient-to-r from-black">
      <h1 className="md:text-6xl text-lg font-semibold text-opacity-80">
        {title}
      </h1>
      <p className=" py-6 text-lg w-3/6 hidden md:block">{overview}</p>
      <div className="">
        <button className="bg-white text-black md:py-3 md:px-10 px-3 py-2 md:text-base text-xs rounded-md md:mx-2 font-medium hover:bg-opacity-80 mt-3 md:mt-0 md:bg-opacity-100 bg-opacity-70">
          ▶ Play
        </button>
        <button className="bg-gray-800 bg-opacity-50 text-white py-3 px-10 rounded-md mx-5 font-medium hover:bg-opacity-40 hidden md:inline-block">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
