import React, { useState, useEffect } from "react";
import Alphabet from "../Alphabet/Alphabet";
import Birthdays from "../Birthdays/Birthdays";
import APIEmployees from "../../Services/api";
import "./employees.css";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [checkedEmployees, setCheckedEmployees] = useState([]);

  useEffect(() => {
    const getEmplyees = async () => {
      try {
        let response = await APIEmployees.get();
        setEmployees(response.data);
      } catch (error) {
        console.log("some error", error);
      }
    };

    getEmplyees();
    //only once
  }, []);

  const handleCheckPerson = (data) => {
    console.log("--catched on Parent", data);
    setCheckedEmployees(...data);
  };

  return (
    <div className="employees-wrapper">
      <Alphabet emplList={employees} checkPerson={handleCheckPerson} />
      <Birthdays checked={checkedEmployees} />
    </div>
  );
};

export default Employees;
