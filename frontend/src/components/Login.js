import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { Tabs, Tab, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: "auto",
    padding: "4px",
    borderRadius: 10,
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    marginTop: "32px",
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "black",
  },
  tabs: {
    borderBottom: "2px solid black",
  },
  tab: {
    textTransform: "none",
    fontSize: "1.2rem",
  },
  activeTab: {
    fontWeight: "bold",
  },
  form: {
    marginTop: "8px",
  },
  textField: {
    marginBottom: "8px",
  },
  forgotPassword: {
    textAlign: "right",
    marginBottom: "8px",
  },
  loginButton: {
    backgroundColor: "#1976d2",
    color: "white",
    "&:hover": {
      backgroundColor: "#115293",
    },
    marginBottom: "8px",
  },
  createAccount: {
    textAlign: "center",
  },
}));

export default function Login() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/login",
        {
          email,
          password,
        }
      );
      console.log("Login successful:", response.data);

      // Store the token in localStorage
      const token = response.data.token; // Adjust based on your response structure
      localStorage.setItem("token", token);

      // Redirect the user to a different page after successful login
      navigate("/home");

      // Optionally, redirect the user to a different page after successful login
      // window.location.href = "/dashboard";
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
          <Tab label="Personal" />
          <Tab label="Business" disabled />
        </Tabs>
        <TextField
          label="Email"
          variant="outlined"
          className={classes.textField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          className={classes.textField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          className={classes.loginButton}
        >
          Login
        </Button>
        <Typography variant="body2" className={classes.forgotPassword}>
          <Link to="/forgotPassword">Forgot Password?</Link>
        </Typography>
        <Typography variant="body2" className={classes.createAccount}>
          Don't have an account? <a href="/register">Create account</a>
        </Typography>
      </form>
    </div>
  );
}
