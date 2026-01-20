import { FiX } from "react-icons/fi";

const SearchModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm canela">
      {/* Modal Box */}
      <div className="w-[90%] max-w-lg rounded-lg cream-bg red-color p-6 relative animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl hover:text-[#571010]"
        >
          <FiX />
        </button>

        {/* Title */}
        <h2 className="mb-4 text-2xl font-semibold text-center">
          Search Products
        </h2>

        {/* Input */}
        <input
          type="text"
          placeholder="Search by name, category..."
          className="w-full border border-[#ddd] rounded-md px-4 py-3 focus:outline-none focus:border-[#571010]"
        />

        {/* Button */}
        <button className="w-full mt-5 py-3 rounded-md bg-[#571010] text-white hover:opacity-90 transition inter">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchModal;
