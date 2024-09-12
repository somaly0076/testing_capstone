import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./reusable/CompanyCard";
import NavBar from "./reusable/Navbar";
import Footer from "./reusable/Footer";
import { fetchData } from "../data/fetchData";
function JobCard() {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await fetchData('http://localhost:4000/api/jobs');
            setJobs(res.data.data.jobs)
        })()
    }, []);
    const renderJobCards = jobs.map(job => {
        return <Card
            key={job.id}
            image={'https://m.media-amazon.com/images/I/514q4uEjRaL._UF350,350_QL80_.jpg'}
            imageAlt={job.job_rquire}
            title={job.position}
            description={job.job_desc}
            facebookLink={job.updatedAt}
            instagramLink={job.updatedAt}
            twitterLink={job.createdAt}
            youtubeLink={job.createdAt}
            websiteLink={job.createdAt}
            location={job.location}
            deadLine={job.deadline}
            timeOut={job.salary}
        />
    });
    return (
        <>
        <NavBar />
        <div className="flex flex-col align-middle justify-center gap-6 p-6 mt-[64px] h-max">
            {renderJobCards}
         </div>
        <Footer />
        </>
     )
}

export default JobCard;