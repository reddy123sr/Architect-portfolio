import React, { useState } from "react";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export const AllProjects=[
  {
    id:1,
    title:"AutoCAD 2D Floor plans",
    bg_image:"https://tse4.mm.bing.net/th?id=OIP.PgpYuV1WXRoeoeltRrsvqwHaEK&pid=Api&P=0&h=220",
    description:"In AutoCAD 2D Plan, a floor plan with an outer wall thickness of “9 inches” and an inner wall thickness of “4 1/2 inches” can be created using the “LINE” or “POLYLINE” command. The “OFFSET” command helps maintain consistent wall thickness. Doors and windows can be added using predefined blocks or by drawing manually with “RECTANGLE and ARC” tools. Proper layering ensures clarity, with walls, furniture, and dimensions on separate layers for easy editing.",
    images: [
      "/images/autocad_floor1.png",
      "/images/autocad_floor2.png",
      "/images/autocad_floor3.png"
    ]
  },
  {
    id:2,
    title:"AutoCAD Front Elevation",
    bg_image:"https://tse2.mm.bing.net/th?id=OIP.ysenncAWfVbcvOD5nAhN3wHaEK&pid=Api&P=0&h=220",
    description:"A front elevation in AutoCAD is a 2D representation of the front view of a building or object, showing details such as doors, windows, materials, and architectural elements. It is created using precise linework, layers, and annotations to provide a clear and accurate depiction of the structure's appearance. AutoCAD tools like Line, Polyline, Hatch, and Dimension help in drafting front elevations efficiently. These drawings are essential for architectural plans, construction, and visualization purposes.",
    images: [
      "/images/autocad_elevation1.jpg",
      "/images/autocad_elevation2.jpg",
    ]
  },
  {
    id:3,
    title:"Apartment Floor Plan",
    bg_image:"https://tse2.mm.bing.net/th?id=OIP.-CBXdyxZCZcdRp9w-v_U_gHaEK&pid=Api&P=0&h=220",
    description:"An apartment floor plan is a 2D layout that illustrates the arrangement of rooms, walls, doors, windows, and furniture within an apartment unit. It includes key details like room dimensions, circulation paths, and functional spaces such as bedrooms, living areas, kitchens, and bathrooms. AutoCAD and other design software are commonly used to create precise and scalable apartment floor plans, ensuring efficient space utilization and design clarity for architects, builders, and clients.",
    images: [
      "/images/apartment_plan1.png",
      "/images/apartment_plan2.png",
    ]
  },
  {
    id:4,
    title:"Revit Architecture",
    bg_image:"https://tse2.mm.bing.net/th?id=OIP.B-XzfIrFGa93mLmFFjD1PAHaEK&pid=Api&P=0&h=220",
    description:"Revit Architecture is a powerful BIM (Building Information Modeling) software widely used in exterior design for creating precise and detailed building facades. It allows designers to generate realistic 3D models, apply materials, and analyze sunlight and shading for energy efficiency. With tools like parametric components, curtain walls, and rendering capabilities, Revit enables architects to visualize and refine exterior aesthetics while ensuring structural accuracy. Its collaboration features also allow teams to work seamlessly on projects, improving design coordination and efficiency.",
    images: [
      "/images/revit_architecture1.png",
      "/images/revit_architecture2.png",
      "/images/revit_architecture3.png"
    ]
  },
  {
    id:5,
    title:"SketchUP + Enscape + V Ray",
    bg_image:"https://tse2.mm.bing.net/th?id=OIP.IBXREsj0UKVhtVvEjxds6QHaFP&pid=Api&P=0&h=220",
    description:"This 30' x 50' modern 2BHK house design features a sleek and stylish façade with a combination of textures, including stone cladding, decorative panelling, and contemporary railing details. The ground floor consists of a spacious living room, two well-ventilated bedrooms, a modern kitchen, and attached bathrooms, ensuring a functional layout. The first floor incorporates an open terrace with a pergola, adding an aesthetic touch and enhancing natural light. The entrance gate and landscaping complement the design, making it an elegant and practical home for modern living.",
    images: [
      "/images/sketchup_enscape1.jpg",
      "/images/sketchup_enscape2.jpg",
      "/images/sketchup_enscape3.png",
      "/images/sketchup_enscape4.png",
      "/images/sketchup_enscape5.png",

    ]
  }
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle function for dropdowns
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-300 rounded-b shadow-lg 
        ${menuOpen ? "bg-gray-900" : "bg-gradient-to-t from-gray-600 via-gray-700 to-gray-600"}`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <img
            src="images/sai-logo.jpg"
            alt="Sai Architect & Designer"
            className="w-16 rounded-r-full sm:24"
          />
          {/* Hamburger Menu Button (Only for Mobile) */}
          <button
            className="md:hidden text-3xl px-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : "☰"} {/* Toggle open/close icon */}
          </button>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <ul className="hidden md:flex space-x-6 px-2">
            <Link to="/"><li className="hover:text-teal-400 cursor-pointer">HOME</li></Link>
            {/* <Link to="/about"><li className="hover:text-teal-400 cursor-pointer">ABOUT</li></Link> */}

            {/* Projects Dropdown */}
            <li className="relative cursor-pointer" onClick={() => toggleDropdown("projects")}>
              <div className="flex items-center gap-2">
                <span>PROJECTS</span>
                {openDropdown === "projects" ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openDropdown === "projects" && (
                <ul className="absolute left-0 mt-2 w-40 bg-gray-800 shadow-lg rounded-lg p-2">
                 
                  {AllProjects.map((pr,id)=>(
                  <li key={id} className="hover:text-teal-400 p-2">
                    <Link to={`/projects/${pr.id}`}>{pr.title}</Link>
                  </li>)

                 ) }
                </ul>
              )}
            </li>

            {/* Works Dropdown */}
            <li className="relative cursor-pointer" onClick={() => toggleDropdown("works")}>
              <div className="flex items-center gap-2">
                <span>WORKS</span>
                {openDropdown === "works" ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openDropdown === "works" && (
                <ul className="absolute left-0 mt-2 w-40 bg-gray-800 shadow-lg rounded-lg p-3">
                  <Link to="/interior"><li className="hover:text-teal-400 cursor-pointer mb-1">Interior</li></Link>
                  <Link to="/exterior"><li className="hover:text-teal-400 cursor-pointer">Exterior</li></Link>
                </ul>
              )}
            </li>
            <Link to="/resume"><li className="hover:text-teal-400 cursor-pointer">RESUME</li></Link>
            <Link to="/contact"><li className="hover:text-teal-400 cursor-pointer">CONTACT</li></Link>
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation (Overlay Effect) */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-100 z-40"></div>
      )}

      {menuOpen && (
        <ul
          className="fixed top-16 right-0 w-1/3 bg-gray-900 text-white py-4 flex flex-col items-center space-y-4 shadow-2xl z-50 rounded"
        >
          <Link to="/"><li className="hover:text-teal-400 cursor-pointer">HOME</li></Link>
          {/* <Link to="/about"><li className="hover:text-teal-400 cursor-pointer">ABOUT</li></Link> */}

          {/* Projects Dropdown (Mobile) */}
          <li className="cursor-pointer w-full text-center" onClick={() => toggleDropdown("projects")}>
            <div className="flex justify-center items-center gap-2">
              <span>PROJECTS</span>
              {openDropdown === "projects" ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openDropdown === "projects" && (
              <ul className="absolute left-0 mt-2 w-40 bg-gray-800 shadow-lg rounded-lg p-2">
                 
                 {AllProjects.map((pr,id)=>(
                  <li key={id} className="hover:text-teal-400 p-2">
                    <Link to={`/projects/${pr.id}`}>{pr.title}</Link>
                  </li>)

                 ) }
            </ul>
            )}
          </li>

          {/* Works Dropdown (Mobile) */}
          <li className="cursor-pointer w-full text-center" onClick={() => toggleDropdown("works")}>
            <div className="flex justify-center items-center gap-2">
              <span>WORKS</span>
              {openDropdown === "works" ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openDropdown === "works" && (
              <ul className="mt-2 bg-gray-800 p-2 w-full text-center">
                <Link to="/interior"><li className="hover:text-teal-400 cursor-pointer">Interior</li></Link>
                <Link to="/exterior"><li className="hover:text-teal-400 p-2">Exterior</li></Link>
              </ul>
            )}
          </li>
          <Link to="/resume"><li className="hover:text-teal-400 cursor-pointer">RESUME</li></Link>
          <Link to="/contact"><li className="hover:text-teal-400 cursor-pointer">CONTACT</li></Link>
        </ul>
      )}
    </>
  );
};

export default Navbar;
