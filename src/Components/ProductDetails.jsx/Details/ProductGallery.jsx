import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProductGallery({
  images,
  activeImage,
  setActiveImage,
}) {
  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-12 md:items-start md:flex-row">
      {/* Thumbnails */}
      <div
        className="
     max-w-full
    flex flex-row gap-4
    md:flex-col
    md:max-h-[550px]

    overflow-x-auto
    md:overflow-y-auto
    md:overflow-x-hidden

    hide-scrollbar
  "
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => setActiveImage(index)}
            className={`w-20 h-32 object-cover border cursor-pointer flex-shrink-0 ${
              activeImage === index ? "border-[#6B1B1B]" : "border-transparent"
            }`}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="relative flex items-center justify-center ">
        <button onClick={prevImage} className="absolute left-4 text-[#6B1B1B]">
          <FaChevronLeft size={22} />
        </button>

        <img
          src={images[activeImage]}
          className="max-h-[750px] object-contain "
        />

        <button onClick={nextImage} className="absolute right-4 text-[#6B1B1B]">
          <FaChevronRight size={22} />
        </button>
      </div>
    </div>
  );
}
