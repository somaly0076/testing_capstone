import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfile,
  updateProfile,
  setEditing,
  setNewBio,
  setNewPhoto,
  resetState,
} from "../features/user/userSlice";
import axios from "axios";

export default function UserProfile() {
  const dispatch = useDispatch();
  const { profile, loading, error, isEditing, newBio, newPhoto } = useSelector(
    (state) => state.user
  );
  const fileInputRef = useRef(null);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const handleEditClick = () => {
    dispatch(setEditing(true));
  };

  const handleCancelClick = () => {
    dispatch(setEditing(false));
    dispatch(resetState());
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleBioChange = (e) => {
    dispatch(setNewBio(e.target.value));
  };

  const handlePhotoChange = (e) => {
    dispatch(setNewPhoto(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newPhoto);

    try {
      const response = await axios.post("/api/users/uploadPhoto", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("File uploaded:", response.data.filePath);
    } catch (err) {
      console.error("Error uploading file:", err);
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
            <form onSubmit={handleSubmit}>
              <textarea
                value={newBio}
                onChange={handleBioChange}
                placeholder="Write your bio here"
                className="w-full h-24 border border-gray-300 rounded-md px-4 py-2 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
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
            </form>
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
