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
  image: "https://www.shutterstock.com/image-photo/woman-portrait-outdoor-happiness-university-260nw-2477885163.jpg",
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
        <HeroSection/>
      <div className="w-full overflow-scroll flex flex-col justify-between">
      <div className="w-fit flex gap-5">
      <HomePageCard variant={"small"} cardItems={cardItems}/>
      <HomePageCard variant={"small"} cardItems={cardItems}/>
      <HomePageCard variant={"small"} cardItems={cardItems}/>
      <HomePageCard variant={"small"} cardItems={cardItems}/>
      <HomePageCard variant={"small"} cardItems={cardItems}/>
      <HomePageCard variant={"small"} cardItems={cardItems}/>
      </div>

      </div>
      <div className="w-full overflow-scroll flex flex-col justify-between">
      <div className="w-fit flex gap-5">
      <HomePageCard variant={"large"} cardItems={cardItems}/>
      <HomePageCard variant={"large"} cardItems={cardItems}/>
      <HomePageCard variant={"large"} cardItems={cardItems}/>
      <HomePageCard variant={"large"} cardItems={cardItems}/>
      <HomePageCard variant={"large"} cardItems={cardItems}/>
      <HomePageCard variant={"large"} cardItems={cardItems}/>
      </div>
      </div>
    </React.Fragment>
  );
}
