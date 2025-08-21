import React from "react";
import useReveal from "../hooks/useReveal";

const Syngenta: React.FC = () => {
  useReveal();

  return (
    <div
      id="projectSyngenta"
      className="relative font-sans min-h-screen flex items-center text-center bg-gray-900 text-white"
    >
      <img
        src="syngenta.png"
        alt="syngenta"
        className="absolute bottom-0 left-0 w-[55%] reveal delay-1"
      />

      <div className="ml-auto w-[40%] flex flex-col gap-4 pr-10">
        <div className="flex text-[38px] font-bold text-left justify-between items-center reveal delay-2">
          <div>Front-End Web</div>
          <div className="border-b-2 border-[#4caf50] w-[100%]" />
        </div>

        <div className="text-[23px] text-left text-[#66bb6a] reveal delay-3">
          Syngenta changeover communication platform
        </div>

        <div className="text-[15px] text-justify reveal delay-4">
          A web-based platform developed to facilitate communication and
          coordination of changeover processes in Syngenta production
          environment. The project was built using React.js with Recoil for
          state management, as well as integration with a secure REST API
          through Bearer token authentication.
        </div>

        <div className="flex gap-4 text-center reveal delay-5">
          <a
            className="bg-[#4caf50] hover:bg-green-600 p-2 px-7"
            href="#project"
          >
            Projects
          </a>
          <a
            className="border border-[#4caf50] hover:bg-[#4caf50] p-2 px-7"
            href="#projectARMusnas"
          >
            Next Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Syngenta;
