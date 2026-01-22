// AddToCartSuccessModal.jsx
import React from "react";

export default function AddToCartSuccessModal({
  isOpen,
  onClose,
  product,
  selectedSize,
  quantity,
}) {
  if (!isOpen) return null;

  // Fallback image if product.image not available
  const productImage =
    product.image ||
    "https://res.cloudinary.com/dwycwft99/image/upload/v1768902546/image_13_o5o97b.png";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm inter"
      onClick={onClose}
    >
      <div
        className="
          red-bg         /* deep red/maroon background */
          rounded-xl
          shadow-2xl
          max-w-3xl w-[92%] 
          overflow-hidden
          relative
         cream-color
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute z-10 text-2xl transition-colors top-3 right-4 text-white/80 hover:text-white"
        >
          ×
        </button>

        <div className="flex flex-col items-start gap-5 p-6 pt-10 sm:flex-row">
          {/* Product Image */}
          <div className="flex-shrink-0 overflow-hidden border rounded-md w-28 h-36 sm:w-32 sm:h-40 border-white/20">
            <img
              src={productImage}
              alt={product.title}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Success Message */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl font-bold text-green-400">✓</span>
              <h2 className="text-sm sm:text-xl">
                Successfully added to your CART
              </h2>
            </div>

            {/* Great Taste */}
            <p className="mb-4 text-2xl font-medium opacity-90 canela">
              Great Taste
            </p>

            {/* Product Info */}
            <div className="space-y-1.5 text-sm opacity-90">
              <p className="text-xl font-medium">
                {product.title || "Premium Sherwani"}
              </p>
              <div className="flex flex-col gap-4 text-base md:items-center md:flex-row items-stra">
                <p>Colour: {product.color || "White"}</p>
                <p>Size: {selectedSize || "M"}</p>
                <p>Quantity: {quantity || 1}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Optional footer / action buttons */}
        {/* <div className="flex justify-end gap-3 px-6 py-4 border-t border-white/10 bg-black/20">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg text-white transition"
          >
            Continue Shopping
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white text-[#6B1B1B] font-medium rounded-lg hover:bg-gray-100 transition"
          >
            View Cart
          </button>
        </div> */}
      </div>
    </div>
  );
}
