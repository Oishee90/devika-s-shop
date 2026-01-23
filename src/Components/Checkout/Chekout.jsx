import React from "react";
import CheckoutPage from "./CheckoutPage";
import HeadingStyle from "../Home/HeadingStyle";
import Navbar from "../Home/Navbar";

import WhatsAppButton from "../Pages/WhatsAppButton";
import Footer from "../Home/Footer";

export default function Chekout() {
  return (
    <div className="relative bg-black">
      <HeadingStyle />
      <Navbar />
      <CheckoutPage></CheckoutPage>
      <Footer></Footer>
      {/* <WhatsAppButton></WhatsAppButton> */}
    </div>
  );
}
