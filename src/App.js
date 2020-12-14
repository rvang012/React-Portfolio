import React from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./views/home";
import Contact from "./views/contact";
import Project from "./views/project";

function App() {
  return (
    <div>
      <Router>
       <div>
        <Switch>
          <Route exact path="/React-Portfolio/home">
            <Home />
          </Route>
          <Route path="/React-Portfolio/project">
            <Project />
          </Route>
          <Route path="/React-Portfolio/contact">
            <Contact />
          </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
