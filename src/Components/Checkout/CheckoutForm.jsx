const CheckoutForm = () => {
  return (
    <div className="inter">
      <h2 className="mb-1 text-2xl font-semibold red-color inter ">Contact</h2>
      <p className="mb-6 text-base red-color canela">
        This is needed to ensure you receive order confirmation and delivery
        updates along the way.
      </p>

      {/* Contact Fields */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          className="input placeholder:text-[#5B0D0D] text-base lg:text-lg font-medium"
          placeholder="First Name"
        />
        <input
          className="input placeholder:text-[#5B0D0D]  text-base font-medium lg:text-lg"
          placeholder="Last Name"
        />
      </div>

      <input
        className="mb-4 input placeholder:text-[#5B0D0D] text-base font-medium lg:text-lg"
        placeholder="Email"
      />
      <input
        className=" input placeholder:text-[#5B0D0D] text-base font-medium lg:text-lg"
        placeholder="Phone number"
      />
      <p className="mt-2 mb-8 text-sm font-medium text-right cursor-pointer red-color">
        Want to Login?
      </p>
      <h2 className="mb-4 text-lg font-bold red-color">Delivery Address</h2>

      <input
        className="mb-4 input placeholder:text-[#5B0D0D] text-base font-medium lg:text-lg"
        placeholder="County (optional)"
      />
      <input
        className="mb-4 input placeholder:text-[#5B0D0D] text-base font-medium lg:text-lg"
        placeholder="Start typing the first line of your address "
      />
      <input
        className="mb-4 input placeholder:text-[#5B0D0D] text-base font-medium lg:text-lg"
        placeholder="Address line 1"
      />
      <input
        className="mb-4 input placeholder:text-[#5B0D0D] text-base font-medium lg:text-lg"
        placeholder="Address line 2 (Optional)"
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          className="input placeholder:text-[#5B0D0D] text-base font-medium lg:text-lg"
          placeholder="Town/City"
        />
        <input
          className="input placeholder:text-[#5B0D0D] text-base font-medium lg:text-lg"
          placeholder="Postcode"
        />
      </div>

      <p className="mt-2 text-sm font-semibold underline cursor-pointer red-color">
        Enter manually
      </p>
    </div>
  );
};

export default CheckoutForm;
