// OutOfStockModal.jsx
import React from "react";
import outStock from "../../assets/out-of-stock.png";
export default function OutOfStockModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm inter"
      onClick={onClose} // close on overlay click
    >
      <div
        className="
          bg-[#F9EFD5]         /* cream / light beige */
          rounded-xl
          shadow-2xl
          max-w-md w-[90%] 
          p-8
          text-center
          relative
          border border-[#5B0D0D]/30
        "
        onClick={(e) => e.stopPropagation()} // prevent close on content click
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-[#5B0D0D] hover:text-black transition-colors"
        >
          ×
        </button>

        {/* Sad Box Icon */}
        <div className="flex flex-col items-center justify-center ">
          {" "}
          <img src={outStock} alt="" />
          {/* Text */}
          <h2 className="mb-4 text-5xl font-semibold red-color inter">Sorry</h2>
          <p className="text-lg red-color inter">
            This product is out of stock
          </p>
        </div>
      </div>
    </div>
  );
}
