import React from "react";
import useReveal from "../hooks/useReveal";

const Project: React.FC = () => {
  useReveal();

  return (
    <div
      id="project"
      className="flex font-sans min-h-screen justify-center gap-20 items-center text-left bg-gray-900 text-white"
    >
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <div className="flex text-[38px] w-full font-bold text-left gap-20 items-center justify-center reveal delay-1">
          <div>Recents Project</div>
          <div className="border-b-2 border-[#4caf50] w-[43%]" />
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col gap-2 reveal delay-2">
            <img
              src="web.png"
              alt="web-app"
              className="w-[300px] h-[300px] object-cover rounded-lg"
            />
            <div className="font-bold">WEB APP</div>
            <a className="text-[#66bb6a] w-[200px]" href="#projectSyngenta">
              Syngenta Changeover Communication Platform
            </a>
          </div>

          <div className="flex flex-col gap-2 reveal delay-3">
            <img
              src="mobile.png"
              alt="mobile-app"
              className="w-[300px] h-[300px] object-cover rounded-lg"
            />
            <div className="font-bold">MOBILE APP</div>
            <a className="text-[#66bb6a]" href="#projectARMusnas">
              ARMusnas
            </a>
          </div>

          <div className="flex flex-col gap-2 reveal delay-4">
            <img
              src="ai.jpg"
              alt="machine-learning"
              className="w-[300px] h-[300px] object-cover rounded-lg"
            />
            <div className="font-bold">MACHINE LEARNING</div>
            <a className="text-[#66bb6a]" href="#projectPadiCare">
              PadiCare
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
