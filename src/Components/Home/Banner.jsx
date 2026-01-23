import { useState } from "react";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import video1 from "../../assets/video.mp4";
import video2 from "../../assets/video.mp4";
import video3 from "../../assets/video.mp4";
import { Link } from "react-router-dom";

const Banner = () => {
  const slides = [
    {
      id: 1,
      video: video1,
      title: "New Collection",
      year: "2026",
      description:
        "Discover the latest trends in fashion. Shop our curated collection of premium clothing and accessories.",
      buttonText: "Shop now →",
    },
    {
      id: 2,
      video:
        "https://www.shutterstock.com/shutterstock/videos/3944463751/preview/stock-footage-a-shot-of-an-indian-groom-posing-for-the-photoshoot-at-his-indian-wedding.webm",
      title: "Summer Essentials",
      year: "2026",
      description:
        "Lightweight fabrics and modern silhouettes designed for everyday comfort.",
      buttonText: "Explore →",
    },
    {
      id: 3,
      video: video3,
      title: "Luxury Wear",
      year: "2026",
      description:
        "Premium designs crafted for elegance, confidence, and timeless style.",
      buttonText: "View Collection →",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black canela">
      {/* SLIDES */}
      {slides.map((slide, i) => {
        const isActive = i === index;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out
              ${
                isActive
                  ? "opacity-100 translate-y-0 z-20"
                  : "opacity-0 translate-y-0 z-10"
              }`}
          >
            <video
              src={slide.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 object-cover w-full h-full"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-30 flex items-center h-full px-6 mx-auto lg:px-32">
              <div className="max-w-xl text-[#EFE8D8]">
                <h1 className="text-3xl font-light leading-tight md:text-6xl">
                  {slide.title} <br /> {slide.year}
                </h1>
                <p className="max-w-md mt-3 text-sm md:text-lg md:mt-9 inter">
                  {slide.description}
                </p>
                <Link to="/all-product">
                  {" "}
                  <button className="mt-8 inline-flex items-center gap-3 bg-[#EFE8D8] text-black px-6 py-3 text-sm font-medium">
                    {slide.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      {/* CONTROLS + DOTS */}
      <div className="absolute z-40 flex items-center gap-6 -translate-y-1/2 right-8 top-[65%] sm:top-1/2">
        {/* DOTS */}
        <div className="flex-col hidden gap-3 md:flex">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all
                ${i === index ? "red-bg scale-125" : "bg-[#F9EFD566]"}`}
            />
          ))}
        </div>

        {/* ARROWS */}
        <div className="flex flex-col gap-6 px-6 lg:pr-32 ">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[#EFE8D8] text-[#EFE8D8]
            flex items-center justify-center hover:bg-[#EFE8D8] hover:text-black transition"
          >
            <FiArrowUp />
          </button>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[#EFE8D8] text-[#EFE8D8]
            flex items-center justify-center hover:bg-[#EFE8D8] hover:text-black transition"
          >
            <FiArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
