import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { Typography, TextField, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

export default function ForgotPassword() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/forgotPassword",
        { email }
      );

      setMessage("Password reset link has been sent to your email.");
      setError("");

      const token = response.data.token;
      navigate(`/resetPassword/${token}`); // Pass the token as a URL parameter
    } catch (err) {
      setError("Failed to send password reset link. Please try again.");
      setMessage("");
    }
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Forgot Password
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          className={classes.textField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" className={classes.button}>
          Send Reset Link
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
