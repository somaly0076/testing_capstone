import React from 'react';
import Card from "./reusable/CompanyCard";
import { companies } from "./db";
import NavBar from '../components/reusable/Navbar';
import "@fontsource/poppins/400.css"
import Footer from './reusable/Footer';
const CompanyCard = () => {
  return (
    <>
    <NavBar/>
    <div className="flex flex-col align-middle justify-center gap-6 p-6 mt-[64px] h-max">
      {companies.map((company, index) => (
        <Card
          key={index}
          image={company.image}
          imageAlt={company.imageAlt}
          title={company.title}
          description={company.description}
          facebookLink={company.facebookLink}
          instagramLink={company.instagramLink}
          twitterLink={company.twitterLink}
          youtubeLink={company.youtubeLink}
          websiteLink={company.websiteLink}
          location={company.location}
          deadLine={company.deadLine}
          timeOut={company.timeOut}
        />
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default CompanyCard;