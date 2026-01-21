import Navbar from "./Navbar";
import Banner from "./Banner";
import Module from "./Module";
import Footer from "./Footer";
import HeadingStyle from "./HeadingStyle";
import MostPopular from "./MostPopular";
import WhatsAppButton from "../Pages/WhatsAppButton";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedCategories from "./CategorySlider";
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
    </div>
  );
};

export default Home;
