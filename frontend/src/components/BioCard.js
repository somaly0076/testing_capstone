import React from "react";

const BioCard = ({ children, variant = "left", bioCard, className = "" }) => {
  const baseStyle = `lg:h-[520px] lg:w-[1232px] flex lg:flex-row m-auto sm:w-full sm:h-[662px] sm:flex-col`;

  const variants = {
    right: `lg:flex-row-reverse`,
  };

  const componentStyle = `${className} ${baseStyle} ${variants[variant]}`;

  return (
    <div className={componentStyle}>
      <div className="w-[50%] lg:h-full sm:h-[50%]">
        <img src={bioCard.image} alt={bioCard.title} />
      </div>
      <div className="w-[50%] lg:h-full sm:h-[50%]">
        <h1>{bioCard.title}</h1>
        <div>
          <p>{bioCard.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BioCard;
