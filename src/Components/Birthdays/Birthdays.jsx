import React from "react";
import "./birthdays.css";
import constants from "../../Shares/constants";

const Birthdays = ({ checked }) => (
  <>
    <div className="birthdays-wrapper">
      <div className="birthdays-header">EMPLOYEES BIRTHDAY</div>
      {checked.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  </>
);

export default Birthdays;
