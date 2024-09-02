import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FETCH_PROFILE } from "../constants";

export default function DeleteUserButton() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const username = localStorage.getItem("username");

  const handleDelete = async () => {
    if (!username) {
      console.error("Username not found in localStorage.");
      return;
    }

    try {
      const response = await axios.delete(FETCH_PROFILE(username), {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log("Profile marked as inactive", response.data);
      localStorage.removeItem("token");
      localStorage.removeItem("username");
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
    <>
      <Button variant="contained" color="error" onClick={() => setOpen(true)}>
        Delete User
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <p>
            Are you sure you want to delete your profile? This action cannot be
            undone.
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleDelete();
              setOpen(false); // Close the dialog after deletion
            }}
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
