import React from "react";

const EmployeeDetails = () => {
  const EmployeeData = [
    {
      Name: "ALI HAIDAR",
      Designation: "Accountant Cum-Computer Operator",
      FatherName: "ABDUL HOQUE",
      Mobile: "01711202824",
      Address: "Baliaghatta, Chowhodditola, Godagari, Rajshahi",
      Photo: "../stafs/01. Ali Hadiar.jpg",
    },
    {
      Name: "MD. ATAUR RAHMAN (BABU)",
      Designation: "Mlss",
      FatherName: "LATE FOZLUR RAHMAN",
      Mobile: "01712362386",
      Address:
        "Professorpara College Road, Chapainawabganj Sadar, Chapainawabganj",
      Photo: "../stafs/04. Ataur Rahman Babu.jpg",
    },
    {
      Name: "MD. BADOL",
      Designation: "Mlss",
      FatherName: "MD. KASED ALI",
      Mobile: "01723498044",
      Address: "Arambag, Bottolahat, Chapainawabganj Sadar, Chapainawabganj",
      Photo: "../stafs/07. Badol Ali.jpg",
    },
  ];

  return (
    <div className="container pt-4">
      <h3 className="bg-green-700 text-center text-white py-2">
        Employee Details
      </h3>
      <div className="w-full max-w-screen-lg mx-auto mb-8 overflow-x-auto">
        {EmployeeData.map((employee, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center"
          >
            <img
              src={employee.Photo}
              alt={employee.Name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {employee.Name}
            </h3>
            <div className="text-center text-gray-600">
              <p className="mb-2">
                <span className="font-bold">Designation:</span>{" "}
                {employee.Designation}
              </p>
              <p className="mb-2">
                <span className="font-bold">Father's Name:</span>{" "}
                {employee.FatherName}
              </p>
              <p className="mb-2">
                <span className="font-bold">Mobile:</span> {employee.Mobile}
              </p>
              <p className="mb-2">
                <span className="font-bold">Address:</span> {employee.Address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeDetails;
