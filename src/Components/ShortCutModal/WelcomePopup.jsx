import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const WelcomePopup = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on home page
    if (location.pathname !== "/") {
      setIsVisible(false);
      sessionStorage.removeItem("welcomePopupShown");
      return;
    }

    // Show popup if not shown in this session
    if (sessionStorage.getItem("welcomePopupShown") === "true") return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem("welcomePopupShown", "true");
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 backdrop-blur-sm transition-opacity duration-300 canela"
      onClick={() => setIsVisible(false)}
    >
      <div
        className="relative w-full max-w-3xl mx-4 overflow-hidden shadow-2xl rounded-2xl md:flex md:max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute z-20 text-4xl font-light text-white right-4 top-4 drop-shadow-md hover:text-gray-200 md:text-gray-700 md:drop-shadow-none"
          onClick={() => setIsVisible(false)}
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="relative h-72 bg-gradient-to-b from-emerald-950 to-black md:h-auto md:w-1/2">
          <img
            src="https://res.cloudinary.com/dwycwft99/image/upload/v1768988587/Rectangle_23_hiswmr.png"
            alt="Man wearing elegant maroon traditional kurta"
            className="object-cover w-full h-full"
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/500x700/0a3d2e/ffffff?text=Maroon+Kurta";
            }}
          />
        </div>

        <div className="flex flex-col items-center justify-center px-6 py-10 text-center cream-bg md:w-1/2 md:px-12 md:py-16">
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#000000] md:text-4xl">
            Be the first to know
          </h2>

          <p className="mb-8 text-base leading-relaxed text-[#000000] md:text-lg inter">
            About our drops, special offers and get the best deals.
          </p>

          <form className="w-full max-w-md space-y-5">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-5 py-4 text-base transition border-2 rounded-lg outline-none bg-transparent border-[#5B0D0D] focus:border-[#5B0D0D] focus:ring-2 focus:ring-[#5B0D0D] placeholder:text-[#5B0D0D]"
              required
            />

            <button
              type="submit"
              className="w-full px-8 py-4 text-xl font-semibold cream-color transition rounded-lg red-bg hover:bg-[#5B0D0D] active:scale-98 md:text-2xl"
            >
              Sure
            </button>
          </form>

          <div
            className="mt-6 text-sm text-gray-900 underline cursor-pointer"
            onClick={() => setIsVisible(false)}
          >
            No thanks, I like full-priced outfits.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
