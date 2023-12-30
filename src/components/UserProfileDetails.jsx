import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const apiBaseUrl = "http://localhost:5001/api/user-profiles";

const UserProfileDetails = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Access the 'id' parameter from the URL using useParams
  const { id } = useParams();

  useEffect(() => {
    // Fetch user profile by ID when the component mounts
    const fetchUserProfileById = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/${id}`);
        setUserProfile(response.data);
      } catch (error) {
        setError("Error fetching user profile. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfileById();
  }, [id]);

  return (
    <div className="flex flex-col p-4 max-w-md mx-auto bg-white shadow-md">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userProfile && (
        <>
          <p className="border-b border-gray-300 py-2">
            <span className="font-bold">Serial No: {userProfile.serial}</span>
          </p>
          <p className="border-b border-gray-300 py-2">
            <span className="font-bold">BBC Sanad No: {userProfile.bbc}</span>
          </p>
          <img
            src={userProfile.imageSrc || "./images/default-image.jpg"}
            alt="Profile Images"
            className="w-80 h-80 object-cover m-4"
          />
          <div>{/* Other details */}</div>
        </>
      )}
    </div>
  );
};

export default UserProfileDetails;
