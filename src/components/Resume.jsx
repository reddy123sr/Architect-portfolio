import React, { useState, useEffect } from "react";
import { auth, signOut } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { getResume,saveResume} from "../services/ResumeService"; // Firestore functions

const Resume = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [driveLink, setDriveLink] = useState("");
  const [embedLink, setEmbedLink] = useState("");

  // **Check if user is logged in (Admin Only)**
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // **Fetch Latest Resume Link**
  useEffect(() => {
    const fetchResume = async () => {
      const link = await getResume();
      if (link) {
        setEmbedLink(link);
      }
    };
    fetchResume();
  }, []);

  // **Convert Google Drive Link to Embed Format**
  const convertToEmbedLink = (link) => {
    const match = link.match(/\/file\/d\/(.*)\/view/);
    return match ? `https://drive.google.com/file/d/${match[1]}/preview` : link;
  };

  // **Handle Resume Update (Admin Only)**
  const handleUpdateResume = async () => {
    const newEmbedLink = convertToEmbedLink(driveLink);
    const success = await saveResume(newEmbedLink);
    if (success) {
      setEmbedLink(newEmbedLink);
      alert("Resume updated successfully!");
    } else {
      alert("Failed to update resume. Try again.");
    }
  };

  // **Admin Logout**
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <section className="w-full py-12 px-6 bg-gray-900 text-white flex flex-col items-center">
      {/* Resume Header */}
      <h2 className="text-3xl font-bold mb-4">My Resume</h2>

      {/* Resume Viewer */}
      {embedLink ? (
        <iframe
          src={embedLink}
          className="w-full max-w-2xl h-[500px] rounded-lg shadow-lg"
          allow="autoplay"
        ></iframe>
      ) : (
        <p className="text-red-500">Resume not available.</p>
      )}

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
      ) : <button
      onClick={() => navigate("/login")}
      className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
    >
      Admin Login to Update Resume
    </button>}
    </section>
  );
};

export default Resume;