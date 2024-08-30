import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("id");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <Button variant="contained" color="primary" onClick={handleLogout}>
      Logout
    </Button>
  );
}
