import { useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import ProductDetailsAccordion from "./ProductDetailsAccordion";
import { careInstructionsFaq, productDetailsFaq } from "../../data/products";
import SizeGuideModal from "../../ShortCutModal/SizeGuideModal";
import OutOfStockModal from "../../ShortCutModal/OutOfStockModal";
import AddToCartSuccessModal from "../../ShortCutModal/AddToCartSuccessModal";
export default function ProductDetails({ product }) {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  // values: "details" | "care" | null
  const [sizeOpen, setSizeOpen] = useState(false);
  const sizes = ["S", "M", "L", "XL"];
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [showOutOfStock, setShowOutOfStock] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  return (
    <div className="max-w-md red-color canela">
      <p className="mb-2 text-lg">{product.brand}</p>

      <h1 className="mb-6 text-2xl font-semibold inter">{product.title}</h1>

      <p className="mb-3 text-xl inter">${product.price.toFixed(2)}</p>

      {/* Rating */}
      <div className="flex items-center gap-5 mb-4 inter">
        <div className="flex items-center space-x-5 text-[#6B1B1B]">
          {[...Array(5)].map((_, i) => (
            <IoStar key={i} />
          ))}
        </div>

        <span className="text-lg">
          {product.rating}.0 ({product.reviews})
        </span>
      </div>
      {/* box */}
      <div className=" bg-[#D8CBB8] px-4 w-full mb-3 py-1">
        <h1 className="text-base inter">
          Extra 20% off selected Sale styles! With code: MORE
        </h1>
      </div>

      {/* Color & Stock */}
      <div className="flex flex-col items-start justify-between gap-2 mb-4 md:items-center md:flex-row">
        <p className="text-xl font-semibold inter">Colour:{product.color}</p>
        <p className="text-xl font-medium inter ">In stock ({product.stock})</p>
      </div>

      {/* Size */}
      {/* Size */}
      <div className="relative mb-4 inter">
        <div className="flex items-center justify-between mb-2 font-semibold">
          <p className="text-sm">Size:</p>
          <p className="text-sm underline cursor-pointer">What is my Size?</p>
        </div>

        {/* Dropdown Button */}
        <button
          onClick={() => setSizeOpen(!sizeOpen)}
          className="
      w-full flex items-center justify-between
      border border-[#6B1B1B]
      px-4 py-2
      bg-transparent
      text-sm
      focus:outline-none
    "
        >
          <span className={size ? "text-black" : "red-color"}>
            {size || "Please Select"}
          </span>

          <svg
            className={`w-4 h-4 transition-transform ${
              sizeOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown List */}
        {sizeOpen && (
          <div
            className="
        absolute left-0 right-0 z-20
        border border-[#6B1B1B]
        cream-bg
        mt-1
      "
          >
            {sizes.map((item) => (
              <div
                key={item}
                onClick={() => {
                  setSize(item);
                  setSizeOpen(false);
                }}
                className="
            px-4 py-2 cursor-pointer
            hover:bg-[#6B1B1B] hover:text-white
            text-sm
          "
              >
                {item}
              </div>
            ))}
          </div>
        )}

        <p
          className="mt-3 text-sm font-semibold underline cursor-pointer"
          onClick={() => setSizeGuideOpen(true)}
        >
          Size Guide
        </p>
      </div>

      {/* Quantity */}
      <div className="mb-3 inter">
        <h1 className="mb-2 text-base">Quantity</h1>

        <div
          className="
    flex items-center justify-between
    w-32 sm:w-36 md:w-40
    h-11
    border border-[#5B0D0D]
    rounded-lg
  "
        >
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="
        w-10 h-full
        flex items-center justify-center
        border-r border-[#5B0D0D]
        text-lg
      "
          >
            −
          </button>

          <span className="flex-1 font-medium text-center">{qty}</span>

          <button
            onClick={() => setQty(qty + 1)}
            className="
        w-10 h-full
        flex items-center justify-center
        border-l border-[#5B0D0D]
        text-lg
      "
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="flex items-center w-full gap-4 inter">
        <button
          onClick={() => {
            if (product.stock <= 0) {
              setShowOutOfStock(true);
            } else {
              // normal add to cart logic
              setShowSuccessModal(true);
            }
          }}
          className={`w-full px-8 py-3 cream-color ${
            product.stock <= 0
              ? "bg-gray-400 cursor-not-allowed"
              : "red-bg hover:opacity-90"
          } font-medium inter transition`}
        >
          {product.stock <= 0 ? "OUT OF STOCK" : "ADD TO CART"}
        </button>

        <button className="border border-[#5B0D0D] px-3 py-3 rounded-full red-bg cream-color">
          <FiHeart className="text-2xl" />
        </button>
      </div>

      {/* Links */}

      <div className="flex flex-col justify-between gap-2 mt-6 text-lg md:flex-row inter">
        <div className="flex flex-col w-3/4 gap-3 font-medium">
          {/* Product Details */}
          <span
            className="underline cursor-pointer"
            onClick={() =>
              setActiveSection(activeSection === "details" ? null : "details")
            }
          >
            Product Details
          </span>

          {activeSection === "details" && (
            <ProductDetailsAccordion data={productDetailsFaq} />
          )}

          {/* Care Instructions */}
          <span
            className="underline cursor-pointer"
            onClick={() =>
              setActiveSection(activeSection === "care" ? null : "care")
            }
          >
            Care Instructions
          </span>

          {activeSection === "care" && (
            <ProductDetailsAccordion data={careInstructionsFaq} />
          )}
        </div>

        <span className="underline cursor-pointer ">Reviews</span>
      </div>
      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />
      <OutOfStockModal
        isOpen={showOutOfStock}
        onClose={() => setShowOutOfStock(false)}
      />
      <AddToCartSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        product={product}
        selectedSize={size}
        quantity={qty}
      />
    </div>
  );
}
