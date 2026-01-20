/* eslint-disable react/prop-types */
import { FiHeart, FiX } from "react-icons/fi";

const WishlistAuthModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60">
      {/* Modal Box */}
      <div className="relative w-[90%] max-w-xl  cream-bg  p-9 text-center">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl text-[#571010]"
        >
          <FiX />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#571010] text-white text-2xl">
            <FiHeart />
          </div>
        </div>

        {/* Text */}
        <h2 className="text-2xl font-bold text-[#000000] inter ">
          Log in now to save your Picks.
        </h2>

        <p className="mt-3 text-base text-[#000000] inter ">
          To save your favorite itens and create a wishlist , please log in to
          your account . Once you're logged in, you can access your saved items
          anytime!
        </p>

        {/* Buttons */}
        <div className="flex gap-4 px-6 mt-6">
          <button className="w-full  bg-[#571010] px-4 py-2 text-xl text-white hover:opacity-90 transition inter">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistAuthModal;
