import React, { useState } from "react";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import Details from "./_components/Details";
import Payment from "./_components/Payment";
import DeliveryAddress from "./_components/DeliveryAddress";
import MyMantras from "./_components/MyMantras";
import ChangePass from "./_components/ChangePass";
import { 
  FiUser, 
  FiCreditCard, 
  FiMapPin, 
  FiGift, 
  FiLock, 
  FiLogOut 
} from "react-icons/fi";




const menuItems = [
  { label: "My personal information", icon: <FiUser /> },
  { label: "My payment details", icon: <FiCreditCard /> },
  { label: "My delivery address", icon: <FiMapPin /> },
  { label: "My mantras", icon: <FiGift /> },
  { label: "Change password", icon: <FiLock /> },
  { label: "Sign out", icon: <FiLogOut /> },
];


const Profile = () => {
  const [activeMenu, setActiveMenu] = useState("Welcome to your account");

  const renderContent = () => {
    switch (activeMenu) {
      case "My personal information":
        return <Details />;

      case "My payment details":
        return <Payment />;

      case "My delivery address":
        return <DeliveryAddress />;

      case "My mantras":
        return <MyMantras />;

      case "Change password":
        return <ChangePass />;

      case "Sign out":
        return <div>Sign Out Logic</div>;

      default:
        return <div className="text-center flex items-center justify-center h-[70vh]"><p className="text-[#5B0D0D] text-[32px] inter">Welcome to your account</p></div>;
    }
  };

  return (
    <div>
      <Navbar />

      <section className="min-h-screen bg-[#6b0f12] pb-12">
        <div className="max-w-8xl px-44 mx-auto grid grid-cols-1 pt-44 md:grid-cols-[360px_1fr] gap-10">

          {/* LEFT SIDEBAR */}
          <div className="space-y-8">

            {/* USER CARD */}
            <div className="border border-[#f7eed8]">
              <div className="bg-[#6b0f12] h-20" />
              <div className="bg-[#f7eed8] px-6 pb-6 relative">
                <div
                
                className="absolute -top-10 left-6 w-20 h-20 rounded-full shadow-xl bg-[#6b0f12] flex items-center justify-center text-white text-xl border-[5px] border-white ">
                  D
                </div>
                <div className="pt-0 ml-24">
                  <p className="text-2xl text-[#101828]">Hi</p>
                  <h3 className="font-medium text-[#4A5565]">Devika</h3>
                </div>
              </div>
            </div>

            {/* MENU */}
            <div className="border border-[#f7eed8] p-3 divide-y divide-[#f7eed8]">
            {menuItems.map((item, index) => (
  <div
    key={index}
    onClick={() => setActiveMenu(item.label)}
    className={`px-5 inter text-[18px] py-4 mt-4 text-sm cursor-pointer transition flex items-center gap-3
      ${
        activeMenu === item.label
          ? "bg-[#f7eed8] text-[#6b0f12]"
          : "bg-[#d9cfbd] text-[#6b0f12]"
      }`}
  >
    {item.icon}
    <span>{item.label}</span>
  </div>
))}

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-[#f7eed8] flex items-center justify-center">
            <div className="w-full  h-[78vh] overflow-y-auto r ">
              {renderContent()}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
