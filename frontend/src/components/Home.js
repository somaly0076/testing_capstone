import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function Home() {
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("username");
  const { profile, loading, error } = useSelector((state) => state.user);

  console.log("Username from localStorage:", userName);

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error loading profile: {error}</p>;
  }

  return (
    <React.Fragment>
      <h1>Welcome to the Home Page</h1>
      {token ? (
        userName ? (
          <Link to={`/profile/${userName}`}>
            <FaUser />
          </Link>
        ) : (
          <p>No username available</p>
        )
      ) : (
        <p>No token available</p>
      )}
    </React.Fragment>
  );
}
