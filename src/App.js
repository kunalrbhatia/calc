import "./App.css";
import history from "./components/common/history";
import { Router, Route, Switch } from "react-router-dom";
import { Login } from "./components/login/login";
import { LoggedIn } from "./components/loggedin/loggedin";
import React from "react";
function App(props) {
  return (
    <Router basename={process.env.PUBLIC_URL} history={history}>
      <Switch>
        <Route exact path="/" component={(props) => <Login history={history} />} />
        {<Route path="/in" component={(props) => <LoggedIn history={history} />} />}
      </Switch>
    </Router>
  );
}
export default App;
