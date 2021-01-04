import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/*--------- Page Imports ----------*/
import Home from "./assets/js/pages/home";
import Contact from "./assets/js/pages/contact";
import Experience from "./assets/js/pages/experience";
import Portfolio from "./assets/js/pages/portfolio";
import About from "./assets/js/pages/about";

/*--------- Component Imports ----------*/
import Header from "./assets/js/components/header";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />

        <div className="twenty-spacer" />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
