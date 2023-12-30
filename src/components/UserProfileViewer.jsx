import React, { useState, useEffect } from "react";
import axios from "axios";

const apiBaseUrl = "https://chapaibackend.vercel.app/api/user-profiles";

const UserProfileViewer = () => {
  const [userProfiles, setUserProfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all user profiles when the component mounts
    const fetchUserProfiles = async () => {
      try {
        const response = await axios.get(
          `${apiBaseUrl}?page=${currentPage}&limit=${perPage}`
        );
        setUserProfiles(response.data);
        setLoading();
        setError();
      } catch (error) {
        console.error("Error fetching user profiles:", error);
      }
    };

    fetchUserProfiles();
  }, [currentPage, perPage]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredLawyers = userProfiles.filter((lawyer) =>
    lawyer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="w-full max-w-screen-lg mx-auto mt-8 mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded w-full"
          placeholder="Search"
        />
      </div>
      <div className="w-full max-w-screen-lg mx-auto">
        <table className="text-center w-full border border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Serial No:</th>
              <th className="border p-2">BBC Sanad No:</th>
              <th className="border p-2">Name:</th>
              <th className="border p-2">Mobile Number:</th>
              <th className="border p-2">Photo:</th>
              <th className="border p-2">Remark:</th>
            </tr>
          </thead>
          <tbody>
            {loading && <p>Loading user profiles...</p>}
            {error && <p>{error}</p>}
            {userProfiles.length > 0 && (
              <>
                {userProfiles.map((profile) => (
                  <tr key={profile._id} className="bg-gray-100">
                    <td className="border p-2">{profile.serial}</td>
                    <td className="border p-2">{profile.bbc}</td>
                    <td className="border p-2"><Link to={`/user/${profile._id}`}>{profile.name}</Link></td>
                    <td className="border p-2">{profile.mobile}</td>
                    <td className="border p-2">
                      <img
                        src={profile.profileImage}
                        alt="advocate"
                        className="w-20 h-20 object-cover"
                      />
                    </td>
                    {/*  <td className="border p-2">{profile.remark}</td> */}
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="flex bg-blue-500 text-white px-3 py-2 mx-2 my-2 cursor-pointer rounded"
        >
          Previous
        </button>
        <span className="flex bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 mx-2 my-2 cursor-pointer rounded">
          {" "}
          Page {currentPage}{" "}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="flex bg-blue-500 text-white px-3 py-2 mx-2 my-2 cursor-pointer rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserProfileViewer;
