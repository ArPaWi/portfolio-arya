import React from "react";
import useReveal from "../hooks/useReveal";

const ARMusnas: React.FC = () => {
  useReveal();

  return (
    <div
      id="projectARMusnas"
      className="relative font-sans min-h-screen flex items-center text-center bg-gray-900 text-white"
    >
      <img
        src="armusnas.png"
        alt="armusnas"
        className="absolute bottom-0 left-0 w-[55%] reveal delay-1"
      />

      <div className="ml-auto w-[40%] flex flex-col gap-4 pr-10">
        <div className="flex text-[38px] font-bold text-left justify-between items-center reveal delay-2">
          <div>Mobile Developer</div>
          <div className="border-b-2 border-[#4caf50] w-[100%]" />
        </div>

        <div className="text-[23px] text-left text-[#66bb6a] reveal delay-3">
          ARMusnas
        </div>

        <div className="text-[15px] text-justify reveal delay-4">
          A mobile application based on Augmented Reality designed to enhance
          the national history education experience through visual interaction.
          This application was built using React Native with Expo and ViroReact,
          and is integrated with Firebase for historical video content retrieval
          and interactive quizzes.
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
            href="#projectPadiCare"
          >
            Next Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ARMusnas;
