import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import AllProductCard from "../../Pages/AllProductCard";

export default function ProductSliderSection({ title, products }) {
  return (
    <section className="relative px-6 py-10 cream-bg lg:px-32 ">
      {/* Heading */}
      <h2 className="mb-12 text-2xl font-semibold text-left red-color lg:text-4xl inter">
        {title}
      </h2>

      {/* Custom Arrows */}
      <button className="absolute z-10 text-6xl -translate-y-1/2 slider-prev lg:left-[5rem] top-1/2 lg:top-[45%]  xl:top-[49%] red-color">
        <FiChevronLeft />
      </button>

      <button className="absolute z-10  text-6xl -translate-y-1/2 slider-next right-[1rem] lg:right-[5rem] top-1/2 lg:top-[45%]  xl:top-[49%]  red-color">
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
          0: { slidesPerView: 1 },
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
