import React from "react";

const Kasem = () => {
  return (
    <div className="flex justify-center m-8 p-4 ">
      <div className=" m-8">
        <p className="text-2xl font-bold mb-2 ">MOHD ABUL KASHEM </p>

        <img
          src="../stafs/03 copy. Abul Qasem.jpg"
          alt="Profile Imsage"
          className=" w-80 h-80 rounded-md  m-4"
        />
      </div>

      <div className="flex flex-col justify-center align-middle text-lg">
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Name:</span> MOHD ABUL KASHEM
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Designation:</span> Librarian
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Father's Name:</span> MD. BODOR ALI
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Mobile:</span> 01747257460
        </p>

        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Address:</span> Sabdul Biswaser Tola,
          Debinagar, Chapainawabganj Sadar, Chapainawabganj
        </p>
      </div>
    </div>
  );
};

export default Kasem;
