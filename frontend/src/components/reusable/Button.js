import React from "react";

const Button = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) => {
  const baseStyles = "w-full py-2 px-4 rounded focus:outline-none";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
