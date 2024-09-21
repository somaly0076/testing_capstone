import React, { useState, useEffect } from "react";
import { login } from "../features/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import InputField from "./reusable/InputField";
import Button from "./reusable/Button";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { status, error, isAuthenticated } = useSelector((state) => state.auth);

  // Redirect to home if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(login({ email, password }));

    if (login.fulfilled.match(resultAction)) {
      navigate("/home", { replace: true });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[420px] bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl text-center mb-8 font-bold">Login</h1>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            icon={FaUser}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            icon={FaLock}
          />
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
          <Button
            type="submit"
            text={status === "loading" ? "Logging in..." : "Login"}
            variant="primary"
            disabled={status === "loading"}
          />
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
