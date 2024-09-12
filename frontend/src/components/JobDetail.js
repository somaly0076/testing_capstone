import { useEffect, useState } from "react";
import ContactCard from "./reusable/ContactCard";
import Footer from "./reusable/Footer";
import Navbar from "./reusable/Navbar";
import { fetchData } from "../data/fetchData";

function JobDetail() {
    const [companyDetail, setCompanyDetail] = useState([]);

    useEffect(() => {
        (async () => {
            const company = await fetchData('http://localhost:4000/api/companies');
            setCompanyDetail(company.data.data.companies)
        
        })();
    }, []);

    const renderContact = (<div>
        <h1>{companyDetail[0].email}</h1>
        <h1>{companyDetail[0].website_url}</h1>
        <h1>{companyDetail[0].tel}</h1>
        <h1>{companyDetail[0].location}</h1>
    </div>);
  const companyProfile = companyDetail[0].company_bg;

    return (
        <>
            <Navbar />
            <div className="flex flex-col align-middle justify-center gap-6 p-6 mt-[64px] h-max">
                <div className="justify-center">
                    <img src={companyDetail[0].img_url}></img>
                    <h1><b>Company information</b></h1>
                {companyProfile}
            </div>
            <ContactCard title={"Job Requirement"} content={"this is job requirement"}/>
            <ContactCard title={"Contact"} content={renderContact} />
            </div>
        <Footer />
        </>
    )
}

export default JobDetail;