import React from "react";
import "./alphabet.css";
import constants from "../../Shares/constants";

const Alphabet = (props) => {
  return (
    <div className="alphabet-wrapper">
      <div className="alpha-header">EMPLOYEES</div>
      {constants.alphabet.map((alpha, i) => {
        return (
          <div key={alpha.toString()} className="alpha-group">
            <div className="alpha">{alpha}</div>
            <div className="alpha-people"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Alphabet;
