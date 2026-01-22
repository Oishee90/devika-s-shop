import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import AllProductCard from "../../Pages/AllProductCard";

export default function ProductSliderSection({ title, products }) {
  return (
    <section className="relative px-6 py-20 cream-bg">
      {/* Heading */}
      <h2 className="mb-12 text-2xl font-semibold text-left red-color canela">
        {title}
      </h2>

      {/* Custom Arrows */}
      <button className="absolute z-10 text-3xl -translate-y-1/2 slider-prev left-2 top-1/2 red-color">
        <FiChevronLeft />
      </button>

      <button className="absolute z-10 text-3xl -translate-y-1/2 slider-next right-2 top-1/2 red-color">
        <FiChevronRight />
      </button>

      {/* Slider */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".slider-prev",
          nextEl: ".slider-next",
        }}
        spaceBetween={30}
        slidesPerView={4}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <AllProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
