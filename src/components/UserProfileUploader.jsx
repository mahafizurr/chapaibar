import React, { useState, useEffect } from "react";
import axios from "axios";

const apiBaseUrl = "http://localhost:5001/api/user-profiles";

const UserProfileUploader = () => {
  const [userProfiles, setUserProfiles] = useState([]);
  const [newUserProfile, setNewUserProfile] = useState({
    bbc: "",
    name: "",
    fname: "",
    address: "",
    mobile: 0,
    joining: "",
    enroll: "",
    remark: "",
    // ... other fields
  });

  useEffect(() => {
    // Fetch all user profiles when the component mounts
    const fetchUserProfiles = async () => {
      try {
        const response = await axios.get(apiBaseUrl);
        setUserProfiles(response.data);
      } catch (error) {
        console.error("Error fetching user profiles:", error);
      }
    };

    fetchUserProfiles();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleCreateUserProfile = async () => {
    try {
      const response = await axios.post(apiBaseUrl, newUserProfile);
      setUserProfiles((prevProfiles) => [...prevProfiles, response.data]);
      setNewUserProfile({
        bbc: "",
        name: "",
        fname: "",
        address: "",
        mobile: 0,
        joining: "",
        enroll: "",
        remark: "",
        // ... other fields
      });
    } catch (error) {
      console.error("Error creating user profile:", error);
    }
  };

  const handleUpdateUserProfile = async (id) => {
    try {
      const response = await axios.put(`${apiBaseUrl}/${id}`, newUserProfile);
      setUserProfiles((prevProfiles) =>
        prevProfiles.map((profile) =>
          profile._id === id ? response.data : profile
        )
      );
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  const handleDeleteUserProfile = async (id) => {
    try {
      await axios.delete(`${apiBaseUrl}/${id}`);
      setUserProfiles((prevProfiles) =>
        prevProfiles.filter((profile) => profile._id !== id)
      );
    } catch (error) {
      console.error("Error deleting user profile:", error);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profiles</h1>
      <ul className="mb-4">
        {userProfiles.map((profile) => (
          <li key={profile._id} className="mb-2">
            <span className="mr-2">{profile.serial}</span>
            <span className="mr-2">{profile.bbc}</span>
            {profile.name}{" "}
            <button
              onClick={() => handleUpdateUserProfile(profile._id)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            >
              Update
            </button>{" "}
            <button
              onClick={() => handleDeleteUserProfile(profile._id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-bold mb-4">Create New User Profile</h2>
      <div className="mb-4">
        <label className="block mb-2">
          bbc:
          <input
            className="border rounded px-2 py-1 w-full"
            type="text"
            name="bbc"
            value={newUserProfile.bbc}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="block mb-2">
          Name:
          <input
            className="border rounded px-2 py-1 w-full"
            type="text"
            name="name"
            value={newUserProfile.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="block mb-2">
          Father Name:
          <input
            className="border rounded px-2 py-1 w-full"
            type="text"
            name="fname"
            value={newUserProfile.fname}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="block mb-2">
          Address:
          <input
            className="border rounded px-2 py-1 w-full"
            type="text"
            name="address"
            value={newUserProfile.address}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="block mb-2">
          Mobile:
          <input
            className="border rounded px-2 py-1 w-full"
            type="number"
            name="mobile"
            value={newUserProfile.mobile}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="block mb-2">
          Joining:
          <input
            className="border rounded px-2 py-1 w-full"
            type="text"
            name="joining"
            value={newUserProfile.joining}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="block mb-2">
          Enroll:
          <input
            className="border rounded px-2 py-1 w-full"
            type="text"
            name="enroll"
            value={newUserProfile.enroll}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="block mb-2">
          Remark:
          <input
            className="border rounded px-2 py-1 w-full"
            type="text"
            name="remark"
            value={newUserProfile.remark}
            onChange={handleInputChange}
          />
        </label>
        <br />
        {/* Add similar input fields for other profile properties */}
        <button
          onClick={handleCreateUserProfile}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfileUploader;
