import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Ski from "./pages/Ski";
import Skis from "./pages/AllSkis"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/skis" component={Skis} />
          <Route exact path="/api/ski" component={Ski} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
