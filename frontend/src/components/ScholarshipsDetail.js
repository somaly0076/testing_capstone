import React from "react";
import ScholarDetails from "./reusable/ScholarshipsDetail";
import Navbar from "./reusable/Navbar";
import Footer from "./reusable/Footer";
import { companies } from "./db";
import { useParams } from "react-router-dom";

function ScholarshipsDetails() {
  const { scholarShipUrl } = useParams(); // Extract the URL parameter

  // Find the DATA with the matching URL
  const scholarShip = companies.find(c => c.url === scholarShipUrl);

  return (
    <>
      <Navbar />
      <div>
        {scholarShip ? (
          <ScholarDetails
					url={scholarShip.url}
            image={scholarShip.image}
            title={scholarShip.title}
            description={scholarShip.description}
						websiteLink={scholarShip.websiteLink}
						twitterLink={scholarShip.twitterLink}
						facebookLink={scholarShip.facebookLink}
						instagramLink={scholarShip.instagramLink}
          />
        ) : (
          <p>scholarShip not found.</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ScholarshipsDetails;
