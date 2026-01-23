import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";

const ReusableLayout = ({ title, children }) => {
  return (
<div>
        <Navbar />
        <div className="min-h-screen pt-28 bg-[#F9EFD5] px-4 py-10">
      <div className="w-full mx-20   bg-[#f8f1dc] p-8">
        <h1 className="mb-6 text-[28px] canela font-semibold">
          {title}
        </h1>

        <div className="text-[20px] inter leading-[1.8] text-[#333]">
          {children}
        </div>
      </div>
    </div>
      <Footer />
</div>
  );
};

export default ReusableLayout;
