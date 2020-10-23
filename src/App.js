import React from "react";
import "./assets/styles/index.scss";
import Feed from "./components/Feed";
import Merchant from "./components/Merchant";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Feed}></Route>
          <Route path="/feed" component={Feed}></Route>
          <Route path="/merchant/:id" component={Merchant}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
