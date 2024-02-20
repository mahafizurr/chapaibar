import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const apiBaseUrl = "https://chapaibackend.vercel.app/api/user-profiles";

const UserProfileDetails = () => {
  const [userProfiles, setUserProfiles] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchUserProfileById = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/${id}`);
        setUserProfiles(response.data);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setLoading(false);
        setError("Error fetching user profile. Please try again.");
      }
    };

    fetchUserProfileById();
  }, [id]);

  return (
    <div className="flex flex-col p-4 m-4 max-w-md mx-auto bg-white shadow-md">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500 font-bold">{error}</p>
      ) : (
        <>
          <p className="border-b border-gray-300 py-2">
            <span className="font-bold">Serial No:</span> {userProfiles.serial}
          </p>
          <p className="border-b border-gray-300 py-2">
            <span className="font-bold">BBC Sanad No: </span>
            {userProfiles.bbc}
          </p>
          <img
            src="abc.jpg"
            alt="networks error"
            className="w-40 h-40 object-cover border-b border-gray-300 py-2"
          />
          <p className="border-b border-gray-300 py-2">
            <span className="font-bold">Name: </span>
            {userProfiles.name}
          </p>
          <p className="border-b border-gray-300 py-2">
            <span className="font-bold">Father Name: </span>
            {userProfiles.fname}
          </p>
          <p className="border-b border-gray-300 py-2">
            <span className="font-bold">Address: </span>
            {userProfiles.address}
          </p>
          <p className="border-b border-gray-300 py-2">
            <span className="font-bold">Phone Number: </span>
            +880{userProfiles.mobile}
          </p>
          <p className="border-b border-gray-300 py-2">
            <span className="font-bold">Date of Joining: </span>
            {userProfiles.joining}
          </p>
          <p className="border-b border-gray-300 py-2">
            <span className="font-bold">Date of Enrollment: </span>
            {userProfiles.enroll}
          </p>
          {/* Add other details */}
        </>
      )}
    </div>
  );
};

export default UserProfileDetails;
