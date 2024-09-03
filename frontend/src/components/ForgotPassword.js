import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputField from "../components/reusable/InputField";
import Button from "../components/reusable/Button";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/users/forgotPassword", { email });

      setMessage("Password reset link has been sent to your email.");
      setError("");

      const token = response.data.token;
      navigate(`/resetPassword/${token}`);
    } catch (err) {
      setError("Failed to send password reset link. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
      <h1 className="text-3xl font-bold text-center mb-6">Forgot Password</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          error={error} // Optional: Pass error message if needed
        />
        <Button
          type="submit"
          text="Send Reset Link"
          variant="primary"
          disabled={false} // Set based on any loading state if applicable
        />
        {message && (
          <p className="text-green-500 text-center mt-4">{message}</p>
        )}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </form>
    </div>
  );
}
