import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, TextField, Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 400,
    margin: "auto",
    padding: "20px",
    borderRadius: 10,
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    marginTop: "32px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    marginBottom: "16px",
  },
  button: {
    backgroundColor: "#1976d2",
    color: "white",
    "&:hover": {
      backgroundColor: "#115293",
    },
  },
}));

export default function ResetPassword() {
  const classes = useStyles();
  const { token } = useParams(); // Extract the token from the URL
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(
        `http://localhost:4000/api/users/resetPassword/${token}`,
        {
          password,
          passwordConfirm,
        }
      );

      setMessage(
        "Password reset successful. You can now log in with your new password."
      );
      setError("");

      navigate("/login"); // Redirect to login page after successful reset
    } catch (err) {
      setError("Failed to reset password. Please try again.");
      setMessage("");
    }
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Reset Password
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="New Password"
          type="password"
          variant="outlined"
          className={classes.textField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          className={classes.textField}
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" className={classes.button}>
          Reset Password
        </Button>
        {message && (
          <Typography color="primary" variant="body2" style={{ marginTop: 16 }}>
            {message}
          </Typography>
        )}
        {error && (
          <Typography color="error" variant="body2" style={{ marginTop: 16 }}>
            {error}
          </Typography>
        )}
      </form>
    </Container>
  );
}
