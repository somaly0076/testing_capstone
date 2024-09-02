import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfile,
  updateProfile,
  setEditing,
  setNewBio,
  resetState,
} from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile, loading, error, isEditing, newBio } = useSelector(
    (state) => state.user
  );
  const fileInputRef = useRef(null);
  const [newPhoto, setNewPhoto] = useState(null);

  useEffect(() => {
    const userName = localStorage.getItem("username");
    if (userName) {
      dispatch(fetchProfile(userName)); // Pass the username to fetchProfile
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate]);

  const handleEditClick = () => {
    dispatch(setEditing(true));
  };

  const handleCancelClick = () => {
    dispatch(setEditing(false));
    dispatch(resetState());
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
    setNewPhoto(null);
  };

  const handleBioChange = (e) => {
    dispatch(setNewBio(e.target.value));
  };

  const handlePhotoChange = (e) => {
    setNewPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userName = localStorage.getItem("username"); // Get the username from localStorage

    if (!userName) {
      console.error("User Name not found in localStorage");
      return;
    }

    const formData = new FormData();
    formData.append("bio", newBio);
    if (newPhoto) {
      formData.append("photo", newPhoto);
    }

    try {
      await dispatch(updateProfile({ userName, formData })).unwrap();
      setNewPhoto(null);
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!profile) {
    return <p>No profile data!</p>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-center mb-6">User Profile</h1>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <img
            src={
              profile.photo
                ? `./../../../backend/uploads/${profile.photo}`
                : "/default-profile.png"
            }
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
          {isEditing && (
            <div className="ml-4">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handlePhotoChange}
                className="mb-2"
                accept="image/*"
              />
              {newPhoto && (
                <img
                  src={URL.createObjectURL(newPhoto)}
                  alt="Preview"
                  className="w-24 h-24 rounded-full"
                />
              )}
            </div>
          )}
        </div>
        <p>
          <strong>First Name:</strong> {profile.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {profile.lastName}
        </p>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
        <p>
          <strong>Bio:</strong>{" "}
          {isEditing ? (
            <>
              <textarea
                value={newBio}
                onChange={handleBioChange}
                placeholder="Write your bio here"
                className="w-full h-24 border border-gray-300 rounded-md px-4 py-2 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancelClick}
                className="ml-2 bg-gray-300 px-4 py-2 rounded mt-2"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              {profile.bio || "Please fill some bio"}
              <button onClick={handleEditClick} className="text-blue-500 ml-2">
                Edit
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
