/* eslint-disable react/prop-types */
import { FiX, FiTrash2, FiMinus, FiPlus } from "react-icons/fi";
import { useState, useEffect } from "react";

const CartModal = ({ open, onClose, cartItems }) => {
  if (!open) return null;

  // 🔹 Local state for cart
  const [items, setItems] = useState([]);

  // 🔹 Sync props cartItems to local state
  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);

  // 🔹 Increase quantity
  const handleIncrease = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  // 🔹 Decrease quantity (min 1)
  const handleDecrease = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item,
      ),
    );
  };

  // 🔹 Remove item
  const handleRemove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 🔹 Subtotal calculation
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="fixed top-[130px] right-6 z-50 w-[360px] cream-bg red-color shadow-xl rounded-lg p-5">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b">
          <h3 className="text-lg font-semibold">
            Shopping Cart{" "}
            <span className="text-sm">({items.length} items)</span>
          </h3>
          <button onClick={onClose}>
            <FiX size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="max-h-[320px] overflow-y-auto mt-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-sm text-center opacity-70">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 pb-4 border-b">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-16 h-20"
                />

                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm">
                    {item.size} · {item.color}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="px-1 border"
                    >
                      <FiMinus />
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="px-1 border"
                    >
                      <FiPlus />
                    </button>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="ml-3 text-red-600"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>

                <p className="font-medium">
                  ${(item.price * item.qty).toFixed(2)}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 mt-4 border-t">
          <div className="flex justify-between font-semibold">
            <span>Sub Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <p className="mt-1 text-xs">
            Tax included and shipping calculated at checkout
          </p>

          <button className="w-full mt-4 bg-[#571010] text-white py-3 rounded-md">
            Check Out
          </button>
        </div>
      </div>
    </>
  );
};

export default CartModal;
