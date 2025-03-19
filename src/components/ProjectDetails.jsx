import { useParams, useNavigate } from "react-router-dom";
import { AllProjects } from "./Navbar";
const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = AllProjects.find((p) => p.id.toString() === id);

  if (!project) {
    return <h2 className="text-center text-red-500">Project Not Found</h2>;
  }

  return (
    <div className="p-6 bg-gray-900 text-white shadow-lg text-justify">
      {/* Project Title */}
      <h1 className="text-3xl font-bold text-teal-400 mb-6">{project.title}</h1>
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-cyan-300">Overview</h3>
        <p className="mt-2 text-lg text-gray-300">{project.description}</p>
      </div>
      {/* Images in Vertical Layout */}
      <div className="space-y-4 my-4">
        {project.images.map((image, index) => (
          <div key={index} className="rounded-lg p-2">
            <img src={image} alt={`Project ${index + 1}`} className="w-full md:max-w-3xl lg:max-w-6xl h-auto mx-auto" />
          </div>
        ))}
      </div>

   
      

      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="mt-6 bg-red-500 px-4 py-2 rounded hover:bg-red-600">
        Back to Home
      </button>
    </div>
  );
};

export default ProjectDetails;
