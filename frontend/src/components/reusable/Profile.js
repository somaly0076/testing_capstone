import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

const UserProfile = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 font-sans">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6">Account</h1>
        
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 bg-sky-200 rounded-full flex items-center justify-center mb-2">
            <span className="text-4xl text-gray-600">GR</span>
          </div>
          <p className="text-sm text-gray-600">Full Name</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="flex-1 p-2 border rounded-md" />
              <input type="text" placeholder="Last Name" className="flex-1 p-2 border rounded-md" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" value="Example@gmail.com" className="w-full p-2 border rounded-md" readOnly />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                value="••••••••••••••" 
                className="w-full p-2 border rounded-md pr-10" 
                readOnly 
              />
              <button 
                onClick={() => setShowPassword(!showPassword)} 
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          
          <button className="w-full bg-sky-200 text-sky-800 p-2 rounded-md hover:bg-sky-300 transition duration-300">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;