import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import RouteDetails from "./components/RouteDetails/RouteDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/route-details" component={RouteDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
