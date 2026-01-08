import React, { useState } from "react";
import discover from "../../assets/discover.png";
import { BsArrowUpRightSquare, BsArrowRight } from "react-icons/bs";

const faqs = [
  {
    question: "What is Probet?",
    answer:
      "Probet is an innovative digital platform designed to streamline online betting experiences, offering real-time updates, secure transactions, and user-friendly interfaces.",
  },
  {
    question: "How do I get started with Probet?",
    answer:
      "Getting started with Probet is simple! Just visit our website, create an account, and explore our intuitive dashboard to start placing your bets or tracking analytics.",
  },
  {
    question: "What are the key features of Probet?",
    answer:
      "Probet offers real-time odds tracking, secure wallet integration, bet history analysis, intuitive UI, and responsive customer support.",
  },
  {
    question: "How much does Probet cost?",
    answer:
      "Probet is free to join. We may offer premium features or add-ons in the future, but basic access to the platform is completely free.",
  },
  {
    question: "Who is Probet for?",
    answer:
      "Probet is perfect for sports enthusiasts, casual bettors, and professionals looking for a clean and efficient platform to enhance their betting strategies.",
  },
  {
    question: "Is Probet safe to use?",
    answer:
      "Absolutely. Probet uses industry-standard encryption and follows best practices to ensure your data and transactions are secure.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Second item expanded by default

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div id="faq">
      {/* <div className="flex flex-col items-start justify-start container mx-auto lg:w-[42%] pb-32 leading-[140%] ">
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
      </div> */}
      <div className=" py-16 px-4 md:px-10 lg:px-20 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 dm-sans">
            Frequently Asked{" "}
            <span className="bg-gradient-to-l from-[#FF5C1980] to-[#FF6A00] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            We’ve compiled a list of the most frequently asked questions about
            SmartNotes to help you get the information you need. If you have any
            other questions, feel free to reach out to our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`rounded-xl border border-[#FF6A00] transition-all duration-300 dm-sans ${
                  isActive
                    ? "bg-[#EFECE6] text-[#0B0B0B]"
                    : "bg-transparent text-white"
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-6 py-5 font-bold flex justify-between items-center text-lg dm-sans "
                >
                  {faq.question}
                  <span className="ml-4">
                    {isActive ? (
                      <BsArrowRight className="text-[#FF6A00] text-xl" />
                    ) : (
                      <BsArrowUpRightSquare className="text-[#FF6A00] text-xl" />
                    )}
                  </span>
                </button>
                {isActive && (
                  <div className="px-6 pb-5 text-sm font-normal leading-relaxed dm-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
