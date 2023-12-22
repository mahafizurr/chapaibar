import React from "react";

const Momin = () => {
  return (
    <div className="flex justify-center m-8 p-4 ">
      <div className=" m-8">
        <p className="text-2xl font-bold mb-2 ">Abdul Momin </p>

        <img
          src="../stafs/02. Abdul Momin.jpg"
          alt="Profile Imaege"
          className=" w-80 h-80 rounded-md  m-4"
        />
      </div>

      <div className="flex flex-col justify-center align-middle text-lg">
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Name:</span> MD. ABDUL MOMIN
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Designation:</span> Office Asistant
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Father's Name:</span> ZILLAR RAHMAN
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Mobile:</span> 01727250117
        </p>

        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Address:</span> Baliaghatta,
          Chowhodditola, Godagari, Rajshahi
        </p>
      </div>
    </div>
  );
};

export default Momin;
