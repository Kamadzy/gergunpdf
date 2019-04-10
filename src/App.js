import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page1 from "./components/page1/Page1";
import LandingPage from "./components/landingpage/LandingPage";
import QuotePage from "./components/quotepage/QuotePage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/quote" component={QuotePage} />
          <Route path="/driver-application" component={Page1} />
        </Switch>
      </Router>
    );
  }
}

export default App;
