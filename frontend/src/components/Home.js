import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <React.Fragment>
      <h1>Welcome to the Home Page</h1>
      <Link to="/profile">
        <FaUser />
      </Link>
    </React.Fragment>
  );
}
