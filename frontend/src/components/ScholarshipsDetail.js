import React from "react";
import ScholarDetails from "./reusable/ScholarshipsDetail";
import Navbar from "./reusable/Navbar";
import Footer from "./reusable/Footer";
import { companies } from "./db";
function ScholarshipsDetails(){
	return(
		<>
		<Navbar/>
		<div>
		{companies.map((company,index)=>(
			<ScholarDetails
			  key={index}
				image={company.image}

			/>

		))

		}
		</div>
		<Footer/>
		</>
	)
}


export default ScholarshipsDetails;