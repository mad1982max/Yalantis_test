import React, { useState, useEffect } from "react";
import APIEmployees from "../../Services/api";
import "./employees.css";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmplyees = async () => {
      try {
        let response = await APIEmployees.get();
        console.log(response);
        setEmployees(response.data);
      } catch (error) {
        console.log("some error", error);
      }
    };

    getEmplyees();
  }, []);
  return <div className="employees">Employees {employees.length}</div>;
};

export default Employees;
