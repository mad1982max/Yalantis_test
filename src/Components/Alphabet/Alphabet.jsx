import React, { useState } from "react";
import "./alphabet.css";
import constants from "../../Shares/constants";

const Alphabet = ({ emplList, checkPerson }) => {
  const [checkedArr, setCheckedArr] = useState([]);

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
    let id = e.target.id;

    if (checkIfExist(checkedArr, id) > -1) {
      console.log("del");
      setCheckedArr(checkedArr.filter((item) => item !== id));
    } else {
      console.log("add");
      setCheckedArr([...checkedArr, id]);
    }

    console.log("--", checkedArr);
  };

  const checkIfExist = (arr, id) => {
    return arr.indexOf(id);
  };

  return (
    <div className="alphabet-wrapper">
      <div className="alpha-header">EMPLOYEES</div>
      {emplList.length > 0 && letterBlock()}
    </div>
  );
};

export default Alphabet;
