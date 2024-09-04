import React from 'react';
import Card from "./reusable/Card";
import { companies } from "./db";

const CompanyCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {companies.map((company, index) => (
        <Card
          key={index}
          image={company.image}
          imageAlt={company.imageAlt}
          title={company.title}
          describtion={company.describtion}
          facebookLink={company.facebookLink}
          instagramLink={company.instagramLink}
          twitterLink={company.twitterLink}
          youtubeLink={company.youtubeLink}
          websiteLink={company.websiteLink}
        />
      ))}
    </div>
  );
};

export default CompanyCard;