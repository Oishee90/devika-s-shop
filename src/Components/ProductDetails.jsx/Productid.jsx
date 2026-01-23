import React from "react";
import Navbar from "../Home/Navbar";
import ProductView from "./Details/ProductView";
import Footer from "../Home/Footer";
import YouMayAlsoLike from "./MayLike/YouMayAlsoLike";
import ProductSliderSection from "./OtherProduct/ProductSliderSection";
import { products } from "../data/products";
import ReviewsSection from "./Reviw/ReviewsSection";

export default function Productid() {
  return (
    <div className="relative bg-black">
      <Navbar></Navbar>

      {/* <ProductDetailPage></ProductDetailPage> */}
      {/* <ProductView></ProductView> */}
      <ProductView></ProductView>
      <YouMayAlsoLike />
      <ProductSliderSection title="Others bought with" products={products} />
      <ReviewsSection></ReviewsSection>
      <ProductSliderSection
        title="RECENTLY VIEWED"
        products={products}
      ></ProductSliderSection>
      <Footer></Footer>
    </div>
  );
}
