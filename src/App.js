import Header from "./Components/Header/Header.jsx";
import { Route, Switch, HashRouter } from "react-router-dom";
import Main from "./Components/Main/Main.jsx";
import Employees from "./Components/Employees/Employees";
import Error from "./Components/Error/Error";

const App = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/employees" component={Employees} />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  </HashRouter>
);
export default App;
