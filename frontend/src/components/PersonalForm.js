import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../features/slices/authSlice";
import { NODE_ENV } from "../constants";
import Button from "./reusable/Button";
import InputField from "./reusable/InputField";

export default function Personal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { message, error, status } = useSelector((state) => state.auth);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("Passwords do not match");
      return;
    }

    // Log form data for debugging
    if (NODE_ENV !== "production") {
      console.log({
        firstName,
        lastName,
        userName,
        email,
        password,
        passwordConfirm,
      });
    }

    dispatch(
      register({
        firstName,
        lastName,
        userName,
        email,
        password,
        passwordConfirm,
      })
    );
  };

  useEffect(() => {
    if (status === "succeeded") {
      navigate("/information");
    }
  }, [status, navigate]);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center mb-6">Personal</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="First Name"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <InputField
          label="Last Name"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <InputField
          label="Username"
          name="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <InputField
          label="Confirm Password"
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />
        <Button
          type="submit"
          text={status === "loading" ? "Registering..." : "Register"}
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
