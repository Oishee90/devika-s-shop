/* eslint-disable react/prop-types */
import { FiX, FiTrash2, FiMinus, FiPlus } from "react-icons/fi";
import { useState, useEffect } from "react";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";
const CartModal = ({ open, onClose, cartItems }) => {
  // 🔹 Local state for cart
  const [items, setItems] = useState([]);

  // 🔹 Sync props → local state
  useEffect(() => {
    setItems(cartItems || []);
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

  // 🔹 Subtotal
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  // 🔹 SAFE early return (after hooks)
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="fixed top-[130px] right-[0.5rem] sm:right-6 z-50 w-[310px] sm:w-[460px] cream-bg red-color shadow-xl rounded-lg  p-8 animate-scaleIn">
        {/* Header */}
        <div className="flex flex-col justify-start mb-8">
          <div className="flex items-center justify-between ">
            <h3 className="flex items-center gap-6 text-lg sm:text-2xl canela">
              Shopping Cart{" "}
              <span className="text-sm text-[#8B8787]">
                ({items.length} items)
              </span>
            </h3>

            <button onClick={onClose}>
              <FiX size={20} />
            </button>
          </div>
          <div className="border-b border-[#5B0D0D] w-1/3 p-1 "></div>
        </div>

        {/* Items */}
        <div className="max-h-[320px] overflow-y-auto mt-4 space-y-9 canela">
          {items.length === 0 ? (
            <p className="text-base text-center opacity-70">
              Your cart is empty
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex sm:flex-row flex-col items-start gap-4 pb-7 border-b border-b-[#5B0D0D]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-16 h-22"
                />

                <div className="flex-1">
                  <h4 className="mb-3 text-lg">{item.name}</h4>
                  <p className="text-sm inter">
                    {item.size} · {item.color}
                  </p>

                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex  gap-3 border border-[#5B0D0D] inter">
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className="px-1 border-r border-[#5B0D0D] "
                      >
                        <FiMinus />
                      </button>

                      <button className="border-r border-[#5B0D0D] pr-2">
                        {item.qty}
                      </button>

                      <button
                        onClick={() => handleIncrease(item.id)}
                        className="pr-1"
                      >
                        <FiPlus />
                      </button>
                    </div>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="ml-3 red-color"
                    >
                      <FiTrash2 className="text-xl" />
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
        <div className="pt-4 ">
          <div className="flex justify-between ">
            <span className="text-xl">Sub Total</span>
            <span className="text-xl">${subtotal.toFixed(2)}</span>
          </div>

          <p className="mt-2 text-base text-[#000000]  inter">
            Tax included and shipping calculated at checkout
          </p>

          <Link to="/checkout">
            {" "}
            <button className="w-full mt-4 bg-[#571010] text-white py-3 rounded-md  inter flex items-center gap-3 justify-center">
              <MdLockOutline className="text-xl" /> Check Out
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartModal;
