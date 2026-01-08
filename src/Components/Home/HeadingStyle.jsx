import React from "react";
import Marquee from "react-fast-marquee";

export default function HeadingStyle() {
  return (
    <div className="fixed top-0 left-0 w-full z-[60] red-bg text-white py-4 overflow-hidden lora text-xs">
      <Marquee speed={50} gradient={false} pauseOnHover autoFill>
        <span className="mx-8 tracking-wider uppercase">
          Shop our Shakti collection now
        </span>
      </Marquee>
    </div>
  );
}
