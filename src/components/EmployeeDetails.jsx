import React from "react";

const EmployeeDetails = () => {
  const EmployeeData = [
    {
      Name: "ALI HAIDAR",
      Designation: "Accountant Cum-Computer Operator",
      FatherName: "ABDUL HOQUE ",
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
    <div className="flex justify-center m-8 p-4 ">
      {EmployeeData.map((d) => (
        <div>
          <div className=" m-8">
            <p className="text-2xl font-bold mb-2 ">{d.Name}</p>
            <img src={d.Photo} alt="r" className=" w-80 h-80 rounded-md  m-4" />
          </div>
          <div className="flex flex-col justify-center align-middle text-lg">
            <p className="border-b border-gray-300 py-2">
              <span className="font-bold">Name:</span> {d.Name}
            </p>
            <p className="border-b border-gray-300 py-2">
              <span className="font-bold">Designation:</span> {d.Designation}
            </p>
            <p className="border-b border-gray-300 py-2">
              <span className="font-bold">Father's Name:</span> {d.FatherName}
            </p>
            <p className="border-b border-gray-300 py-2">
              <span className="font-bold">Mobile:</span> {d.Mobile}
            </p>

            <p className="border-b border-gray-300 py-2">
              <span className="font-bold">Address:</span> {d.Address}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeDetails;
