import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { logout } from "../features/slices/authSlice";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <Button variant="contained" color="primary" onClick={handleLogout}>
      Logout
    </Button>
  );
}
