// import "../../components/Login/Login.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/users/login", {
        email,
        password,
      });

      console.log("Login successful:", response.data);

      const { token, id } = response.data;

      // Store both token and user ID in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("id", id);

      navigate("/home");
    } catch (err) {
      setError("Please check your username and password");
      console.error("Login error:", err);
    }
  };

  return (
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <div class="w-[420px] bg-white shadow-lg rounded-lg p-8">
        <h1 class="text-3xl text-center mb-8 font-bold">Login</h1>
        <form onSubmit={handleSubmit}>
          <div class="relative mb-8">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              class="w-full h-12 bg-transparent border-2 border-white/20 rounded-md pl-5 pr-10 text-base placeholder-white"
            />
            <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl text-gray-600" />
          </div>
          <div class="relative mb-8">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              class="w-full h-12 bg-transparent border-2 border-white/20 rounded-md pl-5 pr-10 text-base placeholder-white"
            />
            <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl text-gray-600" />
          </div>
          {error && <p class="text-red-500 mb-4">{error}</p>}
          <div class="flex justify-between text-sm mb-4">
            <label class="flex items-center">
              <input type="checkbox" class="accent-white mr-1" />
              Remember me
            </label>
            <Link to="/forgotPassword" class="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            class="w-full h-12 bg-blue-600 text-white rounded-full shadow-md font-bold hover:bg-blue-700"
          >
            Login
          </button>
          <div class="text-center text-sm mt-4">
            <span>Create an account?</span>
            <Link to="/register" class="text-blue-500 ml-1 hover:underline">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
