import React, { useState, useMemo } from "react";
import ProductCard from "../Pages/ProductCard";
import { products } from "../data/products";

export default function ProductFilterPage() {
  const [sort, setSort] = useState("");

  // Dropdown states
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);
  const [showColorDropdown, setShowColorDropdown] = useState(false);

  // Filter states
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // Options
  const sizes = ["XS", "S", "M", "XL", "2XL"];
  const colors = [
    { name: "Black", value: "black" },
    { name: "Grey", value: "grey" },
    { name: "White", value: "white" },
    { name: "Brown", value: "brown" },
    { name: "Blue", value: "blue" },
    { name: "Red", value: "red" },
    { name: "Green", value: "green" },
  ];

  // 🔹 Filter + Sort Logic
  const filteredProducts = useMemo(() => {
    let data = [...products];

    if (selectedSize) {
      data = data.filter((p) => p.size === selectedSize);
    }

    if (selectedColor) {
      data = data.filter((p) => p.colors?.includes(selectedColor));
    }

    if (sort === "low") data.sort((a, b) => a.price - b.price);
    if (sort === "high") data.sort((a, b) => b.price - a.price);
    if (sort === "old")
      data.sort((a, b) => new Date(a.date) - new Date(b.date));
    if (sort === "new")
      data.sort((a, b) => new Date(b.date) - new Date(a.date));

    return data;
  }, [selectedSize, selectedColor, sort]);

  return (
    <section>
      {/* 🔝 TOP BAR */}
      <div className="flex flex-wrap items-center justify-between px-6 py-2 red-bg lg:px-32">
        <p className="text-sm cream-color inter">
          {filteredProducts.length} Products
        </p>

        <div className="flex gap-4">
          {/* 🔽 FILTER DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => {
                setShowFilterDropdown(!showFilterDropdown);
                setShowSortDropdown(false);
              }}
              className="px-6 py-2 text-sm border rounded-md inter cream-color border-cream-color flex items-center justify-between gap-2 min-w-[120px]"
            >
              Filter By <span className="text-xs">▼</span>
            </button>

            {showFilterDropdown && (
              <div className="absolute right-0 z-50 w-40 mt-2 bg-white rounded-md shadow-lg">
                {/* SIZE */}
                <div className="relative">
                  <button
                    onClick={() => {
                      setShowSizeDropdown(!showSizeDropdown);
                      setShowColorDropdown(false);
                    }}
                    className="flex items-center justify-between w-full px-4 py-3 text-sm hover:bg-gray-50"
                    style={{ color: "#5B0D0D" }}
                  >
                    Size <span>›</span>
                  </button>

                  {showSizeDropdown && (
                    <div className="absolute left-full top-0 ml-1 bg-[#F5E6D3] w-28 rounded-md shadow-lg">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => {
                            setSelectedSize(size);
                            setShowFilterDropdown(false);
                            setShowSizeDropdown(false);
                          }}
                          className="block w-full px-4 py-3 text-sm text-left hover:bg-[#E8D8C3]"
                          style={{ color: "#5B0D0D" }}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* COLOUR */}
                <div className="relative border-t">
                  <button
                    onClick={() => {
                      setShowColorDropdown(!showColorDropdown);
                      setShowSizeDropdown(false);
                    }}
                    className="flex items-center justify-between w-full px-4 py-3 text-sm hover:bg-gray-50"
                    style={{ color: "#5B0D0D" }}
                  >
                    Colour <span>›</span>
                  </button>

                  {showColorDropdown && (
                    <div className="absolute left-full top-0 ml-1 bg-[#F5E6D3] w-32 rounded-md shadow-lg">
                      {colors.map((color) => (
                        <button
                          key={color.value}
                          onClick={() => {
                            setSelectedColor(color.value);
                            setShowFilterDropdown(false);
                            setShowColorDropdown(false);
                          }}
                          className="block w-full px-4 py-3 text-sm text-left hover:bg-[#E8D8C3]"
                          style={{ color: "#5B0D0D" }}
                        >
                          {color.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 🔽 SORT DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => {
                setShowSortDropdown(!showSortDropdown);
                setShowFilterDropdown(false);
              }}
              className="px-6 py-2 text-sm border rounded-md inter cream-color border-cream-color flex items-center justify-between gap-2 min-w-[140px]"
            >
              {sort || "Sort by"} <span className="text-xs">▼</span>
            </button>

            {showSortDropdown && (
              <div className="absolute right-0 z-50 w-56 mt-2 bg-[#F5E6D3] rounded-md shadow-lg">
                {[
                  ["low", "Price, Low to High"],
                  ["high", "Price, High to Low"],
                  ["old", "Date, Old to New"],
                  ["new", "Date, New to Old"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    onClick={() => {
                      setSort(value);
                      setShowSortDropdown(false);
                    }}
                    className="block w-full px-4 py-3 text-sm text-left hover:bg-[#E8D8C3]"
                    style={{ color: "#5B0D0D" }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 🧱 PRODUCT GRID */}
      <div className="grid grid-cols-1 gap-10 px-6 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 cream-bg lg:px-32">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
