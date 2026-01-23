import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LuMoveLeft } from "react-icons/lu";
import { LuMoveRight } from "react-icons/lu";
import { Link } from "react-router-dom";
// Fake data for categories
const categoriesData = [
  {
    id: 1,
    title: "Sherwanies",
    image:
      "https://res.cloudinary.com/dwycwft99/image/upload/v1768975708/Cart_my3q8o.png",
  },
  {
    id: 2,
    title: "Kurtas",
    image:
      "https://res.cloudinary.com/dwycwft99/image/upload/v1769160788/maroon-mens-kurta-pajama_ri27zu.jpg",
  },
  {
    id: 3,
    title: "Jackets",
    image:
      "https://res.cloudinary.com/dwycwft99/image/upload/v1769160149/why-be-boring-when-you-can-make-statement-studio-shot-stylishly-dressed-young-man-posing-against-grey-background_kbxteb.jpg",
  },
  {
    id: 4,
    title: "Traditional Wear",
    image:
      "https://res.cloudinary.com/dwycwft99/image/upload/v1768988587/Rectangle_23_hiswmr.png",
  },
  {
    id: 5,
    title: "Wedding Collection",
    image:
      "https://res.cloudinary.com/dwycwft99/image/upload/v1769161004/arun-prakash-gTtOoI_KXFY-unsplash_1_onzbfj.png",
  },
];

const FeaturedCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, categoriesData.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, maxIndex]);

  return (
    <div className="w-full px-4 py-16 red-bg sm:px-6 lg:px-32 Canela">
      <div className="mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl  text-[#F5E6D3] text-center tracking-wide mb-4 canela">
            FEATURED CATEGORIES
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative ">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-[50px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-[#5b5b5b6c]
 hover:bg-[#5B5B5B80]  cream-color rounded-full flex items-center justify-center transition-all duration-700 shadow-lg -translate-x-4 md:-translate-x-6"
            aria-label="Previous slide"
          >
            <LuMoveLeft className="text-sm md:text-base" />
          </button>

          {/* Slides */}
          <div className="mx-8 overflow-hidden md:mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {categoriesData.map((category) => (
                <div
                  key={category.id}
                  className="flex-shrink-0 px-2 md:px-3 lg:px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <Link to="/product-details">
                    {" "}
                    <div className="relative overflow-hidden rounded-lg shadow-2xl cursor-pointer group h-[38rem]">
                      {/* Image */}
                      <img
                        src={category.image}
                        alt={category.title}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                      {/* Title */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        {/* Title */}
                        <h3 className="font-serif text-2xl tracking-wide text-white md:text-3xl">
                          {category.title}
                        </h3>

                        {/* Border */}
                        <div className="w-[8rem] h-[2px] bg-[#FFFFFF] mt-3 mb-4"></div>

                        {/* View Button (hidden by default) */}
                        <button
                          className="
 
    opacity-0 translate-y-3
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-300
    border border-[#F9EFD5]
    px-5 py-1.5 text-sm tracking-wider rounded-2xl
   
    bg-[#F9EFD5] text-[#5B0D0D]
  "
                        >
                          VIEW
                        </button>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-[50px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-[#5b5b5b6c]  cream-color rounded-full flex items-center justify-center transition-all duration-300 shadow-lg translate-x-4 md:translate-x-6"
            aria-label="Next slide"
          >
            <LuMoveRight className="text-sm md:text-base" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-3 bg-[#F5E6D3]"
                  : "w-3 h-3 bg-[#8C3A3A] hover:bg-[#A04545]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
