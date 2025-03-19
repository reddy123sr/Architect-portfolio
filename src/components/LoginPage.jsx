import React, { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/resume"); // Redirect to Resume Page after login
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <section className="w-full h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Admin Email"
            className="border w-full p-2 mb-4 rounded text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="border w-full p-2 mb-4 rounded text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded w-full">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
