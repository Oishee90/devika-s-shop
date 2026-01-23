import React from "react";

const OrderModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm inter"
      onClick={onClose}
    >
      <div
        className="
          bg-white
          rounded-xl
          shadow-2xl
          max-w-3xl w-[92%]
          relative
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-400 hover:text-black"
        >
          ×
        </button>

        {/* CONTENT FROM PARENT */}
        {children}
      </div>
    </div>
  );
};

export default OrderModal;
