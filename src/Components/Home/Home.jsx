import Navbar from "./Navbar";
import Banner from "./Banner";
import Module from "./Module";
import Footer from "./Footer";
import HeadingStyle from "./HeadingStyle";
import MostPopular from "./MostPopular";
import WhatsAppButton from "../Pages/WhatsAppButton";

const Home = () => {
  return (
    <div className="relative bg-black">
      <HeadingStyle />
      <Navbar />
      <Banner />
      <MostPopular />
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Home;
