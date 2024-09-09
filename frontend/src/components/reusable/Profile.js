import React, { useState } from 'react';
import { Eye, EyeOff, Menu , Edit2, Link} from 'lucide-react';
import { Users } from '../UsersDb';
import FormInput from './InputField';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import the Sidebar component



const UserProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const inputBoxSize = "max-w-[290px]";
  const { username: userName } = useParams();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const {username : name} = useParams();
  return (
    <>
    <div className="relative">
      {!sidebarOpen && (
        <button 
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-20 p-2  text-black rounded-md"
        >
          <Menu size={24} />
        </button>
      )}

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="max-w-2xl mx-auto p-6 bg-white rounded-3xl">
      
      <div className="flex items-center justify-center mb-6">
        <div className="relative">
          <div className="w-24 h-24 bg-sky-200 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
            <Edit2 size={16} />
          </button>
        </div>
      </div>
      <p className="text-center mb-8">{name}</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Entity</label>
          <input type="text" value="University" className="p-2 rounded-[20px] shadow-md  w-full max-w-[300px]" readOnly />
        </div>
        
        <div className="flex sm:flex-col gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input type="text" placeholder="First Name" className="p-2 rounded-[20px] shadow-md  w-full max-w-[300px]" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input type="text" placeholder="Last Name" className="p-2 rounded-[20px] shadow-md  w-full max-w-[300px]" />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input type="text" value="Street#12, SenSok, Phnom Penh" className="p-2 rounded-[20px] shadow-md  w-full max-w-[300px]" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" value="Example@gmail.com" className="p-2 rounded-[20px] shadow-md  w-full max-w-[300px]" readOnly />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              value="••••••••••" 
              className="p-2 rounded-[20px] shadow-md  w-full max-w-[300px] pr-10" 
              readOnly 
            />
            <button 
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute inset-y-0 sm:left-[180px] left-[270px] pr-3 flex items-center"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        
        <button className="mt-4 px-4 py-2 bg-sky-200 text-sky-800 rounded-[20px] hover:bg-sky-300 transition duration-300" >
          Reset Password
        </button>
      </div>
    </div>
    </div>
    </>
  );
};

export default UserProfile;