// SizeGuideModal.jsx
import React from "react";

export default function SizeGuideModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm inter"
      onClick={onClose} // close when clicking overlay
    >
      <div
        className="
          cream-bg          /* light beige / cream */
          rounded-xl
          shadow-2xl
          max-w-xl w-[90%]
          overflow-hidden
          border border-[#5B0D0D]
          relative
        "
        onClick={(e) => e.stopPropagation()} // prevent close on content click
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#5B0D0D]">
          <h2 className="text-lg font-semibold red-color inter">Size Guide</h2>
          <button
            onClick={onClose}
            className="text-2xl red-color hover:text-black"
          >
            ×
          </button>
        </div>

        {/* Table Content */}
        <div className="p-5">
          <table className="w-full text-base border-collapse red-color inter">
            <thead>
              <tr className="border-b border-[#5B0D0D]">
                <th className="pb-3 font-medium text-left ">
                  Chest Size (In Inches)
                </th>
                <th className="pb-3 font-semibold text-left">Size</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#5B0D0D]">
                <td className="py-2">36</td>
                <td className="py-2">XS</td>
              </tr>
              <tr className="border-b border-[#5B0D0D]">
                <td className="py-2">38</td>
                <td className="py-2">S</td>
              </tr>
              <tr className="border-b border-[#5B0D0D]">
                <td className="py-2">40</td>
                <td className="py-2">M</td>
              </tr>
              <tr className="border-b border-[#5B0D0D]">
                <td className="py-2">42</td>
                <td className="py-2">L</td>
              </tr>
              <tr>
                <td className="py-2">44</td>
                <td className="py-2">XL</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
