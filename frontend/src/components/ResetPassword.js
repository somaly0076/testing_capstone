import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../components/reusable/InputField";
import Button from "../components/reusable/Button";
import { resetPassword } from "../features/slices/authSlice";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { message, error, status } = useSelector((state) => state.auth);

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  useEffect(() => {
    if (status === "succeeded") {
      navigate("/login");
    }
  }, [status, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(resetPassword({ token, password, passwordConfirm }));
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow-lg bg-white mt-8">
      <h1 className="text-3xl font-bold text-center mb-6">Reset Password</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <InputField
          label="New Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          error={error} 
        />
        <InputField
          label="Confirm Password"
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
          error={error} // Optional: Add error if relevant
        />
        <Button
          type="submit"
          text={status === "loading" ? "Resetting..." : "Reset Password"}
          variant="primary"
          disabled={status === "loading"}
        />
        {message && (
          <p className="text-green-500 text-center mt-4">{message}</p>
        )}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </form>
    </div>
  );
}
