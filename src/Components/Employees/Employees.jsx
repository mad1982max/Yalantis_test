import React, { useState, useEffect } from "react";
import Alphabet from "../Alphabet/Alphabet";
import Birthdays from "../Birthdays/Birthdays";
import APIEmployees from "../../Services/api";
import "./employees.css";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [checkedEmployees, setCheckedEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timer;
    const getEmplyees = async () => {
      try {
        setIsLoading(true);
        let response = await APIEmployees.get();
        setEmployees(response.data);
        timer = setTimeout(() => setIsLoading(false), 500);
      } catch (error) {
        console.log("some error", error);
      }
      return () => clearTimeout(timer);
    };

    getEmplyees();
    //only once
  }, []);

  const handleCheckPerson = (data) => {
    setCheckedEmployees(data);
  };

  return (
    <>
      {isLoading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
          <div className="loader-text">Loading ...</div>
        </div>
      ) : (
        <div className="employees-wrapper">
          <Alphabet emplList={employees} checkPerson={handleCheckPerson} />
          <Birthdays checked={checkedEmployees} />
        </div>
      )}
    </>
  );
};

export default Employees;
