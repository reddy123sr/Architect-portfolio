import React from 'react'

const About = () => {
  return (
    <div>About
      {/* Certifications Header */}
      <div className="text-center w-full mt-12 mb-8 flex flex-wrap relative">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-500 blur-lg"></div>
          <div className="relative px-6 py-2 text-white font-bold text-2xl bg-black rounded-full shadow-xl uppercase tracking-widest font-sans">
            Certifications
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto relative">
        <div className="text-center">
          <img src="src/images/cerificate.png" alt="Certification 1" className="w-full h-auto rounded-lg shadow-lg" />
          <p className="mt-2 text-lg font-sans font-semibold">AutoCAD Certification</p>
        </div>
      </div>
    </div>
  )
}

export default About;