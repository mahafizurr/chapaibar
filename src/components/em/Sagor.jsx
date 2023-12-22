import React from "react";

const Sagor = () => {
  return (
    <div className="flex justify-center m-8 p-4 ">
      <div className=" m-8">
        <p className="text-2xl font-bold mb-2 ">MD. SAGOR </p>

        <img
          src="../stafs/09. Sagor Ali.jpg"
          alt="Profile Imagre"
          className=" w-80 h-80 rounded-md  m-4"
        />
      </div>

      <div className="flex flex-col justify-center align-middle text-lg">
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Name:</span> MD. SAGOR
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Designation:</span> Mlss
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Father's Name:</span> MD. KASED ALI
        </p>
        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Mobile:</span> 01722905970
        </p>

        <p className="border-b border-gray-300 py-2">
          <span className="font-bold">Address:</span> 459, Arambag, Bottolahat,
          Chapainawabganj Sadar, Chapainawabganj
        </p>
      </div>
    </div>
  );
};

export default Sagor;
