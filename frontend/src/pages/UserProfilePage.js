import React from "react";
import UserProfile from "../components/UserProfile";
import LogoutButton from "../components/Logout";
import DeleteUserButton from "../components/DeleteUser";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const UserProfilePage = () => {
  return (
    <div>
      <Link to="/home">
        <FaHome />
      </Link>
      <UserProfile />
      <div>
        <LogoutButton />
        <DeleteUserButton />
      </div>
    </div>
  );
};

export default UserProfilePage;
