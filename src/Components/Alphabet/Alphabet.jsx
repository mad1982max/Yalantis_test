import React, { useState, useEffect, useLocalStorage } from "react";
import "./alphabet.css";
import constants from "../../Shares/constants";

const Alphabet = ({ emplList, checkPerson }) => {
  const [checkedArr, setCheckedArr] = useState([]);

  useEffect(() => {
    checkPerson(checkedArr);
  }, [checkedArr]);

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
          {peopleByLetter.length > 0 ? (
            peopleByLetter.map((item, i) => (
              <div key={item.id} className="alpha-people">
                <label>
                  <input
                    type="checkbox"
                    name={item.id}
                    id={item.id}
                    onChange={checkBoxClick}
                  />
                  {item.lastName} {item.firstName}
                </label>
              </div>
            ))
          ) : (
            <div className="empty">---</div>
          )}
        </div>
      );
    });
  };

  const checkBoxClick = (e) => {
    const name = e.target.name;

    if (findUserById(checkedArr, name)) {
      setCheckedArr(checkedArr.filter((item) => item.id !== name));
    } else {
      const worker = findUserById(emplList, name);
      setCheckedArr([...checkedArr, worker]);
    }
  };

  const findUserById = (arr, id) => arr.find((item) => item.id === id);

  return (
    <div className="alphabet-wrapper">
      <div className="alpha-header">
        <span>EMPLOYEES</span>
      </div>
      {emplList.length > 0 && letterBlock()}
    </div>
  );
};

export default Alphabet;
