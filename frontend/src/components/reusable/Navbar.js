import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu ,  X } from "lucide-react";
import Dashboard from '../../assets/svg/menu.svg'
const Navbar = () => {
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("username");

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Universities", to: "/login" },
    { name: "Scholarships", to: "/scholar-ships" },
    { name: "Livelihood", to: "/liveli-hood" },
    { name: "About Us", to: "/about-us" },
    { name: "Extra money", to: "/extra-money" },
  ];

  return (
    <nav className="bg-gray-100 h-[64px] fixed top-0 w-full z-10">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center px-4 py-3">
        <div className="text-xl font-bold">WHERE2</div>
        <div className="flex space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="text-gray-700 hover:text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-md  hover:bg-gray-300">
            <img src={Dashboard}  alt="Dashboard"/>
          </button>
          <button className="p-2 rounded-full  hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <div className="text-xl font-bold">WHERE2</div>
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md  hover:bg-gray-300"
        >
          {isOpen ? <X size={20} /> : <Menu size={20}/>}
        </button>
      </div>

      {/* Mobile Side Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform translate-x-0">
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md  hover:bg-gray-300 float-right"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-grow overflow-y-auto">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
