import React, { useState } from "react";
import teamplan from "../../assets/team-plan.png";
import individual from "../../assets/individual-2.png";
import enterprise from "../../assets/enterprise.png";
import discover from "../../assets/discover.png";
import { FaCheck } from "react-icons/fa";
import { CgArrowTopRightR } from "react-icons/cg";
const plans = [
  {
    name: "Individual Plan",
    image: individual,
    price: "$9.99",
    description:
      "Real-time collaboration, AI-powered organization, Customizable templates, 5GB cloud storage, Basic integrations",
    features: [
      "Real-time collaboration",
      "AI-powered organization",
      "Customizable templates",
      "5GB cloud storage",
      "Basic integrations",
    ],
    button: "Start Free Trial",
    custom: false,
    icon: "\u2B50",
  },
  {
    name: "Team Plan",
    price: "$19.99",
    image: teamplan,
    description:
      "Everything in the Individual Plan + Unlimited cloud storage, Advanced integrations, Team management and permissions, Shared templates and note libraries",
    features: [
      "Everything in the Individual Plan",
      "Unlimited cloud storage",
      "Advanced integrations",
      "Team management and permissions",
      "Shared templates and note libraries",
    ],
    button: "Start Free Trial",
    custom: false,
    icon: "\u2B50",
  },
  {
    name: "Enterprise Plan",
    image: enterprise,
    price: "Custom",
    description:
      "Everything in the Team Plan + Dedicated account manager, Enterprise-grade security, Customized onboarding, Advanced analytics",
    features: [
      "Everything in the Team Plan",
      "Dedicated account manager",
      "Enterprise-grade security",
      "Customized onboarding",
      "Advanced analytics",
    ],
    button: "Contact support",
    custom: true,
    icon: "\uD83D\uDCD1",
  },
];
const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <div className=" p-4">
      <div className="flex flex-col items-start justify-start container mx-auto lg:w-[42%] pb-32 leading-[140%] ">
        <img src={discover} alt="" />
        <h1 className="dm-sans text-white text-3xl font-extrabold mt-4 text-center">
          The real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.
        </h1>
        <div className="flex items-center justify-center gap-5 mt-6 text-center w-1/2 container mx-auto">
          <p className="text-base dm-sans text-[#EFECE6]  font-normal ">
            Sarah Johnson
          </p>
          <p className="text-base dm-sans text-[#737373]  font-normal ">
            {" "}
            TechSavvy Solutions
          </p>
        </div>
      </div>
      <div className=" text-white  py-16  flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-2">
          <span className="text-orange-500">Pricing</span> & Plans
        </h2>
        <p className="text-gray-400 text-center max-w-xl mb-8">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>

        <div className="flex items-center gap-4 mb-10">
          <span
            className={
              !isYearly ? "text-orange-500 font-semibold" : "text-gray-400"
            }
          >
            Monthly
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-orange-500 after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
          </label>
          <span
            className={
              isYearly ? "text-orange-500 font-semibold" : "text-gray-400"
            }
          >
            Yearly
          </span>
          {isYearly && (
            <span className="text-sm text-orange-500">Save 25%</span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`border rounded-xl p-6 flex flex-col justify-between ${
                idx === 1
                  ? "bg-[#0d0d0d] border-orange-500"
                  : "bg-white text-black"
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-3 ">
                  <img src={plan.image} alt="" />
                  <p className="text-base font-semibold text-orange-500 mb-1 flex items-center gap-1 dm-sans">
                    {plan.name}
                  </p>
                </div>

                <h3 className="text-5xl font-bold dm-sans">
                  {plan.price}
                  {!plan.custom && (
                    <span className="text-base font-medium text-gray-500">
                      {" "}
                      / month
                    </span>
                  )}
                </h3>
                <ul className="mt-6 space-y-2 text-sbase dm-sans">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-orange-500">
                        <FaCheck />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <button
                  className={`w-full py-4 rounded-lg font-semibold  text-lg flex items-center justify-center gap-2 border transition duration-200 ${
                    idx === 1
                      ? "bg-orange-500 border-[#FF6A00] text-white hover:bg-orange-600"
                      : "border-[#FF6A00]  hover:bg-orange-100 bg-[#EFECE6] text-[#080808] "
                  }`}
                >
                  {plan.button}{" "}
                  <CgArrowTopRightR
                    className={`font-bold ${
                      idx === 1
                        ? " text-white hover:bg-orange-600"
                        : "border-[#FF6A00]  text-[#FF6A00]  hover:bg-orange-100 bg-[#EFECE6]  dm-sans "
                    }`}
                  />
                </button>
                {!plan.custom && (
                  <p className="text-xs text-center text-[#737373] mt-2  dm-sans">
                    No credit card required
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
