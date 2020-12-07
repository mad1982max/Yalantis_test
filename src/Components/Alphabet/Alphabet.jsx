import React, { useState, useEffect } from "react";
import "./alphabet.css";
import constants from "../../Shares/constants";

const Alphabet = ({ emplList, checkPerson }) => {
  const [checkedArr, setCheckedArr] = useState([]);

  useEffect(() => {
    checkPerson(checkedArr);
  }, [checkedArr, checkPerson]);

  const findPeopleByLetter = (array, letter) =>
    array
      .filter((item) => item.lastName.startsWith(letter.toUpperCase()))
      .sort((a, b) => (a.lastName > b.lastName ? 1 : -1));

  const letterBlock = () => {
    return constants.alphabet.map((alpha) => {
      let peopleByLetter = findPeopleByLetter(emplList, alpha);

      return (
        <div key={alpha} className="alpha-group">
          <div className="alpha">{alpha.toUpperCase()}</div>
          {peopleByLetter.length > 0
            ? peopleByLetter.map((item, i) => (
                <div key={item.id} className="alpha-people">
                  <label>
                    <input
                      type="checkbox"
                      name="employee"
                      id={item.id}
                      onChange={checkBoxClick}
                    />
                    {item.lastName} {item.firstName}
                  </label>
                </div>
              ))
            : "--"}
        </div>
      );
    });
  };

  const checkBoxClick = (e) => {
    const id = e.target.id;

    if (checkIfExist(checkedArr, id) > -1) {
      setCheckedArr(checkedArr.filter((item) => item !== id));
    } else {
      setCheckedArr([...checkedArr, id]);
    }
  };

  const checkIfExist = (arr, id) => arr.indexOf(id);

  return (
    <div className="alphabet-wrapper">
      <div className="alpha-header">EMPLOYEES</div>
      {emplList.length > 0 && letterBlock()}
    </div>
  );
};

export default Alphabet;
