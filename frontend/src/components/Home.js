import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { NODE_ENV } from "../constants";
import HomePageCard from "./reusable/HomePageCard";
import NavBar from "../components/reusable/Navbar";
import HeroSection from "./reusable/HeroSection";

const cardItems = {
  title: "Company Name",
  description: "",
  image: "https://live.staticflickr.com/65535/52371396945_89370af824_c_d.jpg",
}

export default function Home() {
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("username");
  const { profile, loading, error } = useSelector((state) => state.user);

  if (NODE_ENV === "development") {
    console.log("Username from localStorage:", userName);
  }

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error loading profile: {error}</p>;
  }

  return (
    <React.Fragment>
      {/* <h1>Welcome to the Home Page</h1>
      {token ? (
        userName ? (
          <Link to={`/profile/${userName}`}>
            <FaUser />
          </Link>
        ) : (
          <p>No username available</p>
        )
      ) : (
        <p>No token
         available</p>
      )} */}
        <HeroSection/>
      <div className="w-full overflow-y-scroll">
      <div className="w-fit flex ">
      <HomePageCard variant={"large"} cardItems={cardItems}/>
      <HomePageCard variant={"large"} cardItems={cardItems}/>
      <HomePageCard variant={"large"} cardItems={cardItems}/>
      </div>
      </div>
    </React.Fragment>
  );
}
