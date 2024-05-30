import React from "react";

import EmployeeList from "./EmployeeList";

function Employees() {
  return (
    <div className="container py-4">
      <h3 className="bg-green-700 text-center text-white py-2">Employee</h3>
      <EmployeeList />
    </div>
  );
}

export default Employees;
