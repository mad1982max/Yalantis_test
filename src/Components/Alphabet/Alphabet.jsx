import React from "react";
import "./alphabet.css";
import constants from "../../Shares/constants";

const Alphabet = ({ emplList, checkPerson }) => {
  const findPeopleByLetter = (array, letter) =>
    array.filter((item) => item.lastName.startsWith(letter.toUpperCase()));

  const letterBlock = () => {
    return constants.alphabet.map((alpha) => {
      let peopleByLetter = findPeopleByLetter(emplList, alpha);

      return (
        <div key={alpha} className="alpha-group">
          <div className="alpha">{alpha.toUpperCase()}</div>
          {peopleByLetter.length > 0
            ? peopleByLetter.map((item, i) => (
                <div key={item + i} className="alpha-people">
                  <label htmlFor="employee">
                    {item.lastName} {item.firstName}
                  </label>
                  <input
                    type="checkbox"
                    name="employee"
                    onChange={checkBoxClick}
                  />
                </div>
              ))
            : "--"}
        </div>
      );
    });
  };

  const checkBoxClick = (e) => {
    console.log("click");
  };

  return (
    <div className="alphabet-wrapper">
      <div className="alpha-header">EMPLOYEES</div>
      {emplList.length > 0 && letterBlock()}
    </div>
  );
};

export default Alphabet;
