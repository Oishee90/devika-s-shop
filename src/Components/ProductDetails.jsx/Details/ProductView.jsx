import { useState } from "react";

import ProductGallery from "./ProductGallery";

import { productData } from "../../data/products";
import ProductDetails from "./Productdetails";

export default function ProductView() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="min-h-screen px-6 pt-[10rem] cream-bg lg:px-32">
      <div className="grid grid-cols-1 px-6 gap-14 lg:grid-cols-2">
        <ProductGallery
          images={productData.images}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          className="col-span-2"
        />

        <ProductDetails product={productData} />
      </div>
    </section>
  );
}
