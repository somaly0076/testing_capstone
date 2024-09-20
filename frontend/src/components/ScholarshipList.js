import Navbar from "./reusable/Navbar";
import Footer from "./reusable/Footer";
import PaginationComponent from './reusable/PagComponent'
import FilterComponent from "./reusable/Filter";
import Card from "./reusable/CompanyCard";
import React, { useState } from 'react';
import { scholarships } from "./scholarships";

export default function ScholarshipList() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString()
    const items = [
        {
            id: '2132',
            label: 'University',
            content: ['Western', 'TECHNO', 'AUPP', 'RUPP', 'PARAGON']
        },
        {
            id: '2eqsa',
            label: 'Location',
            content: ['Phnom Penh', 'Siem Reap']
        },
        {
            id: 'sadsd',
            label: 'Status',
            content: ['Open', 'Closed']
        },//4th accordion
        {
            id: 'sadsd',
            label: 'Deadline',
            content: ['Upcoming', 'Passed']
        }
    ];
    const [currentFilterUni, setCurrentFilterUni] = useState('');

 // convert both deadline and formattedDate ito date OBJ
    // For comparison, you can keep using the Date object directly
    const scholarshipDeadLine = new Date("2024-09-20"); // Example scholarship deadline

    // Calculate the difference in milliseconds
    const differenceInMs = scholarshipDeadLine - currentDate;

    // Convert milliseconds to days
    const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

    // Condition check
    if (differenceInDays >= 30 || currentFilterUni === '') {
        // Your logic here
        console.log("Condition met!");
    }
    const filteredScholarships = scholarships.filter(scholarship => 
        ((scholarship.deadLine - formattedDate)>=30 || currentFilterUni ==='') ||
        (scholarship.status === currentFilterUni || currentFilterUni ==='') ||
        (scholarship.location === currentFilterUni || currentFilterUni ==='') ||
        (scholarship.university === currentFilterUni || currentFilterUni === '')
    );

    const handleUniversityFilterChange = (university) => {
        setCurrentFilterUni(university);
    };
 
    const renderCard = (currentItems) => {
        return (
            <div className="flex flex-col items-center justify-center gap-6 mt-10 h-max">
                {currentItems.map((scholarship, index) => (
                    <Card
                        key={index}
                        image={scholarship.image}
                        imageAlt={scholarship.imageAlt}
                        title={scholarship.title}
                        description={scholarship.description}
                        facebookLink={scholarship.facebookLink}
                        instagramLink={scholarship.instagramLink}
                        twitterLink={scholarship.twitterLink}
                        youtubeLink={scholarship.youtubeLink}
                        websiteLink={scholarship.websiteLink}
                        location={scholarship.location}
                        deadLine={scholarship.deadLine}
                        timeOut={scholarship.timeOut}
                    />
                ))}
            </div>
        );
    };

    return (
        <>
            <Navbar />
            <div className="mt-[70px]">
                <FilterComponent 
                    items={items} 
                    onUniversityFilterChange={handleUniversityFilterChange}
                />
                <PaginationComponent 
                    renderCard={renderCard}
                    filteredScholarships={filteredScholarships}
                />
            </div>
            <Footer />
        </>
    );
}
