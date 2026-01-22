import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function ProductDetailsAccordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-h-[200px] overflow-y-auto  hide-scrollbar  bg-[#D8CBB8] px-4 w-full">
      {data.map((item, index) => (
        <div key={index} className="py-3 border-b border-b-[#F9EFD5]">
          <button
            onClick={() => toggle(index)}
            className="flex items-center justify-between w-full text-left"
          >
            <h3 className="text-base font-semibold inter">{item.question}</h3>
            {activeIndex === index ? (
              <FiMinus className="text-xl" />
            ) : (
              <FiPlus className="text-xl" />
            )}
          </button>

          {activeIndex === index && (
            <p className="mt-2 text-sm leading-relaxed inter">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
