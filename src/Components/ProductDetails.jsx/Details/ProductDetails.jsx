import { useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";

export default function ProductDetails({ product }) {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  return (
    <div className="text-[#6B1B1B]">
      <p className="mb-1 text-sm">{product.brand}</p>

      <h1 className="mb-2 text-3xl font-semibold">
        {product.title}
      </h1>

      <p className="mb-2 text-xl font-semibold">
        ${product.price.toFixed(2)}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex text-[#6B1B1B]">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <span className="text-sm">
          {product.rating} ({product.reviews})
        </span>
      </div>

      {/* Color & Stock */}
      <p className="mb-2">
        <strong>Colour:</strong> {product.color}
      </p>
      <p className="mb-4 text-sm text-green-700">
        In stock ({product.stock})
      </p>

      {/* Size */}
      <div className="mb-4">
        <label className="block mb-1 text-sm">Size</label>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="w-full border border-[#6B1B1B] p-2 bg-transparent"
        >
          <option value="">Please Select</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
        <p className="mt-1 text-xs underline cursor-pointer">
          Size guide
        </p>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => setQty(Math.max(1, qty - 1))}
          className="px-3 border"
        >
          -
        </button>
        <span>{qty}</span>
        <button
          onClick={() => setQty(qty + 1)}
          className="px-3 border"
        >
          +
        </button>
      </div>

      {/* Add to Cart */}
      <div className="flex items-center gap-4">
        <button className="bg-[#6B1B1B] text-white px-8 py-3">
          ADD TO CART
        </button>
        <button className="border border-[#6B1B1B] p-3">
          <FaHeart />
        </button>
      </div>

      {/* Links */}
      <div className="flex gap-6 mt-6 text-sm underline">
        <span className="cursor-pointer">Product Details</span>
        <span className="cursor-pointer">Reviews</span>
        <span className="cursor-pointer">Care Instructions</span>
      </div>
    </div>
  );
}
