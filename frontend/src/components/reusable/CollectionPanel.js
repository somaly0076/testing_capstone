import React, { useState, useEffect } from "react";
import { Edit2, Eye, EyeOff } from "lucide-react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { fetchData } from "../../data/fetchData";
import addFavorite from "../../features/slices/functions/addFavorite";
import Card from "./CompanyCard";
import { companies } from "./../db";

//     const [fav, setFav] = useState();
//     useEffect(() => {
//         (async () => {
//             await addFavorite(9, 'loan');
//             const res = await fetchData('http://localhost:4000/api/favorites/1/loan');
//             setFav(res.data.data)
//         })()
//     }, []);
//    console.log(fav)

const CollectionPanel = () => {

    return (
        <div className="mt-[100px]">
            <div className="max-w-7xl mx-auto flex-col gap-y-4 justify-between flex p-6 bg-white rounded-3xl shadow-lg border-2  w-full overflow-hidden max-h-[1000px] overflow-y-scroll">
                <h1 className="text-3xl font-bold mb-6">Content</h1>
                {companies.map((company, index) => (
        <Card
          key={index}
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
                             {companies.map((company, index) => (
        <Card
          key={index}
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
            </div>
        
    );
};

export default CollectionPanel;