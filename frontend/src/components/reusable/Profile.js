import React, { useState , createContext } from "react";
import { Menu, Edit2 } from "lucide-react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect } from "react";


const ProfileField = ({
  label,
  value,
  placeholder,
  readOnly = false,
  type = "text",
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          placeholder={placeholder}
          className="p-2 rounded-[20px] border-[1px] border-black w-full lg:max-w-[300px]"
          readOnly={readOnly}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

const UserProfile = ({ userInfo }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-3xl shadow-md border-[1px] mt-[64px] mb-[64px]">
      <div className="flex items-center justify-center mb-6">
        <div className="relative">
          <div className="w-24 h-24 bg-blue-gray-50 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-black"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
            <Edit2 size={16} />
          </button>
        </div>
      </div>
      <p className="text-center mb-8">{userInfo.lastName}</p>

      <div className="space-y-4">
        {userInfo.entity ? (
          <ProfileField label="Entity" value={userInfo.entity} readOnly />
        ) : null}

        <div className="flex sm:flex-col gap-4">
          <ProfileField
            label="First Name"
            value={userInfo.firstName}
            placeholder="First Name"
          />
          <ProfileField
            label="Last Name"
            value={userInfo.lastName}
            placeholder="Last Name"
          />
        </div>

        {userInfo.location ? (
          <ProfileField label="Location" value={userInfo.location} />
        ) : null}

        <ProfileField
          label="Email"
          value={userInfo.email}
          type="email"
          readOnly
        />
        <ProfileField
          label="Password"
          value="••••••••••"
          type="password"
          readOnly
        />

        <button className="mt-4 px-4 py-2 bg-sky-200 text-sky-800 rounded-[20px] hover:bg-sky-300 transition duration-300">
          Reset Password
        </button>
      </div>
    </div>
  );
};

const UniversityListing = () => {
  const universities = [
    {
      id: 1,
      name: "University of Health Science",
      listedDate: "12/08/2024",
      status: "Requested",
    },
    {
      id: 2,
      name: "University of Cambodia",
      listedDate: "12/09/2024",
      status: "Approved",
    },
    {
      id: 3,
      name: "University of Health Science",
      listedDate: "12/08/2024",
      status: "Requested",
    },
    {
      id: 4,
      name: "University of Health Science",
      listedDate: "12/08/2024",
      status: "Requested",
    },
    {
      id: 5,
      name: "University of Health Science",
      listedDate: "12/08/2024",
      status: "Requested",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl text-blue-600 font-bold">UNIVERSITIES</h1>
        <div className="bg-blue-600 text-white p-4 rounded-lg">
          <p className="text-sm">Total Universities</p>
          <p className="text-4xl font-bold">126</p>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="pb-4">Name</th>
            <th className="pb-4">ID</th>
            <th className="pb-4">Listed Date</th>
            <th className="pb-4">Status</th>
            <th className="pb-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {universities.map((uni) => (
            <tr key={uni.id} className="border-t">
              <td className="py-4">{uni.name}</td>
              <td className="py-4">{uni.id}</td>
              <td className="py-4">{uni.listedDate}</td>
              <td className="py-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    uni.status === "Approved"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                  onClick={uni.status = "Requested"}
                  >
                  {uni.status}
                </span>
              </td>
              <td className="py-4">
                <label class="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                  </div>
                  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Edit
                  </span>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-6">
        <nav className="inline-flex rounded-md shadow">
          <button className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            &lt;
          </button>
          <button className="px-3 py-2 border-t border-b border-gray-300 bg-blue-50 text-blue-600 font-bold">
            1
          </button>
          <button className="px-3 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            ...
          </button>
          <button className="px-3 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            9
          </button>
          <button className="px-3 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            10
          </button>
          <button className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
            &gt;
          </button>
        </nav>
      </div>
    </div>
  );
};
export const SidebarContentContext = createContext();

const Profile = ({ userData }) => {
  const [sidebarContent, setSidebarContent] = useState("account"); 
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { username: name } = useParams();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="relative">
      {!sidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="relative top-4 left-4 z-20 p-2 text-black rounded-md"
        >
          <Menu className="mt-[64px]" size={24} />
        </button>
      )}

      {/* Provide the context to Sidebar */}
      <SidebarContentContext.Provider value={setSidebarContent}>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </SidebarContentContext.Provider>

      <div className="p-4">
        {/* Conditionally render components based on sidebarContent */}
        {sidebarContent === "school" && <UniversityListing />}
        {sidebarContent === "account" && <UserProfile userInfo={userData}/>}
        {/* You can add more conditions for other sidebar items */}
      </div>
    </div>
  );
};

export default Profile;
