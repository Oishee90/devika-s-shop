import React from "react";
import Navbar from "../Home/Navbar";
import ProductBanner from "./ProductBanner";
import ProductFilterPage from "./ProductFilterPage";
import Footer from "../Home/Footer";

export default function AllProduct() {
  return (
    <div className="relative bg-black">
      <Navbar></Navbar>

      <ProductBanner></ProductBanner>
      <ProductFilterPage></ProductFilterPage>
      <Footer></Footer>
    </div>
  );
}
