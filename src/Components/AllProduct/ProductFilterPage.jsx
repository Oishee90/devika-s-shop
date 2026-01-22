import React, { useState, useMemo, useEffect } from "react";
import AllProductCard from "../Pages/AllProductCard";
import { products } from "../data/products";

export default function ProductFilterPage() {
  const [sort, setSort] = useState("");

  // dropdown
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);
  const [showColorDropdown, setShowColorDropdown] = useState(false);

  // filters
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

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

  /* 🔹 FILTER + SORT */
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

  /* 🔁 RESET PAGE WHEN FILTER CHANGES */
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSize, selectedColor, sort]);

  /* 📄 PAGINATION LOGIC */
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage]);

  return (
    <section>
      {/* 🔝 TOP BAR */}
      <div className="flex flex-wrap items-center justify-between px-6 py-2 red-bg lg:px-32">
        <p className="text-sm cream-color inter">
          {filteredProducts.length} Products
        </p>

        <div className="flex gap-4">
          {/* FILTER */}
          <div className="relative">
            <button
              onClick={() => {
                setShowFilterDropdown(!showFilterDropdown);
                setShowSortDropdown(false);
              }}
              className="flex items-center gap-2 px-6 py-2 text-sm border rounded-md inter cream-color border-cream-color"
            >
              Filter By ▼
            </button>

            {showFilterDropdown && (
              <div className="absolute right-0 z-50 w-40 mt-2 rounded-md shadow-lg bg-gradient-to-tr from-[#F9EFD5] to-[#FFFFFF]">
                {/* SIZE */}
                <button
                  onClick={() => {
                    setShowSizeDropdown(!showSizeDropdown);
                    setShowColorDropdown(false);
                  }}
                  className="flex justify-between w-full px-4 py-3 text-sm hover:bg-[#E8D8C3]"
                  style={{ color: "#5B0D0D" }}
                >
                  Size <span>›</span>
                </button>

                {showSizeDropdown && (
                  <div className="absolute left-full top-0 ml-1 w-28 rounded-md shadow-lg bg-gradient-to-tr from-[#F9EFD5] to-[#FFFFFF]">
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

                {/* COLOR */}
                <button
                  onClick={() => {
                    setShowColorDropdown(!showColorDropdown);
                    setShowSizeDropdown(false);
                  }}
                  className="flex justify-between w-full px-4 py-3 text-sm border-t hover:bg-[#E8D8C3]"
                  style={{ color: "#5B0D0D" }}
                >
                  Colour <span>›</span>
                </button>

                {showColorDropdown && (
                  <div className="absolute left-full top-[48px] ml-1 w-32 rounded-md shadow-lg bg-gradient-to-tr from-[#F9EFD5] to-[#FFFFFF]">
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
            )}
          </div>

          {/* SORT */}
          <div className="relative">
            <button
              onClick={() => {
                setShowSortDropdown(!showSortDropdown);
                setShowFilterDropdown(false);
              }}
              className="flex items-center gap-2 px-6 py-2 text-sm border rounded-md inter cream-color border-cream-color"
            >
              {sort || "Sort by"} ▼
            </button>

            {showSortDropdown && (
              <div className="absolute right-0 z-50 w-56 mt-2 rounded-md shadow-lg bg-gradient-to-tr from-[#F9EFD5] to-[#FFFFFF]">
                {[
                  ["low", "Price, Low → High"],
                  ["high", "Price, High → Low"],
                  ["old", "Date, Old → New"],
                  ["new", "Date, New → Old"],
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

      {/* 🧱 PRODUCTS */}
      <div className="grid grid-cols-1 gap-10 px-6 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 cream-bg lg:px-32">
        {paginatedProducts.map((product) => (
          <AllProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* 🔢 PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-end gap-2 px-6 pb-14 cream-bg lora lg:px-32">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-4 py-2 font-semibold rounded red-color disabled:opacity-40"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded r transition red-color
                ${
                  currentPage === i + 1
                    ? "red-bg cream-color"
                    : "hover:bg-[#E8D8C3]"
                }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-4 py-2 font-semibold rounded red-color disabled:opacity-4"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
