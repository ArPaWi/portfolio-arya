import React from "react";
import useReveal from "../hooks/useReveal";

const PadiCare: React.FC = () => {
  useReveal();

  return (
    <div
      id="projectPadiCare"
      className="relative font-sans min-h-screen flex items-center text-center bg-gray-900 text-white"
    >
      <img
        src="padicare.png"
        alt="padicare"
        className="absolute bottom-0 left-0 w-[55%] reveal delay-1"
      />

      <div className="ml-auto w-[40%] flex flex-col gap-4 pr-10">
        <div className="flex text-[38px] font-bold text-left justify-between items-center reveal delay-2">
          <div>Machine Learning</div>
          <div className="border-b-2 border-[#4caf50] w-[100%]" />
        </div>
        <div className="text-[23px] text-left text-[#66bb6a] reveal delay-3">
          PadiCare
        </div>
        <div className="text-[15px] text-justify reveal delay-4">
          An artificial intelligence-based mobile application that helps farmers
          quickly and accurately detect diseases in rice plants. This project
          was the team's capstone project during the Bangkit Academy program. I
          was responsible for developing a machine learning model for
          classifying rice plant diseases using a convolutional neural network
          (CNN) approach.
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
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default PadiCare;
