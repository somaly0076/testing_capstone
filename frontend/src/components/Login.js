import React, { useState } from "react";
import { login } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { status, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(login({ email, password }));

    if (login.fulfilled.match(resultAction)) {
      navigate("/home");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[420px] bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl text-center mb-8 font-bold">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-12 bg-transparent border-2 border-white/20 rounded-md pl-5 pr-10 text-base placeholder-black"
            />
            <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl text-gray-600" />
          </div>
          <div className="relative mb-8">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-12 bg-transparent border-2 border-white/20 rounded-md pl-5 pr-10 text-base placeholder-black"
            />
            <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-xl text-gray-600" />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="flex justify-between text-sm mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="accent-white mr-1" />
              Remember me
            </label>
            <Link
              to="/forgotPassword"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full h-12 bg-blue-600 text-white rounded-full shadow-md font-bold hover:bg-blue-700"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Logging in..." : "Login"}
          </button>
          <div className="text-center text-sm mt-4">
            <span>Create an account?</span>
            <Link to="/register" className="text-blue-500 ml-1 hover:underline">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
