import { useState } from "react";
import { cartItems } from "../data/products";

const OrderSummary = () => {
  const [cardsItems, setCardsItems] = useState(cartItems);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);
  const handleBuyNow = () => {
    setIsProcessing(true);
    setIsSuccess(false);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000); // 2 seconds processing time
  };
  const handleApply = () => {
    setIsApplying(true);
    setApplySuccess(false);

    setTimeout(() => {
      setIsApplying(false);
      setApplySuccess(true);
    }, 2000);
  };
  return (
    <div className="text-[#FFFFFF] canela">
      {/* Products */}
      <div className="mb-6 space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-start justify-between">
            <div className="flex gap-4">
              <img src={item.image} className="object-cover h-20 w-14" />
              <div>
                <p className="text-lg font-medium">{item.title}</p>
                <p className="text-base inter">
                  {item.size} · {item.color} · Qty:{item.qty}
                </p>
              </div>
            </div>
            <p className="text-base inter">${item.price}</p>
          </div>
        ))}
      </div>

      {/* Coupon */}
      <div className="flex gap-2 mb-6">
        <input
          className="w-full bg-transparent border border-[#F9EFD5S] px-4 py-2 text-bae inter placeholder:text-[#F9EFD5] md:w-1/2 text-lg"
          placeholder="Discount or gift code"
        />
        <button
          onClick={handleApply}
          className="px-6 text-lg font-medium cream-bg red-color md:w-1/2 inter"
        >
          {isApplying ? "Processing..." : applySuccess ? "Applied!" : "Apply"}
        </button>
      </div>

      {/* Price */}
      <div className="space-y-2 text-lg cream-color inter ">
        <div className="flex justify-between inter">
          <span>Subtotal · {cartItems.length} items</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between text-lg font-semibold cream-color inter">
          <span>Total</span>
          <span>${subtotal}</span>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleBuyNow}
        className="w-full py-4 mt-8 font-semibold cream-bg red-color"
      >
        {isProcessing ? "Processing..." : isSuccess ? "Success!" : "BUY NOW"}
      </button>

      <p className="mt-3 text-xl text-left inter cream-color">
        All transactions are secure and encrypted
      </p>
    </div>
  );
};

export default OrderSummary;
