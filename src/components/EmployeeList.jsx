import React from "react";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  return (
    <div className="container">
      <div className="flex justify-center">
        <div className="bg-white m-2 shadow-lg p-6  md:p-10 rounded-lg text-center w-full ">
          <img
            src="/stafs/01. Ali Hadiar.jpg"
            alt="User's Phodto"
            className="mx-auto w-40 h-40 rounded-xl mb-2"
          />

          <div className="p-2">
            <h1 className="text-xl font-semibold text-blue-800">
              <Link to="/alihaider"> ALI HAIDAR</Link>{" "}
            </h1>

            <p className="text-gray-600 text-md">
              <span className="font-bold">Designation: </span> Accountant
              Cum-Computer Operator
            </p>
            <p className="text-gray-600 text-md">
              <span className="font-bold">Mobile: </span> 01711202824
            </p>
          </div>
        </div>
      </div>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="grid gap-8 place-items-center sm:grid-cols-2 lg:grid-cols-2">
            <div className="bg-white m-2 shadow-lg p-6 md:p-10 rounded-lg text-center w-full ">
              <img
                src="/stafs/02. Abdul Momin.jpg"
                alt="User's Pdhoto"
                className="mx-auto w-40 h-40  mb-2"
              />
              <h1 className="text-xl font-semibold text-blue-800">
                <Link to="/momin"> MD. ABDUL MOMIN </Link>{" "}
              </h1>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Designation: </span> Office Asistant
              </p>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Mobile: </span> 01808050117
              </p>
            </div>
            <div className="bg-white m-2 shadow-lg p-6 md:p-10 rounded-lg text-center w-full ">
              <img
                src="/stafs/03 copy. Abul Qasem.jpg"
                alt="User's Phdoto"
                className="mx-auto w-40 h-40  mb-2"
              />
              <h1 className="text-xl font-semibold text-blue-800">
                <Link to="/kasem">MOHD ABUL KASHEM</Link>{" "}
              </h1>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Designation: </span> Librarian
              </p>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Mobile: </span> 01748057460
              </p>
            </div>
            <div className="bg-white m-2 shadow-lg p-6 md:p-10 rounded-lg text-center w-full ">
              <img
                src="/stafs/04. Ataur Rahman Babu.jpg"
                alt="User's dPhoto"
                className="mx-auto w-40 h-40  mb-2"
              />
              <h1 className="text-xl font-semibold text-blue-800">
                <Link to="/babu"> MD. ATAUR RAHMAN (BABU) </Link>{" "}
              </h1>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Designation: </span> Mlss
              </p>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Mobile: </span> 01712362386
              </p>
            </div>
            <div className="bg-white m-2 shadow-lg p-6 md:p-10 rounded-lg text-center w-full ">
              <img
                src="/stafs/05. Abdus Samad.jpg"
                alt="User's Phdoto"
                className="mx-auto w-40 h-40  mb-2"
              />
              <h1 className="text-xl font-semibold text-blue-800">
                <Link to="/samad"> MD. ABDUS SAMAD </Link>{" "}
              </h1>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Designation: </span> Mlss
              </p>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Mobile: </span> 01732826938
              </p>
            </div>
            <div className="bg-white m-2 shadow-lg p-6 md:p-10 rounded-lg text-center w-full ">
              <img
                src="../stafs/06. Milon Ali.jpg"
                alt="employee"
                className="mx-auto w-40 h-40  mb-2"
              />
              <h1 className="text-xl font-semibold text-blue-800">
                <Link to="/milon"> MD. MILON </Link>{" "}
              </h1>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Designation: </span> Mlss
              </p>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Mobile: </span> 01801335615
              </p>
            </div>
            <div className="bg-white m-2 shadow-lg p-6 md:p-10 rounded-lg text-center w-full ">
              <img
                src="../stafs/07. Badol Ali.jpg"
                alt="employee"
                className="mx-auto w-40 h-40  mb-2"
              />
              <h1 className="text-xl font-semibold text-blue-800">
                <Link to="/badol">MD. BADOL </Link>{" "}
              </h1>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Designation: </span> Mlss
              </p>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Mobile: </span> 01803498044
              </p>
            </div>
            <div className="bg-white m-2 shadow-lg p-6 md:p-10 rounded-lg text-center w-full ">
              <img
                src="../stafs/08. Shahin Ali.jpg"
                alt="employee"
                className="mx-auto w-40 h-40  mb-2"
              />
              <h1 className="text-xl font-semibold text-blue-800">
                <Link to="/nurul">MD. NURUL ISLAM SAHIN </Link>{" "}
              </h1>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Designation: </span> Mlss
              </p>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Mobile: </span> 01740586550
              </p>
            </div>
            <div className="bg-white m-2 shadow-lg p-6 md:p-10 rounded-lg text-center w-full ">
              <img
                src="../stafs/09. Sagor Ali.jpg"
                alt="employee"
                className="mx-auto w-40 h-40  mb-2"
              />
              <h1 className="text-xl font-semibold text-blue-800">
                <Link to="/sagor"> MD. SAGOR </Link>{" "}
              </h1>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Designation: </span> Mlss
              </p>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Mobile: </span> 01802905970
              </p>
            </div>
            <div className="bg-white m-2 shadow-lg p-6 md:p-10 rounded-lg text-center w-full ">
              <img
                src="../stafs/10. MD. SABBIR HOSSAIN (EMON).jpg"
                alt="employee"
                className="mx-auto w-40 h-40  mb-2"
              />
              <h1 className="text-xl font-semibold text-blue-800">
                <Link to="/sabbir"> MD. SABBIR HOSSAIN (EMON) </Link>{" "}
              </h1>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Designation: </span> Mlss
              </p>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Mobile: </span> 01758203380
              </p>
            </div>
            <div className="bg-white m-2 shadow-lg p-6 md:p-10 rounded-lg text-center w-full ">
              <img
                src="../stafs/11. Toymur Rahman.jpg"
                alt="employee"
                className="mx-auto w-40 h-40  mb-2"
              />
              <h1 className="text-xl font-semibold text-blue-800">
                <Link to="/toymur"> MD. TOYMUR RAHMAN </Link>{" "}
              </h1>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Designation: </span> Night Gard
              </p>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Mobile: </span> 01745564416
              </p>
            </div>
            <div className="bg-white m-2 shadow-lg p-6 md:p-10 rounded-lg text-center w-full ">
              <img
                src="../stafs/12. Shree Polash Jemeder.jpg"
                alt="employee"
                className="mx-auto w-40 h-40  mb-2"
              />
              <h1 className="text-xl font-semibold text-blue-800">
                <Link to="/palash"> SREE POLASH JAMADER </Link>{" "}
              </h1>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Designation: </span> SREE POLASH
                JAMADER
              </p>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Mobile: </span> 01710139979
              </p>
            </div>
            <div className="bg-white m-2 shadow-lg p-6 md:p-10 rounded-lg text-center w-full ">
              <img
                src="../stafs/13. Shreemoti Minoti Rani.jpg"
                alt="employee"
                className="mx-auto w-40 h-40  mb-2"
              />
              <h1 className="text-xl font-semibold text-blue-800">
                <Link to="/srimoty"> SRIMOTI MINOTI RANI </Link>{" "}
              </h1>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Designation: </span> Sweeper
              </p>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Mobile: </span> 01762483716
              </p>
            </div>
            <div className="bg-white m-2 shadow-lg p-6 md:p-10 rounded-lg text-center w-full ">
              <img
                src="../stafs/14. RIDOY SHAHA.jpg"
                alt="employee"
                className="mx-auto w-40 h-40  mb-2"
              />
              <h1 className="text-xl font-semibold text-blue-800">
                <Link to="/sridoy"> SHREE SRIDOY SAHA </Link>{" "}
              </h1>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Designation: </span> Sweeper
              </p>
              <p className="text-gray-600 text-md">
                <span className="font-bold">Mobile: </span> 01709505834
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployeeList;
