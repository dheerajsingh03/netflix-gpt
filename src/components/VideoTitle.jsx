import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{description}</p>
      <div className="">
        <button className="bg-white rounded-lg text-black p-4 px-12 text-xl mx-2 hover:bg-opacity-80">
        ▶️ Play
        </button>
        <button className="bg-white bg-opacity-30 rounded-lg text-white p-4 px-12 text-xl mx-2 hover:bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
