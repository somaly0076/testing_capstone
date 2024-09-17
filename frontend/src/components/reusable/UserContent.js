import React, { useState, useEffect } from "react";
import { Edit2, Eye, EyeOff } from "lucide-react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
const UserContent = ({image , title , views , detail}) => {
  const [isPublic, setIsPublic] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 1004);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Listen for window resize events
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1004) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    // Set sidebar state on initial render
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mt-[80px]">
      {!sidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="left-4 z-20 p-2  text-black rounded-md"
        >
          <Menu size={24} />
        </button>
      )}

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="max-w-2xl mx-auto flex-col justify-between flex p-6 bg-white rounded-3xl shadow-lg border-2 h-[730px] w-full">
        <h1 className="text-3xl font-bold mb-6">Content</h1>

        <div
          className="relative mb-4 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={image}
            alt="University campus"
            className="w-full h-48 object-cover rounded-lg"
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <Edit2 className="text-white" size={24} />
            </div>
          )}
        </div>

        <div>
          <div className="mb-4 flex items-start">
            <h2 className="text-xl font-semibold flex-grow">
              {title}
            </h2>
            <Edit2 size={20} className="text-gray-500 cursor-pointer" />
          </div>

          <div className="mb-4 relative">
            <p className="text-gray-600 pr-8">
              {detail}
            </p>
            <Edit2
              size={20}
              className="absolute top-0 right-0 text-gray-500 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-gray-600">Number of View : {views}</p>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsPublic(!isPublic)}
              className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm ${
                isPublic
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {isPublic ? <Eye size={16} /> : <EyeOff size={16} />}
              <span>{isPublic ? "Public" : "Private"}</span> 
            </button>
            <button className="bg-sky-200 text-sky-800 px-4 py-1 rounded-full text-sm">
              Request Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserContent;
