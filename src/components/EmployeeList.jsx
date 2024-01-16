import React from "react";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="bg-white m-2 shadow-lg p-6  sm:p-8 md:p-10 rounded-lg text-center w-full max-w-md">
          <img
            src="/stafs/01. Ali Hadiar.jpg"
            alt="User's Phodto"
            className="mx-auto w-40 h-40 rounded-xl mb-4"
          />

          <div className="p-4">
            <h1 className="text-2xl font-semibold text-blue-800">
              <Link to="/alihaider"> ALI HAIDAR</Link>{" "}
            </h1>

            <p className="text-gray-600 text-sm">
              <span className="font-bold">Designation: </span> Accountant
              Cum-Computer Operator
            </p>
            <p className="text-gray-600 text-lg">
              <span className="font-bold">Mobile: </span> 01711202824
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-gray-100 p-4 min-h-screen flex items-center justify-center flex-wrap">
        <div className="bg-white m-2 shadow-lg p-6 sm:p-8 md:p-10 rounded-lg text-center w-full max-w-md">
          <img
            src="/stafs/02. Abdul Momin.jpg"
            alt="User's Pdhoto"
            className="mx-auto w-40 h-40  mb-4"
          />
          <h1 className="text-2xl font-semibold text-blue-800">
            <Link to="/momin"> MD. ABDUL MOMIN </Link>{" "}
          </h1>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Designation: </span> Office Asistant
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Mobile: </span> 01727250117
          </p>
        </div>
        <div className="bg-white m-2 shadow-lg p-6 sm:p-8 md:p-10 rounded-lg text-center w-full max-w-md">
          <img
            src="/stafs/03 copy. Abul Qasem.jpg"
            alt="User's Phdoto"
            className="mx-auto w-40 h-40  mb-4"
          />
          <h1 className="text-2xl font-semibold text-blue-800">
            <Link to="/kasem">MOHD ABUL KASHEM</Link>{" "}
          </h1>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Designation: </span> Librarian
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Mobile: </span> 01747257460
          </p>
        </div>
        <div className="bg-white m-2 shadow-lg p-6 sm:p-8 md:p-10 rounded-lg text-center w-full max-w-md">
          <img
            src="/stafs/04. Ataur Rahman Babu.jpg"
            alt="User's dPhoto"
            className="mx-auto w-40 h-40  mb-4"
          />
          <h1 className="text-2xl font-semibold text-blue-800">
            <Link to="/babu"> MD. ATAUR RAHMAN (BABU) </Link>{" "}
          </h1>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Designation: </span> Mlss
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Mobile: </span> 01712362386
          </p>
        </div>
        <div className="bg-white m-2 shadow-lg p-6 sm:p-8 md:p-10 rounded-lg text-center w-full max-w-md">
          <img
            src="/stafs/05. Abdus Samad.jpg"
            alt="User's Phdoto"
            className="mx-auto w-40 h-40  mb-4"
          />
          <h1 className="text-2xl font-semibold text-blue-800">
            <Link to="/samad"> MD. ABDUS SAMAD </Link>{" "}
          </h1>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Designation: </span> Mlss
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Mobile: </span> 01732826938
          </p>
        </div>
        <div className="bg-white m-2 shadow-lg p-6 sm:p-8 md:p-10 rounded-lg text-center w-full max-w-md">
          <img
            src="../stafs/06. Milon Ali.jpg"
            alt="employee"
            className="mx-auto w-40 h-40  mb-4"
          />
          <h1 className="text-2xl font-semibold text-blue-800">
            <Link to="/milon"> MD. MILON </Link>{" "}
          </h1>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Designation: </span> Mlss
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Mobile: </span> 01721335615
          </p>
        </div>
        <div className="bg-white m-2 shadow-lg p-6 sm:p-8 md:p-10 rounded-lg text-center w-full max-w-md">
          <img
            src="../stafs/07. Badol Ali.jpg"
            alt="employee"
            className="mx-auto w-40 h-40  mb-4"
          />
          <h1 className="text-2xl font-semibold text-blue-800">
            <Link to="/badol">MD. BADOL </Link>{" "}
          </h1>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Designation: </span> Mlss
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Mobile: </span> 01723498044
          </p>
        </div>
        <div className="bg-white m-2 shadow-lg p-6 sm:p-8 md:p-10 rounded-lg text-center w-full max-w-md">
          <img
            src="../stafs/08. Shahin Ali.jpg"
            alt="employee"
            className="mx-auto w-40 h-40  mb-4"
          />
          <h1 className="text-2xl font-semibold text-blue-800">
            <Link to="/nurul">MD. NURUL ISLAM SAHIN </Link>{" "}
          </h1>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Designation: </span> Mlss
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Mobile: </span> 01740586550
          </p>
        </div>
        <div className="bg-white m-2 shadow-lg p-6 sm:p-8 md:p-10 rounded-lg text-center w-full max-w-md">
          <img
            src="../stafs/09. Sagor Ali.jpg"
            alt="employee"
            className="mx-auto w-40 h-40  mb-4"
          />
          <h1 className="text-2xl font-semibold text-blue-800">
            <Link to="/sagor"> MD. SAGOR </Link>{" "}
          </h1>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Designation: </span> Mlss
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Mobile: </span> 01722905970
          </p>
        </div>
        <div className="bg-white m-2 shadow-lg p-6 sm:p-8 md:p-10 rounded-lg text-center w-full max-w-md">
          <img
            src="../stafs/10. MD. SABBIR HOSSAIN (EMON).jpg"
            alt="employee"
            className="mx-auto w-40 h-40  mb-4"
          />
          <h1 className="text-2xl font-semibold text-blue-800">
            <Link to="/sabbir"> MD. SABBIR HOSSAIN (EMON) </Link>{" "}
          </h1>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Designation: </span> Mlss
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Mobile: </span> 01758203372
          </p>
        </div>
        <div className="bg-white m-2 shadow-lg p-6 sm:p-8 md:p-10 rounded-lg text-center w-full max-w-md">
          <img
            src="../stafs/11. Toymur Rahman.jpg"
            alt="employee"
            className="mx-auto w-40 h-40  mb-4"
          />
          <h1 className="text-2xl font-semibold text-blue-800">
            <Link to="/toymur"> MD. TOYMUR RAHMAN </Link>{" "}
          </h1>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Designation: </span> Night Gard
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Mobile: </span> 01745564416
          </p>
        </div>
        <div className="bg-white m-2 shadow-lg p-6 sm:p-8 md:p-10 rounded-lg text-center w-full max-w-md">
          <img
            src="../stafs/12. Shree Polash Jemeder.jpg"
            alt="employee"
            className="mx-auto w-40 h-40  mb-4"
          />
          <h1 className="text-2xl font-semibold text-blue-800">
            <Link to="/palash"> SREE POLASH JAMADER </Link>{" "}
          </h1>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Designation: </span> SREE POLASH JAMADER
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Mobile: </span> 01710139979
          </p>
        </div>
        <div className="bg-white m-2 shadow-lg p-6 sm:p-8 md:p-10 rounded-lg text-center w-full max-w-md">
          <img
            src="../stafs/13. Shreemoti Minoti Rani.jpg"
            alt="employee"
            className="mx-auto w-40 h-40  mb-4"
          />
          <h1 className="text-2xl font-semibold text-blue-800">
            <Link to="/srimoty"> SRIMOTI MINOTI RANI </Link>{" "}
          </h1>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Designation: </span> Sweeper
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Mobile: </span> 01762483716
          </p>
        </div>
        <div className="bg-white m-2 shadow-lg p-6 sm:p-8 md:p-10 rounded-lg text-center w-full max-w-md">
          <img
            src="../stafs/14. RIDOY SHAHA.jpg"
            alt="employee"
            className="mx-auto w-40 h-40  mb-4"
          />
          <h1 className="text-2xl font-semibold text-blue-800">
            <Link to="/sridoy"> SHREE SRIDOY SAHA </Link>{" "}
          </h1>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Designation: </span> Sweeper
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-bold">Mobile: </span> 01709505834
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
