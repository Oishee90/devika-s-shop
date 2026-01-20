import Navbar from "./Navbar";
import Banner from "./Banner";

import Module from "./Module";
import Footer from "./Footer";

import HeadingStyle from "./HeadingStyle";
import MostPopular from "./MostPopular";

const Home = () => {
  return (
    <div className="bg-black">
      <HeadingStyle></HeadingStyle>
      <Navbar></Navbar>
      <Banner></Banner>
      <MostPopular></MostPopular>
      <Footer></Footer>
    </div>
  );
};

export default Home;
