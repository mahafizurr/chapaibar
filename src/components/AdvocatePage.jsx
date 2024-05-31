import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { advocateData } from "./Data";

const ProfileRow = ({ profile }) => (
  <tr className="bg-gray-100 hover:bg-gray-200">
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
        className="w-20 h-20 object-cover rounded-full"
      />
    </td>
  </tr>
);

const AdvocatePage = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = advocateData.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate index range for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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
    if (currentPage < Math.ceil(filteredData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    const totalPages = pageNumbers.length;
    const pageNumbersToShow = [];

    if (totalPages <= 5) {
      pageNumbersToShow.push(...pageNumbers);
    } else {
      if (currentPage > 3) {
        pageNumbersToShow.push(1);
        if (currentPage > 4) pageNumbersToShow.push("...");
      }

      const startPage = Math.max(2, currentPage - 2);
      const endPage = Math.min(totalPages - 1, currentPage + 2);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbersToShow.push(i);
      }

      if (currentPage < totalPages - 3) {
        if (currentPage < totalPages - 4) pageNumbersToShow.push("...");
        pageNumbersToShow.push(totalPages);
      }
    }

    return pageNumbersToShow.map((number, index) => {
      if (number === "...") {
        return (
          <span key={index} className="px-2 py-1">
            {number}
          </span>
        );
      }
      return (
        <button
          key={index}
          onClick={() => paginate(number)}
          className={`px-2 py-1 rounded-md ${
            currentPage === number
              ? "bg-blue-500 text-white"
              : "bg-white border hover:bg-gray-200"
          }`}
        >
          {number}
        </button>
      );
    });
  };

  // Reset current page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className=" container p-4">
      <div className="w-full max-w-screen-lg mx-auto mt-6 mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Search with advocate name"
        />
      </div>
      <div className="w-full max-w-screen-lg mx-auto mb-8 overflow-x-auto">
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
      </div>
      <div className="w-full max-w-screen-lg mx-auto mb-8 flex justify-center items-center flex-wrap space-x-2">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className={`px-2 py-1 rounded-l-md mb-2 ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-700"
          }`}
        >
          Previous
        </button>
        <div className="flex items-center space-x-2 flex-wrap mb-2">
          {renderPageNumbers()}
        </div>
        <button
          onClick={goToNextPage}
          disabled={currentPage === pageNumbers.length}
          className={`px-2 py-1 rounded-r-md mb-2 ${
            currentPage === pageNumbers.length
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdvocatePage;
