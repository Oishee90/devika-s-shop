
import Banner from "./Banner";
import Module from "./Module";
import Footer from "./Footer";
import HeadingStyle from "./HeadingStyle";
import MostPopular from "./MostPopular";
import WhatsAppButton from "../Pages/WhatsAppButton";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedCategories from "./CategorySlider";
import { useEffect } from "react";
import WelcomePopup from "../ShortCutModal/WelcomePopup";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <div className="relative bg-black">
      <HeadingStyle />
      <Navbar />
      <Banner />
      <FeaturedCategories></FeaturedCategories>
      <MostPopular />
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
      <WelcomePopup />
    </div>
  );
};

export default Home;
