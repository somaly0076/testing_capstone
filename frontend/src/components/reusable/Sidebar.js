import React, { useState, useEffect, useRef, useContext } from "react";
import { X, User, Heart, ChevronDown, ChevronRight } from "lucide-react";
import { SidebarContentContext } from "./Profile";

const Sidebar = ({ isOpen, onClose, userRole }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const sidebarRef = useRef(null);
  const setSideBarContent = useContext(SidebarContentContext); // Get the setter function for the context

  const toggleCollection = () => {
    setIsCollectionOpen(!isCollectionOpen);
  };

  const handleItemClick = (item, content) => {
    setSelectedItem(item);
    setSideBarContent(content); // Update the context value with the selected content
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const userContent = {
    user: {
      content: (
        <ul className="space-y-2">
          <li
            className={`flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-[20px] cursor-pointer ${
              selectedItem === "account" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleItemClick("account", "account")}
          >
            <User className="w-5 h-5" />
            <span>Account</span>
          </li>
          <li className="space-y-2">
            <div
              className={`flex items-center justify-between hover:bg-gray-100 p-2 rounded-[20px] cursor-pointer ${
                selectedItem === "collection" ? "bg-gray-200" : ""
              }`}
              onClick={() => {
                toggleCollection();
                handleItemClick("collection", "account");
              }}
            >
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Collection</span>
              </div>
              {isCollectionOpen ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </div>
            {isCollectionOpen && (
              <ul className="ml-6 space-y-2">
                <li
                  className="hover:bg-gray-100 p-2 rounded-[20px] cursor-pointer"
                  onClick={() => handleItemClick("school", "school")}
                >
                  School
                </li>
                <li
                  className="hover:bg-gray-100 p-2 rounded-[20px] cursor-pointer"
                  onClick={() => handleItemClick("accommodation", "accommodation")}
                >
                  Accommodation
                </li>
                <li
                  className="hover:bg-gray-100 p-2 rounded-[20px] cursor-pointer"
                  onClick={() => handleItemClick("job", "job")}
                >
                  Part-time Job
                </li>
              </ul>
            )}
          </li>
        </ul>
      ),
    },
    admin: {
      content: (
        <ul className="space-y-2">
          <li
            className={`flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-[20px] cursor-pointer ${
              selectedItem === "account" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleItemClick("account" , "account")}
          >
            <User className="w-5 h-5" />
            <span>Account</span>
          </li>
          <li
            
            className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-[20px] cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 21a8 8 0 0 0-16 0" />
              <circle cx="10" cy="8" r="5" />
              <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
            </svg>
            <span>Users</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-[20px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
              <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
              <path d="M18 5v17" />
              <path d="m4 6 8-4 8 4" />
              <path d="M6 5v17" />
              <circle cx="12" cy="9" r="2" />
            </svg>
            <span>School</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-[20px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            <span>Accommodation</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-[20px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 12h.01" />
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              <path d="M22 13a18.15 18.15 0 0 1-20 0" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
            <span>Part time job</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-[20px] cursor-pointer">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z"
                fill="currentColor"
              />
            </svg>
            <span>Sign Out</span>
          </li>
        </ul>
      ),
    },
  };

  return (
    <div
      ref={sidebarRef}
      className={`rounded-tr-[20px] rounded-br-[20px] fixed top-[64px] left-0 h-full w-64 bg-gray-400 text-black p-4 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-10`}
    >
      <div className="flex justify-between items-center mb-6">
        <span></span>
        <button onClick={onClose} className="text-white hover:text-gray-300">
          <X className="w-6 h-6" />
        </button>
      </div>
      <nav>{userContent.user.content}</nav>
    </div>
  );
};

export default Sidebar;