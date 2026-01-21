import React from "react";
import Navbar from "../Home/Navbar";
import ProductBanner from "./ProductBanner";
import ProductFilterPage from "./ProductFilterPage";

export default function AllProduct() {
  return (
    <div className="relative bg-black">
      <Navbar></Navbar>

      <ProductBanner></ProductBanner>
      <ProductFilterPage></ProductFilterPage>
    </div>
  );
}
