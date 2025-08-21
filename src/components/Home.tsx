import React from "react";

const Home: React.FC = () => {
  return (
    <div
      id="home"
      className="relative font-sans min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-800 to-gray-900 text-white px-4"
    >
      <h1 className="absolute top-6 left-6 font-bold text-[22px] fade-in-up">
        PORTFOLIO.
      </h1>

      <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-in-up fade-delay-1">
        Hi, I’m <span className="text-green-400">Arya Panca Wibowo</span>
      </h1>

      <p className="text-lg md:text-xl max-w-2xl mb-6 fade-in-up fade-delay-2">
        A passionate <span className="text-green-300">Software Engineer</span>{" "}
        and <span className="text-green-300">Machine Learning Enthusiast</span>{" "}
        with experience building interactive web applications, mobile AR
        projects, and AI-powered solutions.
      </p>

      <div className="flex gap-4 fade-in-up fade-delay-3">
        <a
          href="#project"
          className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-medium transition-colors"
        >
          View My Work
        </a>
        <a
          href="#about"
          className="px-6 py-3 border border-green-500 hover:bg-green-500 rounded-lg font-medium transition-colors"
        >
          About Me
        </a>
      </div>
    </div>
  );
};

export default Home;
