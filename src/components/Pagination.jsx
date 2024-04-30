import React, { useState } from "react";
import _ from "lodash";

const Pagination = ({ itemsPerPage, data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Pagination logic to slice data based on current page
  const paginatedData = _.chunk(data, itemsPerPage)[currentPage - 1] || [];

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Render your data here */}
      <ul>
        {paginatedData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Pagination buttons */}
      <div>
        {_.range(1, totalPages + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
