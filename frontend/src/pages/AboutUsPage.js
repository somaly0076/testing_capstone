import React from "react";
import BioCard from "../components/BioCard";

const bioCard = [
  {
    image:
      "https://www.fervalle.com/wp-content/uploads/2022/07/transparent-orange-apple5eacfeae85ac29.7815306015883956945475.png",
    title: "Vision",
    description: "fhjsdjfhjksdfhjk",
  },
  {
    image:
      "https://www.fervalle.com/wp-content/uploads/2022/07/transparent-orange-apple5eacfeae85ac29.7815306015883956945475.png",
    title: "Vision",
    description: "fhjsdjfhjksdfhjk",
  },
  {
    image:
      "https://www.fervalle.com/wp-content/uploads/2022/07/transparent-orange-apple5eacfeae85ac29.7815306015883956945475.png",
    title: "Vision",
    description: "fhjsdjfhjksdfhjk",
  },
];

const AboutUsPage = () => {
  return bioCard.map((card, index) => (
    <div>
      {index === 1 ? (
        <BioCard variant={"right"} bioCard={card} />
      ) : (
        <BioCard variant={"left"} bioCard={card} />
      )}
    </div>
  ));
};

export default AboutUsPage;
