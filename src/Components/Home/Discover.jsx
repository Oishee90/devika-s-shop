import React from "react";
import discover from "../../assets/discover.png";

const Discover = () => {
  return (
    <div id="features" className=" p-4">
      <div className="flex flex-col items-start justify-start container mx-auto lg:w-[42%] pb-32 leading-[140%] ">
        <img src={discover} alt="" />
        <h1 className="dm-sans text-white text-3xl font-extrabold mt-4 text-center">
          Our workflow has become more efficient than ever, thanks to real-time
          syncing and intelligent AI-driven organization.
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center container mx-auto lg:w-[32%] pb-32 leading-[140%]  ">
        <h1 className="dm-sans text-white text-5xl font-extrabold mt-4 text-center">
          Discover Our Features
        </h1>
        <p className="dm-sans text-[#BABABA] text-base font-medium mt-4 text-center">
          Our app is packed with innovative features designed to revolutionize
          the way you explore betting insights, get AI-driven predictions, and
          make smarter, more confident betting decisions.
        </p>
      </div>
      {/* 1st row */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 container mx-auto">
        <div className="flex flex-col items-start justify-start p-6 border border-[#FF6A00] rounded-2xl">
          <h1 className=" dm-sans text-[20px] text-white font-bold">
            AI Betting Picks
          </h1>
          <p className="dm-sans text-[#BABABA] text-base font-medium mt-5">
            Receive tailored betting suggestions (safe, moderate, or high-risk)
            based on your interests and risk appetite, with real-time odds
            integration..
          </p>
        </div>
        <div className="flex flex-col items-start justify-start p-6 border border-[#FF6A00] rounded-2xl">
          <h1 className=" dm-sans text-[20px] text-white font-bold">
            Smart Suggestions
          </h1>
          <p className="dm-sans text-[#BABABA] text-base font-medium mt-5">
            Get daily AI-generated predictions on upcoming matches based on
            historical data, team form, and performance analytics. Know who’s
            more likely to win before the match begins.
          </p>
        </div>
      </div>
      {/* 2nd row */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 container mx-auto mt-8 pb-5">
        <div className="flex flex-col items-start justify-start p-6 border border-[#FF6A00] rounded-2xl">
          <h1 className=" dm-sans text-[20px] text-white font-bold">
            Daily Match Feed
          </h1>
          <p className="dm-sans text-[#BABABA] text-base font-medium mt-5">
            View all of today’s matches with quick stats, win probabilities, and
            AI insights—making it easy to choose where to place your bets.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start p-6 border border-[#FF6A00] rounded-2xl">
          <h1 className=" dm-sans text-[20px] text-white font-bold">
            AI Chatbot Assistant
          </h1>
          <p className="dm-sans text-[#BABABA] text-base font-medium mt-5">
            Chat with a smart AI assistant to ask questions about teams,
            predictions, stats, or betting tips. Get real-time advice and
            intelligent feedback before placing a bet.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start p-6 border border-[#FF6A00] rounded-2xl">
          <h1 className=" dm-sans text-[20px] text-white font-bold">
            Live Match Analytics
          </h1>
          <p className="dm-sans text-[#BABABA] text-base font-medium mt-5">
            During live games, get real-time updates, momentum shifts, and
            next-goal predictions. Perfect for in-play betting decisions.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start p-6 border border-[#FF6A00] rounded-2xl">
          <h1 className=" dm-sans text-[20px] text-white font-bold">
            Global Match Coverage
          </h1>
          <p className="dm-sans text-[#BABABA] text-base font-medium mt-5">
            Access predictions and insights for major football leagues and
            tournaments worldwide, including Champions League, EPL, La Liga,
            Serie A, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
