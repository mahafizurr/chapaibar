import React from "react";

const Babu = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center m-4 p-4 bg-gray-50 rounded-lg shadow-lg">
      <div className="flex justify-center md:justify-start m-4">
        <img
          src="../stafs/04. Ataur Rahman Babu.jpg"
          alt="Profile Images"
          className="w-40 h-40 md:w-80 md:h-80 rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col justify-center text-center md:text-left text-lg m-4">
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Name:</span> MD. ATAUR RAHMAN (BABU)
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Designation:</span> Mlss
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Father's Name:</span> LATE FOZLUR RAHMAN
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Mobile:</span> 01712362386
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Address:</span> Professorpara College
          Road, Chapainawabganj Sadar, Chapainawabganj
        </p>
      </div>
    </div>
  );
};

export default Babu;
