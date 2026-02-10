import React from "react";
import { AllProjects } from "./Navbar";
import { Link } from "react-router-dom";

const projects=AllProjects
const Frontimages=[
"Images/architect/Arch1.jpg",
"Images/architect/Arch2.jpg",
"Images/architect/Arch3.jpg",
"Images/architect/Arch4.jpg",
"Images/architect/Arch5.jpg",
"Images/architect/Arch6.jpg",
"Images/architect/Arch7.jpg",
"Images/architect/Arch8.jpg",
"Images/architect/Arch9.jpg",

]

const BioSection = () => {
  return (
    <section className="w-full py-12 px-6 bg-gradient-to-t from-gray-700 via-gray-900 to-black text-white flex flex-col items-center shadow-lg overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[80%] h-[80%] bg-gradient-to-r from-teal-400 to-cyan-500 opacity-20 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-b from-teal-500 to-transparent opacity-30 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-t from-cyan-500 to-transparent opacity-30 blur-2xl"></div>
      
      {/* Introduction Header */}
      <div className="text-center w-full mb-8 flex flex-wrap relative">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-500 blur-lg"></div>
          <div className="relative px-6 py-2 text-white font-bold text-2xl bg-black rounded-full shadow-xl uppercase tracking-widest font-sans">
            Introduction
          </div>
        </div>
      </div>

      {/* Introduction Content with Profile Photo */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center text-left gap-6 relative">
        {/* Profile Image - Placed on Left */}
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-teal-400">
          <img src="Images/profile2.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Introduction Text */}
        <div className="flex-1">
          <p className="text-lg leading-relaxed font-sans text-justify px-1">
            I am <b>Kummitha Sai Kumar Reddy. </b>I have completed my BTech Civil Engineering in 2024 with 7.27 CGPA, where I developed a strong foundation in architecture. Throughout my academic journey, I focused on enhancing my technical skills, particularly in Architecture designing software. After Completing my BTech. I have trained in AutoCAD 2D/3D Modelling, SketchUp + V-Ray, Enscape, & Revit Architecture & Revit Structure, which have significantly expanded my knowledge in architectural Planning and interior designing. My passion for design drives me to continually improve my skills and stay updated with the latest industry trends, and I am eager to apply my expertise in creating functional and aesthetically pleasing spaces.</p>
        </div>
      </div>

      {/* Skills Header */}
      <div className="text-center w-full mb-8 flex flex-wrap relative mt-10">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-500 blur-lg"></div>
          <div className="relative px-6 py-2 text-white font-bold text-2xl bg-black rounded-full shadow-xl uppercase tracking-widest font-sans">
            Skills
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg w-full font-sans text-center relative">
        <div><b>AutoCAD 2D & 3D Modelling</b></div>
        <div><b>SketchUp & V-Ray</b></div>
        <div><b>Enscape</b></div>
        <div><b>Revit Architecture</b></div>
        <div><b>Revit Structure</b></div>
        <div><b>Interior Designing</b></div>
      </div>
 {/* 🔥 Projects Section 🔥 */}
 <div className="text-center w-full mt-12 mb-8 flex flex-wrap relative">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-500 blur-lg"></div>
          <div className="relative px-6 py-2 text-white font-bold text-2xl bg-black rounded-full shadow-xl uppercase tracking-widest font-sans">
            Projects
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project) => (
    <div
      key={project.id}
      className="relative group w-full h-60 bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      {/* Background Image */}
      <img
        src={project.bg_image} // Ensure each project object has an 'image' property
        alt={project.title}
        className="w-full h-full object-cover opacity-30 group-hover:opacity-90 transition duration-300"
      />

      {/* Project Title Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 group-hover:bg-opacity-70 transition duration-300">
        <h2 className="text-white text-xl font-bold text-center">
          {project.title}
        </h2>
        <Link
          to={`/projects/${project.id}`}
          className="mt-2 text-teal-300 hover:text-teal-400 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  ))}
</div>

      {/* Architecture Models Header */}
      <div className="text-center w-full mt-12 mb-8 flex flex-wrap relative">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-500 blur-lg"></div>
          <div className="relative px-6 py-2 text-white font-bold text-2xl bg-black rounded-full shadow-xl uppercase tracking-widest font-sans">
            Architecture & Interior Designs
          </div>
        </div>
      </div>
      <div className="mx-auto p-6 text-white bg-gray-800">
      {/* <h1 className="text-3xl font-bold text-teal-400 mb-6">Interior Designs</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Frontimages.map((image, index) => (
          <div key={index} className="p-4 shadow-lg">
            <img
              src={image}
              alt={`Architectural Design ${index + 1}`}
              className="w-full h-80 object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>

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
          <img src="Images/cerificate.png" alt="Certification 1" className="w-full h-auto rounded-lg shadow-lg" />
          <p className="mt-2 text-lg font-sans font-semibold">AutoCAD Certification</p>
        </div>
        
<p className="text-lg text-gray-300 max-w-2xl ">
  If you're looking for innovative architectural designs, we are here to bring your vision to life.  
  Visit our <Link to="/contact" className="text-teal-400 hover:underline">Contact Us</Link> page and let's discuss your dream project!
</p>
      </div>
    {/* Contact Page */}
    <img className="h-auto rounded-lg shadow-lg my-3 sm:w-full md:w-3/4" src="Images/Visiting_Details.jpeg"
    alt="image"/>
  <div>
  
    
  </div>
    </section>
  );
};

export default BioSection;
