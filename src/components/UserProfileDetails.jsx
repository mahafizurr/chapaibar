import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const apiBaseUrl = "https://chapaibackend.vercel.app/api/user-profiles";

const UserProfileDetails = () => {
  const [userProfiles, setUserProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    // Fetch all user profiles when the component mounts
    const fetchUserProfiles = async () => {
      try {
        const response = await axios.get(apiBaseUrl);
        const newData = response.data.find((item) => item.id === parseInt(id));
        setUserProfiles(newData);

        setLoading(false);
        setError(null);
      } catch (error) {
        console.error("Error fetching user profiles:", error);
        setLoading(false);
        setError("Error fetching user profiles. Please try again.");
      }
    };

    fetchUserProfiles();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <p>Serial No: {userProfiles.serial}</p>
          <p>BBC Sanad No: {userProfiles.bbc}</p>
          {/* Add other profile details here */}
        </>
      )}
    </div>
  );
};

export default UserProfileDetails;
