import Navbar from "./reusable/Navbar";
import Footer from "./reusable/Footer";
import PaginationComponent from "./reusable/PagComponent";
import FilterComponent from "./reusable/Filter";
import React, { useState } from 'react';
import { scholarships } from "./scholarships";

export default function UniversityList() {
    const items = [
        {
          id:'2132',
          label:'University',
          content:['Western','TECHNO','AUPP','RUPP','PARAGON']
        },
        {
          id:'2eqsa',
          label:'Location',
          content:['PhnomPenh','Sieam Reap']
        },
        {
          id:'sadsd',
          label:'Status',
          content:['u can use react']
        },
        {
          id:'sadsd',
          label:'Deadline',
          content:['u can use react']
        }
      ]
    // const dataTofilter = scholarships
    const [currentFilterUni, setCurrentFilterUni] = useState('');

    const filteredScholarships = scholarships.filter(scholarship => 
        scholarship.university === currentFilterUni || currentFilterUni === ''
    );

    const handleUniversityFilterChange = (university) => {
        setCurrentFilterUni(university);
    };
    
    return (
        <>
            <Navbar />
            <div className="mt-[70px]"> 
                <FilterComponent 
                items={items} 
                onUniversityFilterChange={handleUniversityFilterChange}
                />
                <PaginationComponent />
            </div>
            <Footer />
        </>
    );
};
