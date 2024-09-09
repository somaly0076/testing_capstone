import React from "react";
import BioCard from "../components/BioCard";
import NavBar from "../components/reusable/Navbar";
import vision from "../assets/images/Vision.png";
import mission from "../assets/images/Mission.png";
import coreValue from "../assets/images/core values.png";

const bioCard = [
  {
    image: vision,
    title: "OUR VISION",
    description:
      "We strive to be the go-to platform for college students, providing easy-to-use tools to find the best universities, scholarships, accommodations, study loans, and part-time jobs.",
  },
  {
    image: mission,
    title: "OUR MISSION",
    description:
      " Empower Student Success <br /> Simplify the Search Process <br /> Enhance Accessibility <br /> Foster Financial Independence <br /> Build Strong Partnerships ",
  },
  {
    image: coreValue,
    title: "OUR CORE VALUE",
    description:
      "Student-First: Your goals are our priority. <br /> Honesty: Transparent and fair in everything we do. <br /> Innovation: Always improving to serve you better. <br /> Inclusivity: Opportunities for all students, no matter where you're from.  <br /> Teamwork: Collaborating to create the best experience for you.",
  },
];

const AboutUsPage = () => {
  return (
    <div>
      <NavBar />
      {bioCard.map((card, index) => (
        <div key={index}>
          {index === 1 ? (
            <BioCard variant={"right"} bioCard={card} />
          ) : (
            <BioCard variant={"left"} bioCard={card} />
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutUsPage;
