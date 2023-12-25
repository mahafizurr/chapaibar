import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const MemberDirectories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Add logic to fetch data for the new page, e.g., API request, etc.
  };

  const MemberData = [
    {
      SerialNo: 1,
      BBCSanadNo: 4,
      Name: "MD. SADIQUATL BARI (BINA)",
      MobileNumber: "01937410755",
      Photo: "./adv/Sadikatul Bari Bina 01937410755.jpg",
      Remark: "",
    },
    {
      SerialNo: 2,
      BBCSanadNo: 5,
      Name: "ALHAJ MD. ABDUR RAHMAN (1)",
      MobileNumber: "01723913840",
      Photo: "./adv/Abdur Rahman  01723913840.jpg",
      Remark: "",
    },
    {
      SerialNo: 3,
      BBCSanadNo: 6,
      Name: "ALHAJ MD. SHAHJAHAN BISWAS",
      MobileNumber: "01715292217",
      Photo: "./adv/Sahjahan Biswas 01715292217.jpg",
      Remark: "",
    },
    {
      SerialNo: 4,
      BBCSanadNo: 31,
      Name: "ALHAJ MD. MOQBUL HOSSAIN",
      MobileNumber: "01716507996",
      Photo: "./adv/Mokbul Hossen 01716507996.jpg",
      Remark: "",
    },
    {
      SerialNo: 5,
      BBCSanadNo: 32,
      Name: "MD. GHULAM MOSTAFA (1)",
      MobileNumber: "01712278241",
      Photo: "./adv/Golam Mostofa (1) 01712278241.jpg",
      Remark: "",
    },
    {
      SerialNo: 6,
      BBCSanadNo: 47,
      Name: "MD. SHAHJAHAN HOSSAIN",
      MobileNumber: "01712243684",
      Photo: "",
      Remark: "",
    },
    {
      SerialNo: 7,
      BBCSanadNo: "44A",
      Name: "MD. GOLAM KABIR ",
      MobileNumber: "01712138118",
      Photo: "",
      Remark: "",
    },
    {
      SerialNo: 8,
      BBCSanadNo: 49,
      Name: "MD. TAHER JAMIL ",
      MobileNumber: "01915396095",
      Photo: "",
      Remark: "",
    },
    {
      SerialNo: 9,
      BBCSanadNo: 50,
      Name: "ALHAJ SHAH MAINUDDIN AHMED",
      MobileNumber: "01726762246",
      Photo: "",
      Remark: "",
    },
    {
      SerialNo: 10,
      BBCSanadNo: 51,
      Name: "MD. OBAIDUL HOQUE",
      MobileNumber: "01726257968",
      Photo: "",
      Remark: "",
    },
  ];

  return (
    <div>
      <h1 className="bg-slate-800 text-xl p-4 text-center text-white">
        Members Directory
      </h1>

      <div className="w-full max-w-screen-lg mx-auto">
        <table className=" text-center w-full border border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Serial No:</th>
              <th className="border p-2">BBC Sanad No:</th>
              <th className="border p-2">Name:</th>
              <th className="border p-2">Mobile Number:</th>
              <th className="border p-2">Photo:</th>
              <th className="border p-2">Remark:</th>
            </tr>
          </thead>
          <tbody>
            {MemberData.map((m) => (
              <tr className="bg-gray-100">
                <td className="border p-2">
                  <Link to="/"> {m.SerialNo}</Link>{" "}
                </td>
                <td className="border p-2">{m.BBCSanadNo}</td>
                <td className="border p-2">{m.Name}</td>
                <td className="border p-2">{m.MobileNumber}</td>
                <td className="border p-2">
                  <img src={m.Photo} alt="advocate" className="w-20 h-20 " />
                </td>
                <td className="border p-2">{m.Remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <br />
    </div>
  );
};

export default MemberDirectories;
