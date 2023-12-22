import React from "react";

const Palash = () => {
  return (
    <div className="flex justify-center m-8 p-4 ">
      <div className=" m-8">
        <p className="text-2xl font-bold mb-2 ">SREE POLASH JAMADER</p>

        <img
          src="../stafs/12. Shree Polash Jemeder.jpg"
          alt="Profile Imagwe"
          className=" w-80 h-80 rounded-md  m-4"
        />
      </div>

      <div className="flex flex-col justify-center align-middle text-lg">
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Name:</span> SREE POLASH JAMADER
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Designation:</span> Sweeper
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Father's Name:</span> LATE SAM JAMADER
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Mobile:</span> 01710139979
        </p>

        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Address:</span> Lakherajpara,
          Chapainawabganj Sadar, Chapainawabganj
        </p>
      </div>
    </div>
  );
};

export default Palash;
