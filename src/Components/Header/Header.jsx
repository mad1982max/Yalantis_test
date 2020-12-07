import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => (
  <div className="header">
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="selected">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/employees" activeClassName="selected">
          Employees
        </NavLink>
      </li>
    </ul>
  </div>
);
export default Header;
