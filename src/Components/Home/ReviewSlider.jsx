// components/ReviewSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect } from "react";

const reviews = [
  {
    name: "Sarah K.",
    image:
      "https://res.cloudinary.com/dwycwft99/image/upload/v1746606936/Profile_Image_Placeholder_2_elc0pe.png",
    text: "This app completely changed the way I bet—AI predictions are accurate, the interface is smooth, and I feel more confident with every pick. A must-have for smart bettors!",
  },
  {
    name: "Michael L.",
    image:
      "https://res.cloudinary.com/dwycwft99/image/upload/v1746606936/Profile_Image_Placeholder_2_2_cxj3lt.png",
    text: "This app completely changed the way I bet—AI predictions are accurate, the interface is smooth, and I feel more confident with every pick. A must-have for smart bettors!",
  },
  {
    name: "Lauren M.",
    image:
      "https://res.cloudinary.com/dwycwft99/image/upload/v1746606936/Profile_Image_Placeholder_2_1_znuysa.png",
    text: "This app completely changed the way I bet—AI predictions are accurate, the interface is smooth, and I feel more confident with every pick. A must-have for smart bettors!.",
  },
  {
    name: "Emily R.",
    image:
      "https://res.cloudinary.com/dwycwft99/image/upload/v1746606936/Profile_Image_Placeholder_2_2_cxj3lt.png",
    text: "This app completely changed the way I bet—AI predictions are accurate, the interface is smooth, and I feel more confident with every pick. A must-have for smart bettors!",
  },
  {
    name: "Emily R.",
    image:
      "https://res.cloudinary.com/dwycwft99/image/upload/v1746606936/Profile_Image_Placeholder_2_elc0pe.png",
    text: "This app completely changed the way I bet—AI predictions are accurate, the interface is smooth, and I feel more confident with every pick. A must-have for smart bettors!",
  },
  {
    name: "Sarah K.",
    image:
      "https://res.cloudinary.com/dwycwft99/image/upload/v1746606936/Profile_Image_Placeholder_2_2_cxj3lt.png",
    text: "This app completely changed the way I bet—AI predictions are accurate, the interface is smooth, and I feel more confident with every pick. A must-have for smart bettors!",
  },
];

export default function ReviewSlider() {
  useEffect(() => {
    const navButtons = document.querySelectorAll(
      ".swiper-button-next, .swiper-button-prev"
    );
    navButtons.forEach((btn) => {
      btn.classList.add(
        "text-black",

        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center"
      );
    });
  }, []);

  return (
    <div
      id="review"
      className="bg-black  md:pt-12 text-center container mx-auto"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 dm-sans">
          <span className="bg-gradient-to-l from-[#FF5C1980] to-[#FF6A00] bg-clip-text text-transparent">
            Review
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Hear what our users are saying! Real reviews from real people who’ve
          experienced the power of our smart betting platform. Join the
          community and make smarter moves with confidence.
        </p>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="px-4"
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx} className="h-full">
            <div className="bg-white rounded-2xl p-6 h-[330px] flex flex-col justify-start items-center shadow-md">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <h3 className="font-bold text-lg mb-2 dm-sans text-[#111827]">
                {review.name}
              </h3>
              <p className="text-sm text-[#2D2D2D] text-center line-clamp-5">
                {review.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
