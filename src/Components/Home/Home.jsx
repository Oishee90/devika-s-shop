import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Discover from "./Discover";
import Video from "./Video";
import Pricing from "./Pricing";
import Faq from "./Faq";

import Module from "./Module";
import Footer from "./Footer";
import ReviewSlider from "./ReviewSlider";
import HeadingStyle from "./HeadingStyle";

const Home = () => {
  return (
    <div className="bg-black">
      <HeadingStyle></HeadingStyle>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Home;
