import React from "react";
import useReveal from "../hooks/useReveal";

const Close: React.FC = () => {
  useReveal();

  return (
    <div
      id="close"
      className="relative font-sans min-h-screen flex items-center text-center bg-gray-900 text-white"
    >
      <img src="end.png" alt="end" className="w-113 reveal delay-1" />

      <div className="ml-auto w-[60%] flex flex-col gap-4 pr-10">
        <div className="flex text-[85px] h-[70px] text-left justify-between items-center reveal delay-2">
          <div>THANK YOU</div>
          <div className="border-b-2 border-[#4caf50] w-[35%]" />
        </div>
        <div className="text-[15px] text-justify w-[60%] reveal delay-3">
          I’m always open to new opportunities, collaborations, and challenges.
          Let’s create something great together!
        </div>
        <div className="flex gap-4 text-center reveal delay-4">
          <a
            className="bg-[#4caf50] hover:bg-green-600 p-1 px-15"
            href="#contact"
          >
            Contact Me!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Close;
