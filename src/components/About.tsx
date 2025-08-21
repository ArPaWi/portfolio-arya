import React from "react";
import useReveal from "../hooks/useReveal";

const About: React.FC = () => {
  useReveal();
  return (
    <div
      id="about"
      className="flex font-sans min-h-screen justify-center gap-20 ps-20 items-center text-center bg-gray-900 text-white"
    >
      <div className="flex justify-center reveal delay-1">
        <img src="arya.png" alt="arya" className="w-105" />
      </div>

      <div className="w-[50%] flex flex-col gap-4">
        <div className="flex text-[38px] font-bold text-left justify-between items-center reveal delay-2">
          <div>About Me</div>
          <div className="border-b-2 border-[#4caf50] w-[50%]" />
        </div>

        <div className="text-[15px] text-justify reveal delay-3">
          I am a fresh graduate in Informatics Engineering from Tanri Abeng
          University with a strong passion for learning new things. During my
          undergraduate studies, I actively developed my technical skills
          through various experiences, including an internship as a Frontend Web
          Developer at PT Diatera Cipta Teknologi, participating in the
          independent study program at Bangkit Academy with a focus on Machine
          Learning, and co-founding a digital startup called Tetrabit with my
          friends. Through these experiences, I have become accustomed to
          solving problems analytically, learning independently at a rapid pace,
          and working adaptively in various situations, whether as part of a
          team or individually.
        </div>

        <div className="flex gap-4 text-center reveal delay-4">
          <a
            className="bg-[#4caf50] hover:bg-green-600 p-2 px-7"
            href="#project"
          >
            Projects
          </a>
          <a
            className="border border-[#4caf50] hover:bg-[#4caf50] p-2 px-7"
            href="CV_ARYA PANCA WIBOWO_ENG.pdf"
            download
          >
            Download Cv
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
