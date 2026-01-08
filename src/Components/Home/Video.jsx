import React from "react";
import discover from "../../assets/discover.png";
const Video = () => {
  return (
    <div className=" p-4 lg:pb-32">
      <div className="flex flex-col items-start justify-start container mx-auto lg:w-1/4 pt-32 pb-8 lg:pb-22 leading-[140%] ">
        <img src={discover} alt="" />
        <h1 className="dm-sans text-white text-3xl font-extrabold  text-center">
          How does the app work?
        </h1>
      </div>
      <div className="flex justify-center mt-10 p-2 bg-black/10 blackdrop-blur-md h-[402px] z-50">
        <div
          className="w-4/5 md:w-3/5 "
          style={{ width: "847px", height: "360px" }}
        >
          <video
            src="/myvideo.mp4"
            controls
            className="w-full rounded-3xl shadow-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
