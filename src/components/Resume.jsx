import React, { useState, useEffect } from "react";
import { auth, signOut } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [driveLink, setDriveLink] = useState("");
  const [embedLink, setEmbedLink] = useState(
    localStorage.getItem("resumeLink") ||
      "https://drive.google.com/file/d/1YudGmScVcizsGuJuUAvjf_x5Xu2vGbNA/preview"
  );

  // Check if user is logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Function to convert Drive link to Embed link
  const convertToEmbedLink = (link) => {
    const match = link.match(/\/file\/d\/(.*)\/view/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return link; // If invalid format, return the same link
  };

  // Handle Resume Update
  const handleUpdateResume = () => {
    const newEmbedLink = convertToEmbedLink(driveLink);
    setEmbedLink(newEmbedLink);
    localStorage.setItem("resumeLink", newEmbedLink);
    alert("Resume updated successfully!");
  };

  // Logout Function
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <section className="w-full py-12 px-6 bg-gray-900 text-white flex flex-col items-center">
      {/* Resume Header */}
      <h2 className="text-3xl font-bold mb-4">My Resume</h2>

      {/* Resume Viewer */}
      <iframe
        src={embedLink}
        className="w-full max-w-2xl h-[500px] rounded-lg shadow-lg"
        allow="autoplay"
      ></iframe>

      {/* Admin Upload Section */}
      {user ? (
        <div className="mt-6 flex flex-col items-center">
          <input
            type="text"
            placeholder="Enter Google Drive Resume Link"
            className="px-4 py-2 text-black rounded w-80 bg-white"
            value={driveLink}
            onChange={(e) => setDriveLink(e.target.value)}
          />
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleUpdateResume}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
            >
              Update Resume
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          Admin Login to Update Resume
        </button>
      )}
    </section>
  );
};

export default Resume;
