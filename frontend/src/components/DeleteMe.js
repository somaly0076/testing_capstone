import React from "react";
import { Button } from "@mui/material"; // Ensure you have imported Button from Material-UI
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function DeleteMeButton() {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:4000/api/users/deleteMe",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure this token is not undefined
          },
        }
      );

      console.log("Profile marked as inactive:", response.data);
      localStorage.removeItem("token");
      navigate("/home");
    } catch (err) {
      console.error(
        "Error marking profile as inactive:",
        err.response ? err.response.data : err.message
      );
    }
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleDelete}>
      Delete Me
    </Button>
  );
}
