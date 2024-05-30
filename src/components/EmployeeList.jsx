import React from "react";
import { Link } from "react-router-dom";

const employees = [
  {
    name: "ALI HAIDAR",
    designation: "Accountant Cum-Computer Operator",
    mobile: "01711202824",
    img: "/stafs/01. Ali Hadiar.jpg",
    path: "/alihaider",
  },
  {
    name: "MD. ABDUL MOMIN",
    designation: "Office Assistant",
    mobile: "01808050117",
    img: "/stafs/02. Abdul Momin.jpg",
    path: "/momin",
  },
  {
    name: "MOHD ABUL KASHEM",
    designation: "Librarian",
    mobile: "01748057460",
    img: "/stafs/03 copy. Abul Qasem.jpg",
    path: "/kasem",
  },
  {
    name: "MD. ATAUR RAHMAN (BABU)",
    designation: "Mlss",
    mobile: "01712362386",
    img: "/stafs/04. Ataur Rahman Babu.jpg",
    path: "/babu",
  },
  {
    name: "MD. ABDUS SAMAD",
    designation: "Mlss",
    mobile: "01732826938",
    img: "/stafs/05. Abdus Samad.jpg",
    path: "/samad",
  },
  {
    name: "MD. MILON",
    designation: "Mlss",
    mobile: "01801335615",
    img: "/stafs/06. Milon Ali.jpg",
    path: "/milon",
  },
  {
    name: "MD. BADOL",
    designation: "Mlss",
    mobile: "01803498044",
    img: "/stafs/07. Badol Ali.jpg",
    path: "/badol",
  },
  {
    name: "MD. NURUL ISLAM SAHIN",
    designation: "Mlss",
    mobile: "01740586550",
    img: "/stafs/08. Shahin Ali.jpg",
    path: "/nurul",
  },
  {
    name: "MD. SAGOR",
    designation: "Mlss",
    mobile: "01802905970",
    img: "/stafs/09. Sagor Ali.jpg",
    path: "/sagor",
  },
  {
    name: "MD. SABBIR HOSSAIN (EMON)",
    designation: "Mlss",
    mobile: "01758203380",
    img: "/stafs/10. MD. SABBIR HOSSAIN (EMON).jpg",
    path: "/sabbir",
  },
  {
    name: "MD. TOYMUR RAHMAN",
    designation: "Night Guard",
    mobile: "01745564416",
    img: "/stafs/11. Toymur Rahman.jpg",
    path: "/toymur",
  },
  {
    name: "SREE POLASH JAMADER",
    designation: "Sweeper",
    mobile: "01710139979",
    img: "/stafs/12. Shree Polash Jemeder.jpg",
    path: "/palash",
  },
  {
    name: "SRIMOTI MINOTI RANI",
    designation: "Sweeper",
    mobile: "01762483716",
    img: "/stafs/13. Shreemoti Minoti Rani.jpg",
    path: "/srimoty",
  },
  {
    name: "SHREE SRIDOY SAHA",
    designation: "Sweeper",
    mobile: "01709505834",
    img: "/stafs/14. RIDOY SHAHA.jpg",
    path: "/sridoy",
  },
];

const EmployeeCard = ({ employee }) => (
  <div className="m-2 shadow-lg p-6 md:p-10 rounded-lg text-center w-full">
    <img
      src={employee.img}
      alt={`${employee.name} photos`}
      className="mx-auto w-40 h-40 rounded-full mb-4 object-cover"
    />
    <h1 className="text-xl font-semibold text-blue-800">
      <Link to={employee.path}>{employee.name}</Link>
    </h1>
    <p className="text-gray-600 text-md">
      <span className="font-bold">Designation: </span> {employee.designation}
    </p>
    <p className="text-gray-600 text-md">
      <span className="font-bold">Mobile: </span> {employee.mobile}
    </p>
  </div>
);

const EmployeeList = () => {
  return (
    <div className="container ">
      <section className="bg-gray-100 pb-2 pt-2 dark:bg-dark lg:pb-10 lg:pt-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {employees.map((employee) => (
              <EmployeeCard key={employee.name} employee={employee} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployeeList;
