import { useState } from "react";
import { cartItems } from "../data/products";


const OrderSummary = () => {
    const [cardsItems, setCardsItems] = useState(cartItems);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="text-[#F6EED7]">
      {/* Products */}
      <div className="mb-6 space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between"
          >
            <div className="flex gap-4">
              <img
                src={item.image}
                className="object-cover h-20 w-14"
              />
              <div>
                <p className="text-sm font-medium">
                  {item.title}
                </p>
                <p className="text-xs">
                  {item.size} · {item.color} · Qty:{item.qty}
                </p>
              </div>
            </div>
            <p className="text-sm">${item.price}</p>
          </div>
        ))}
      </div>

      {/* Coupon */}
      <div className="flex gap-2 mb-6">
        <input
          className="w-full bg-transparent border border-[#F6EED7] px-4 py-2 text-sm"
          placeholder="Discount or gift code"
        />
        <button className="bg-[#F6EED7] text-[#6B0F0F] px-6">
          Apply
        </button>
      </div>

      {/* Price */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal · {cartItems.length} items</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between text-base font-semibold">
          <span>Total</span>
          <span>${subtotal}</span>
        </div>
      </div>

      {/* Button */}
      <button className="w-full bg-[#F6EED7] text-[#6B0F0F] py-4 mt-8 font-semibold">
        BUY NOW
      </button>

      <p className="mt-3 text-xs text-center">
        All transactions are secure and encrypted
      </p>
    </div>
  );
};

export default OrderSummary;
