import React from "react";
import { useParams } from "react-router-dom";
import { advocateData } from "./Data";

const AdvocateDetailsPage = () => {
  const { id } = useParams();

  const advocate = advocateData.find(
    (advocate) => advocate.userId === parseInt(id)
  );

  if (!advocate) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl text-red-500">Page not found</p>
      </div>
    );
  }
  return (
    <div className="max-w-md mx-auto p-4">
      <img
        className="rounded h-80 w-80 mx-auto"
        src={advocate.photo}
        alt={advocate.name}
      />
      <p className="text-xl font-bold text-center">{advocate.name}</p>
      <div className="mt-4">
        <p>
          <span className="font-semibold">Father's Name:</span>{" "}
          {advocate.fatherName}
        </p>
        <p>
          <span className="font-semibold">Mobile Number:</span>{" "}
          {advocate.mobileNumber}
        </p>
        <p>
          <span className="font-semibold">Address:</span> {advocate.address}
        </p>
        <p>
          <span className="font-semibold">Date of Joining:</span>{" "}
          {advocate.dateofJoining}
        </p>
        <p>
          <span className="font-semibold">Date of Enrollment:</span>{" "}
          {advocate.dateofEnrollment}
        </p>
      </div>
    </div>
  );
};

export default AdvocateDetailsPage;
