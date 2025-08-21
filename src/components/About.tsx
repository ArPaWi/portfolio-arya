import React from "react";

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I’m <span className="text-green-400">Arya Panca Wibowo</span>
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-6">
        A passionate <span className="text-green-300">Frontend Developer</span>{" "}
        and <span className="text-green-300">Machine Learning Enthusiast</span>{" "}
        with experience building interactive web applications, mobile AR
        projects, and AI-powered solutions.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-medium transition-colors"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-green-500 hover:bg-green-500 rounded-lg font-medium transition-colors"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default About;
