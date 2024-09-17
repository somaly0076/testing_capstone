import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Dashboard from '../../assets/svg/menu.svg';

const Navbar = () => {
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
    <>
      <nav className="bg-gray-100 h-[64px] fixed top-0 left-0 right-0 z-[1002]">
        {/* Desktop Navbar */}
        <div className="flex justify-center gap-5 items-center px-4 py-3 h-full sm:hidden font-[poppins]">
          <Link to={'/'} className="text-xl font-bold">WHERE2</Link>
          <div className="flex space-x-4 sm:hidden">
            {menuItems.map((item) => (
              <Link key={item.name} to={item.to} className="text-gray-700 hover:text-gray-900">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md hover:bg-gray-300">
              <img src={Dashboard} alt="Dashboard"/>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="sm:flex lg:hidden justify-between items-center px-4 py-3 h-full">
          <Link to={'/'} className="text-xl font-bold">WHERE2</Link>
          <button onClick={toggleMenu} className="p-2  rounded-md hover:bg-gray-300">
            {isOpen ? <X size={20} /> : <Menu size={20}/>}
          </button>
        </div>
      </nav>


      {isOpen && (
        <div className="lg:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out transform translate-x-0 z-[1003]">
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
              <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-gray-300 float-right">
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
    </>
  );
};

export default Navbar;
