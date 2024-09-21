import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/slices/authSlice"; // Adjust the import path as necessary
import InputField from "./reusable/InputField";
import Button from "./reusable/Button";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error, message } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    formType: "personal",
    businessName: "",
    businessAddress: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  // Effect to handle redirection based on status
  useEffect(() => {
    if (status === "succeeded") {
      navigate("/login");
    }
  }, [status, navigate]);

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Create Account
      </h2>

      <div className="flex justify-center mb-6">
        <button
          type="button"
          className={`px-4 py-2 border-b-2 ${
            formData.formType === "personal"
              ? "border-black text-black font-semibold"
              : "border-transparent text-gray-600 hover:text-black"
          }`}
          onClick={() => setFormData({ ...formData, formType: "personal" })}
        >
          Personal
        </button>
        <button
          type="button"
          className={`ml-4 px-4 py-2 border-b-2 ${
            formData.formType === "business"
              ? "border-black text-black font-semibold"
              : "border-transparent text-gray-600 hover:text-black"
          }`}
          onClick={() => setFormData({ ...formData, formType: "business" })}
        >
          Business
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {formData.formType === "personal" && (
          <>
            <InputField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <InputField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <InputField
              label="User Name"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
            />
          </>
        )}

        {/* Business fields */}
        {formData.formType === "business" && (
          <>
            <InputField
              label="Business Name"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
            />
            <InputField
              label="Business Address"
              name="businessAddress"
              value={formData.businessAddress}
              onChange={handleChange}
            />
          </>
        )}

        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <InputField
          label="Confirm Password"
          name="passwordConfirm"
          type="password"
          value={formData.passwordConfirm}
          onChange={handleChange}
        />

        <Button text="Register" type="submit" variant="primary" />

        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p className="text-red-500">{error}</p>}
        {status === "succeeded" && <p className="text-green-500">{message}</p>}
      </form>

      <p className="text-center text-sm text-gray-600 mt-6">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
