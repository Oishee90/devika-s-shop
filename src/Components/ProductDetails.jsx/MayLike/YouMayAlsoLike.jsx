import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AllProductCard from "../../Pages/AllProductCard";
import { useState } from "react";
import { products } from "../../data/products";

export default function YouMayAlsoLike() {
  const [relatedProducts, setrelatedProducts] = useState(products);
  return (
    <section className="px-6 py-5 cream-bg lg:px-32 ">
      {/* Heading */}
      <h2 className="mb-12 text-2xl font-semibold text-left lg:text-4xl red-color inter">
        You may also like
      </h2>

      {/* Slider */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="you-may-like-swiper !pb-16"
      >
        {relatedProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <AllProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
