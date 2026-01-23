import React, { useState } from "react";
import Swal from "sweetalert2";

const Payment = () => {
  const [showAddCard, setShowAddCard] = useState(false);

  const handleSaveSuccess = () => {
  Swal.fire({
    title: "Saved Successfully!",
    text: "Your changes have been saved successfully.",
    icon: "success",
    confirmButtonColor: "#5B0D0D",
    confirmButtonText: "OK",
    background: "#f7eed8",
    color: "#5B0D0D",
  });
};


  return (
    <div className="w-full h-full bg-[#f7eed8] p-4 md:p-12">
      <div className="w-full">
        {!showAddCard ? (
          <>
            {/* ADD PAYMENT METHOD */}
            <h2 className="text-3xl canela font-serif text-[#6b0f12] mb-4">
              Add payment method
            </h2>
            <p className="text-[18px] canela text-[#6b0f12] mb-10">
              You currently have no saved payment methods. Get started by adding one.
            </p>

            <button
              onClick={() => setShowAddCard(true)}
              className="w-full bg-[#6b0f12] canela font-normal  text-white py-3 text-sm flex items-center justify-center gap-2"
            >
              CREDIT / DEBIT CARD
            </button>
          </>
        ) : (
          <>
            {/* ADD CARD FORM */}
            <h2 className="text-3xl canela font-serif text-[#6b0f12] mb-4">
              Add Card
            </h2>
            <p className="text-[18px] lora text-[#6b0f12] mb-8">
              Now please enter your card details exactly as they are printed.
            </p>

            <form className="space-y-6">
              {/* Card Number */}
              <div className="space-y-2">
                <label className="text-[16px] lora text-[#6b0f12]">Card Number</label>
                <input
                  type="text"
                  placeholder="Enter card number"
                  className="w-full placeholder:text-[#F9EFD5] bg-[#6b0f12] text-white px-4 py-3 text-sm outline-none"
                />
              </div>

              {/* Expiry */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[16px] lora text-[#6b0f12]">Expiry Date</label>
                  <select className="w-full bg-[#6b0f12] text-white px-4 py-3 text-sm outline-none">
                    <option>Month</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[16px] lora text-[#6b0f12]">&nbsp;</label>
                  <select className="w-full bg-[#6b0f12] placeholder:text-[#F9EFD5] text-white px-4 py-3 text-sm outline-none">
                    <option className="">Year</option>
                    <option>Month</option>
                  </select>
                </div>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <label className="text-[16px] lora text-[#6b0f12]">Name on card</label>
                <input
                  type="text"
                  placeholder="Enter card name"
                  className="w-full bg-[#6b0f12] placeholder:text-[#F9EFD5] text-white px-4 py-3 text-sm outline-none"
                />
              </div>

              <p className="text-[16px] lora text-[#6b0f12]">
                This will be your default payment method
              </p>

              {/* Save */}
              <button
              type="button"
               onClick={()=> handleSaveSuccess()}
                className="w-full border inter text-[16px] border-[#6b0f12] text-[#6b0f12] py-3 text-sm hover:bg-[#6b0f12] hover:text-white transition"
              >
                SAVE CARD
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Payment;
