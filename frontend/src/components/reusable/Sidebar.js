import React from 'react';
import { X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose , userRole }) => {
  const userContent = {
    admin : {
      content: (
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-sm hover:text-gray-600">
              Users
            </a>
          </li>
          <li>
            <a href="#" className="text-sm hover:text-gray-600">
              Settings
            </a>
          </li>
          <li>
            <a  href="#" className="text-sm hover:text-gray-600">
              Logout
            </a>
          </li>
        </ul>
      )
    },
    user : {
      content: (
        <ul className ="space-y-2">
          <li>
            <a href="#" className="text-sm hover:text-gray-600">
              My Profile
            </a>
          </li>
          <li>
            <a href="#" className="text-sm hover:text-gray-600">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="text-sm hover:text-gray-600">
              Logout
            </a>
          </li>
        </ul>
      )
    }
  }
  return (
    <div className={`rounded-tr-[20px] rounded-br-[20px] z-[200000] fixed top-0  left-0 h-full w-64  bg-slate-400 text-black p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="flex justify-between items-center mb-6">
        <span></span>
        <button onClick={onClose} className="text-white hover:text-gray-300">
          <X size={24}/>
        </button>
      </div>
      <nav>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2 hover:bg-slate-100 p-2 rounded-[20px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>
            <span>Users</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-slate-100 p-2 rounded-[20px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-school"><path d="M14 22v-4a2 2 0 1 0-4 0v4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M18 5v17"/><path d="m4 6 8-4 8 4"/><path d="M6 5v17"/><circle cx="12" cy="9" r="2"/></svg>
            <span>School</span>
          </li> 
          <li className="flex items-center space-x-2 hover:bg-slate-100 p-2 rounded-[20px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            <span>Accomodation</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-slate-100 p-2 rounded-[20px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase-business"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
            <span>Part time job</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-slate-100 p-2 rounded-[20px]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z" fill="currentColor"/>
            </svg>
            <span>Sign Out</span>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;