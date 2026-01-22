import React from "react";
import CheckoutPage from "./CheckoutPage";
import HeadingStyle from "../Home/HeadingStyle";
import Navbar from "../Home/Navbar";
import WelcomePopup from "../ShortCutModal/WelcomePopup";

export default function Chekout() {
  return (
    <div className="relative bg-black">
      <HeadingStyle />
      <Navbar />
      <CheckoutPage></CheckoutPage>
      <WelcomePopup />
    </div>
  );
}
