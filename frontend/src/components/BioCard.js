import React from "react";

const BioCard = ({ children, variant = "left", bioCard, className = "" }) => {
  const baseStyle = `flex items-center justify-center min-h-screen p-4 m-auto sm:w-full sm:h-[662px] sm:flex-col sm: m-auto`;
  // const baseStyle = `lg:h-[520px] lg:w-[1232px] flex m-auto lg:flex-row m-auto sm:w-full sm:h-[662px] sm:flex-col sm: m-auto`;

  const variants = {
    right: `lg:flex-row-reverse`,
  };

  const componentStyle = `${className} ${baseStyle} ${variants[variant]}`;

  return (
    <div className={componentStyle}>
      <div className="w-[100%] lg:h-full sm:h-auto">
        <img
          src={bioCard.image}
          alt={bioCard.title}
          className="w-full h-auto "
        />
      </div>
      <div className="w-full p-4 rounded-md shadow-md sm:w-full lg:w-1/3">
        <h1 className="flex items-center justify-center w-full h-full ">
          {bioCard.title}
        </h1>
        <div>
          <p
            className="flex items-center justify-center w-full h-full "
            dangerouslySetInnerHTML={{
              __html: bioCard.description.replace(/\n/g, "<br />"),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BioCard;
