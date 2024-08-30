import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function DeleteMeButton() {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await axios.delete("/api/users/deleteMe", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log("Profile marked as inactive:", response.data);
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      navigate("/home");
    } catch (err) {
      console.error(
        "Error marking profile as inactive:",
        err.response ? err.response.data : err.message
      );
    }
  };

  return (
    <Button variant="contained" color="danger" onClick={handleDelete}>
      Delete Me
    </Button>
  );
}
