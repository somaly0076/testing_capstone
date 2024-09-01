import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Typography, TextField, Button, Container } from "@mui/material";
import { resetPassword } from "../features/auth/authSlice";

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
      <Typography
        variant="h4"
        gutterBottom
        className="text-center mb-6 font-bold"
      >
        Reset Password
      </Typography>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <TextField
          label="New Password"
          type="password"
          variant="outlined"
          className="mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          className="mb-4"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          className={`bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 ${
            status === "loading" ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Resetting..." : "Reset Password"}
        </Button>
        {message && (
          <Typography
            color="primary"
            variant="body2"
            className="mt-4 text-center"
          >
            {message}
          </Typography>
        )}
        {error && (
          <Typography
            color="error"
            variant="body2"
            className="mt-4 text-center"
          >
            {error}
          </Typography>
        )}
      </form>
    </div>
  );
}
