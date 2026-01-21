import React from "react";

export default function ProductBanner() {
  return (
    <div className="relative w-full h-[250px] md:h-[300px] lg:h-[450px] overflow-hidden canela ">
      {/* Background Image */}
      <img
        src="https://res.cloudinary.com/dwycwft99/image/upload/v1768993023/banner-product_nyk37x.png"
        alt="All Products Banner"
        className="absolute inset-0 object-cover object-center w-full h-full md:top-[25%] top-[43%]"
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full md:top-[10%] top-[17%]">
        <h1 className="px-4 text-2xl tracking-wide text-center text-white md:text-5xl ">
          All Products
        </h1>
      </div>
    </div>
  );
}
