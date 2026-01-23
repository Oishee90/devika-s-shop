import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import Banner from '/purple.jpg'
// import heroImage from "../../assets/Mantraa (Devika)/purple-open-gift-box-with-voucher-bonus-surprise-minimal-present-greeting-celebration-promotion-discount-sale-reward-icon-3d-illustration.jpg";
import { FiGift } from "react-icons/fi";
import { GoGift } from "react-icons/go";
import { ImPower } from "react-icons/im";
import { FaRegStar } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";

// Fixed Hero component - properly structured
const Hero = () => {
  return (
<div
  className=" relative backdrop-blur-md bg-green-500 md:h-[100vh] object-bottom h-[80vh] opacity-80"
  style={{
    backgroundImage: `url(${Banner})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    
  }}
>
  <div className="text-white flex justify-center items-center h-full w-full">
    <div className="absolute h-full w-full inset-0 bg-[rgba(68,9,166,0.6)]" />
            <div className="w-full md:w-[80%] flex flex-col z-40 px-4 gap-4 md:gap-6">
          <GoGift size={77} />

          <h3 className="text-2xl md:text-3xl canela font-bold lg:text-[40px] leading-tight">
            Every Maaantra collection is guided by intention
          </h3>

          <p className="text-base md:text-lg lg:text-[20px] inter flex flex-col gap-2 md:gap-3">
            <span className="w-full md:w-[69%]">
              For each collection, we will craft three mantras, quiet reminders
              of discipline, growth, and self-respect. These mantras live on the
              tags of our jackets and waistcoats, which are chosen at random,
              making each piece personal and meaningful.
            </span>
            <span>They are not just words.</span>
            <span>They are values to carry, collect, and share.</span>
          </p>
        </div>
  </div>
</div>

  );
};


const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Wear the words",
      description:
        "Purchase a Maaantra jacket or waistcoat and discover one of three mantras tied to that collection.",
      image:
        "https://images.unsplash.com/photo-1674620213535-9b2a2553ef40?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with actual image
    },
    {
      id: "02",
      title: "Collect with intention",
      description:
        "Each collection has three unique mantras. You can track how many you’ve collected for each collection directly in your profile once you log in.",
      image:
        "https://images.unsplash.com/photo-1768405942773-87e8d4fb782b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with actual image
    },
    {
      id: "03",
      title: "Unlock your reward",
      description:
        "Once you’ve collected all three mantras, you’ll unlock and receive a £50 Amazon voucher, yours to use however you choose.",
      image:
        "https://plus.unsplash.com/premium_photo-1766012368356-69b7ee24081d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with actual image
    },
  ];
  return (
    <section className="bg-[#6b0f12]  py-24">
      <div className="max-w-8xl px-4 md:px-24 mx-auto ">
        {/* Header */}
        <div className="text-center relative mb-10">
          <h2 className="text-[#F9EFD5] canela font-medium text-2xl font-serif">How It Works</h2>
          <div className="w-20 h-[1px] absolute right-1/2 bg-white/60  mt-4" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.id} className="space-y-5 relative">

              {/* Image card */}
              <div className="relative rounded-xl overflow-hidden bg-[#f3f3f3]">
              <div className="absolute inset-0 bg-[rgba(69,69,69,0.5)] z-10" />
                <span className="absolute top-4 left-4 bg-white text-black text-xl lora z-50 w-14 h-14 rounded-full flex items-center justify-center font-medium">
                  {step.id}
                </span>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Text */}
              <div className="text-[#F9EFD5] space-y-2">
                <h3 className="text-[25px] canela font-semibold">{step.title}</h3>
                <p className="text-[15px] inter text-white/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExclusiveBenefits = () => {
const benefits = [
{
title: "Exclusive Gifts",
description:
"Receive special gifts and surprise items with qualifying purchases",
icon: <FiGift size={36} />, // replace with svg if needed
},
{
title: "Early Access",
description:
"Get first on new collections & seasonal sales",
icon: <FaRegStar size={36}/>,
},
{
title: "Special Discounts",
description:
"Unlock exclusive discount on your favorite items",
icon: <ImPower size={36}/>,
},
{
title: "Birthday Rewards",
description:
"Celebrate your special day with a birthday gift from us",
icon: <LuHeart size={36}/>,
},
];

  return (
    <section className="bg-[#6b0f12] px-4 md:px-24 py-14 pb-32">
      <div className="max-w-8xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-white text-[25px] canela font-medium font-serif mb-2">
            Exclusive Benefits
          </h2>
          <p className="text-white/80 inter font-normal text-[20px]">
            Enjoy these amazing perks when you're part of our reward program
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {benefits.map((item, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto w-28 h-28 rounded-xl  flex items-center justify-center text-white text-2xl"
              style={{
                background: 'linear-gradient(134.63deg, #BF4AEB 4.22%, #FFEEC0 119.48%)'
              }}
              >
                {item.icon}
              </div>
              <h3 className="text-[#F9EFD5] canela text-[22px] canela font-semibold">{item.title}</h3>
              <p className="text-[#F9EFD5]  inter text-[16px] font-medium leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
              {/* CTA Section */}
        <div className="flex justify-between items-center">
          {/* Image */}
          <div className="hidden md:flex justify-center">
            <img
              src="/aaa.png" // replace with actual asset
              alt="Shopping"
              className="w-full"
            />
          </div>

          {/* Text */}
          <div className="text-center space-y-6">
            <h3 className="text-[#F9EFD5] canela md:text-[50px] text-[24px] font-serif">
              Ready to Start Earning?
            </h3>
            <p className="text-white/80 inter  text-right text-[20px] max-w-2xl">
              Thousands of happy customers already enjoying exclusive rewards
              and benefits. Start shopping today and get your first reward!
            </p>
          </div>
        </div>
    </section>
  );
};

const Rewards = () => {
  return (
    <div className="min-h-screen  flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="mt-28">
          <Hero />
          <HowItWorks />
          <ExclusiveBenefits />
        </div>
        {/* Add your rewards content here */}
      </main>
      <Footer />
    </div>
  );
};

export default Rewards;
