import React, { useState, useEffect } from "react";
import "./alphabet.css";
import constants from "../../Shares/constants";

const Alphabet = ({ emplList, checkPerson }) => {
  const [checkedItem, setCheckedItem] = useState(
    JSON.parse(localStorage.getItem("test")) || []
  );

  useEffect(() => {
    let checkedArr = [];
    for (let checkedID of checkedItem) {
      let man = emplList.find((man) => man.id === checkedID);
      if (man) checkedArr.push(man);
    }
    checkPerson(checkedArr);
  }, [checkedItem]);

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
                    checked={checkedItem.includes(item.id)}
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
    let upgradedDataList = [];
    if (checkedItem.includes(name)) {
      upgradedDataList = checkedItem.filter((item) => item !== name);
    } else {
      upgradedDataList = [...checkedItem, name];
    }
    setCheckedItem(upgradedDataList);
    localStorage.setItem("test", JSON.stringify(upgradedDataList));
  };

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
