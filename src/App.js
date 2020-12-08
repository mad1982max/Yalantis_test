import Header from "./Components/Header/Header.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Components/Main/Main.jsx";
import Employees from "./Components/Employees/Employees";
import Error from "./Components/Error/Error";

console.log("--", process.env.PUBLIC_URL);

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/employees" component={Employees} />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  </Router>
);
export default App;
