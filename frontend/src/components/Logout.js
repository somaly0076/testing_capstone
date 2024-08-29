import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication token or user data (depends on your auth strategy)
    localStorage.removeItem("authToken"); // Example: clearing token from localStorage

    // Optionally, clear other user data
    // localStorage.removeItem('user');

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <Button variant="contained" color="primary" onClick={handleLogout}>
      Logout
    </Button>
  );
}
