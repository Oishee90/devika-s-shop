import { useState } from "react";
import { products } from "../data/products";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";
import { BsCart3, BsEye } from "react-icons/bs";

const MostPopular = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [quantities, setQuantities] = useState({});

  const increaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  return (
    <section className="px-6 py-16 red-bg lg:px-32">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-5 mb-10 md:items-center md:flex-row">
        <div>
          <h2 className="mb-4 text-5xl canela cream-color">Most popular</h2>
          <p className="text-lg cream-color inter">
            Most Popular product that you shouldn’t miss
          </p>
        </div>

        <button className="flex items-center gap-4 px-5 py-4 rounded-md cream-bg red-color">
          Show More Products <FaCircleArrowRight />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="py-4 cursor-pointer">
            {/* Image Wrapper */}
            <div
              className="relative overflow-hidden"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Sale Badge */}
              {product.discount && (
                <span className="absolute z-10 px-4 py-1 text-sm bg-black rounded-md cream-color top-4 left-4">
                  Sale {product.discount}%
                </span>
              )}

              {/* Wishlist */}
              <button className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#6B0F0F] text-white flex items-center justify-center">
                <FaRegHeart className="text-xl" />
              </button>

              {/* Image */}
              <img
                src={
                  hoveredId === product.id
                    ? product.images[1]
                    : product.images[0]
                }
                alt="product"
                className="w-full transition-all duration-300"
              />

              {/* 🔥 HOVER ACTION BAR (ONLY IF IN STOCK) */}
              {!product.outOfStock && hoveredId === product.id && (
                <div className="absolute bottom-0 flex items-center justify-center w-full px-3 py-4 text-lg text-white inter cream-color gap-9 animate-fadeUp">
                  <div className="flex items-center gap-2 bg-[#5B0D0D] rounded  px-4">
                    {/* Minus */}
                    <button
                      onClick={() => decreaseQty(product.id)}
                      className="flex items-center justify-center w-8 h-8 "
                    >
                      <FiMinus />
                    </button>

                    {/* Qty */}
                    <span className="w-6 text-center">
                      {quantities[product.id] || 1}
                    </span>

                    {/* Plus */}
                    <button
                      onClick={() => increaseQty(product.id)}
                      className="flex items-center justify-center w-8 h-8 rounded red-bg"
                    >
                      <FiPlus />
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* Cart */}
                    <button className="flex items-center justify-center w-10 h-10 rounded ml-9 cream-bg red-color">
                      <BsCart3 className="text-xl" />
                    </button>

                    {/* View */}
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
            <div className="mt-6 text-center cream-color">
              <h3 className="text-lg uppercase inter">{product.title}</h3>
              <p className="mt-2 text-lg font-semibold">${product.price}.00</p>

              {/* Colors */}
              <div className="flex justify-center mt-3">
                <div className="flex items-center gap-3">
                  <span className="text-lg inter">Color:</span>

                  <div className="flex gap-2">
                    {product.colors.map((color, index) => (
                      <span
                        key={index}
                        className="inline-block w-3 h-3 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostPopular;
