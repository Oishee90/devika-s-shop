import { useState } from "react";
import { FaRegHeart, FaTrash } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";
import { BsCart3, BsEye } from "react-icons/bs";

// Demo product data
const product = {
  id: 1,
  title: "Classic Leather Jacket",
  price: 299,
  discount: 20,
  outOfStock: false,
  images: [
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w-800&auto=format&fit=crop"
  ],
  colors: ["#000000", "#8B4513", "#964B00", "#A0522D"]
};

export default function SijanProductCard() {
  const [hovered, setHovered] = useState(false);
  const [qty, setQty] = useState(1);

  const increaseQty = () => setQty((p) => p + 1);
  const decreaseQty = () => setQty((p) => (p > 1 ? p - 1 : 1));
  
  return (
    <div className="py-4 cursor-pointer">
      {/* Image Wrapper */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Sale Badge */}
        

        {/* Wishlist */}
        <button className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#6B0F0F] text-white flex items-center justify-center">
          <FaTrash className="text-sm" />
        </button>

        {/* Image hover change */}
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.title}
          className="w-full transition-all duration-300"
        />

        {/* Hover Action Bar */}
        {!product.outOfStock && hovered && (
          <div className="absolute bottom-0 flex items-center justify-center w-full px-3 py-4 gap-9 animate-fadeUp">
            {/* Qty Control */}
            <div className="flex items-center gap-2 bg-[#5B0D0D] rounded px-4 text-white">
              <button onClick={decreaseQty} className="w-8 h-8">
                <FiMinus />
              </button>

              <span className="w-6 text-center">{qty}</span>

              <button onClick={increaseQty} className="w-8 h-8 rounded red-bg">
                <FiPlus />
              </button>
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center w-10 h-10 rounded cream-bg red-color">
                <BsCart3 className="text-xl" />
              </button>

              <button className="flex items-center justify-center w-10 h-10 rounded cream-bg red-color">
                <BsEye className="text-xl" />
              </button>
            </div>
          </div>
        )}

        {/* Out of Stock */}
        {product.outOfStock && (
          <div className="absolute bottom-0 left-0 w-full bg-[#5B0D0D]/80 cream-color text-center py-4 text-lg">
            Out of stock
          </div>
        )}
      </div>

      {/* Content */}
      <div className="mt-6 text-center red-color">
        <h3 className="text-lg uppercase inter">{product.title}</h3>
        <p className="mt-2 text-lg font-semibold">${product.price}.00</p>

        {/* Colors */}
        <div className="flex items-center justify-center gap-2 mt-3">
          <span className="text-sm inter">Colour:</span>

          {product.colors.map((color, index) => (
            <span
              key={index}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}