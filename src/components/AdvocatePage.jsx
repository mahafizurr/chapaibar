import React, { useState } from "react";
import { Link } from "react-router-dom";
import { advocateData } from "./Data";

const ProfileRow = ({ profile }) => (
  <tr className="bg-gray-100">
    <td className="border p-2">{profile.userId}</td>
    <td className="border p-2">{profile.bbcSanadNo}</td>
    <td className="border p-2 text-blue-800">
      <Link to={`/advocates/${profile.userId}`}>{profile.name}</Link>
    </td>
    <td className="border p-2">{profile.mobileNumber}</td>
    <td className="border p-2">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-20 h-20 object-cover"
      />
    </td>
  </tr>
);

const AdvocatePage = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate index range for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = advocateData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Go to previous page
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Go to next page
  const goToNextPage = () => {
    if (currentPage < Math.ceil(advocateData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="w-full max-w-screen-lg mx-auto mt-8 mb-8">
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Search with advocate name"
        />
      </div>
      <div className="w-full max-w-screen-lg mx-auto mb-8">
        <table className="text-center w-full border border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Serial No:</th>
              <th className="border p-2">BBC Sanad No:</th>
              <th className="border p-2">Name:</th>
              <th className="border p-2">Mobile Number:</th>
              <th className="border p-2">Photo:</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((profile) => (
              <ProfileRow key={profile.userId} profile={profile} />
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 rounded bg-gray-200"
          >
            Previous
          </button>
          {Array.from({
            length: Math.ceil(advocateData.length / itemsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={goToNextPage}
            disabled={
              currentPage === Math.ceil(advocateData.length / itemsPerPage)
            }
            className="px-4 py-2 mx-1 rounded bg-gray-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvocatePage;
