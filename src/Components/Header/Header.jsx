import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import Main from "../Main/Main";
import Employees from "../Employees/Employees";
import Error from "../Error/Error";

import "./header.css";

const Header = () => (
  <Router>
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
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/employees" component={Employees} />
      <Route path="*" component={Error} />
    </Switch>
  </Router>
);
export default Header;
