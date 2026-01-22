import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

const CheckoutPage = () => {
  return (
    <section className="grid min-h-screen grid-cols-1 lg:grid-cols-2 ">
      {/* LEFT */}
      <div className="cream-bg p-10  px-6 pt-[10rem]  lg:px-32">
        <CheckoutForm />
      </div>

      {/* RIGHT */}
      <div className="bg-[#480000] p-10 px-6 pt-[10rem]  lg:px-32">
        <OrderSummary />
      </div>
    </section>
  );
};

export default CheckoutPage;
