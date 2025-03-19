import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[300px] flex items-center justify-center text-white bg-gradient-to-t from-gray-700 via-gray-900 to-black shadow-lg overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[80%] h-[80%] bg-gradient-to-r from-teal-400 to-cyan-500 opacity-20 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-b from-teal-500 to-transparent opacity-30 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-t from-cyan-500 to-transparent opacity-30 blur-2xl"></div>
      
      {/* Content */}
      <div className="relative text-center px-6">
        <h1 className="py-2 my-3 text-6xl font-extrabold tracking-wide bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text drop-shadow-lg">
          Sai Architect & Designer
        </h1>
        <p className="text-xl mt-4 text-gray-300 max-w-2xl drop-shadow-md">
          Creating Timeless Architectural Designs with Innovation and Precision
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
