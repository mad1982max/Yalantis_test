import React from "react";
import "./birthdays.css";
import constants from "../../Shares/constants";

const Birthdays = ({ checked }) => {
  const defineMonth = (date) =>
    new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date(date));

  const findPeopleByMonth = (arr, month) => {
    return arr
      .filter((man) => defineMonth(man.dob) === month)
      .sort((a, b) => new Date(a.dob).getDate() - new Date(b.dob).getDate());
  };

  const createBirhInfoString = (man) =>
    `${man.lastName} ${man.firstName} - ${new Date(
      man.dob
    ).getDate()} ${defineMonth(man.dob)}, ${new Date(
      man.dob
    ).getFullYear()} year`;

  const monthBlock = () => {
    return constants.months.map((month) => {
      let peopleInMonth = findPeopleByMonth(checked, month);
      return (
        <div key={month}>
          {peopleInMonth.length > 0 && (
            <div key={month} className="month-wrapper">
              <div className="month">
                <span>{month}</span>
              </div>

              {peopleInMonth.map((man) => (
                <div key={man.id} className="month-people">
                  {createBirhInfoString(man)}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <>
      <div className="birthdays-wrapper">
        <div className="birthdays-header">
          <span>EMPLOYEES BIRTHDAY</span>
        </div>
        {checked.length > 0 ? (
          monthBlock()
        ) : (
          <div className="message">No selected employees</div>
        )}
      </div>
    </>
  );
};

export default Birthdays;
