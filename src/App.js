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
          <div className="container">
          </div>
          <Switch>
             <Route exact path= "/">
               <Home />
               </Route>
               <Route path="/project">
                 <Project />
               </Route>
               <Route path="/contact">
                 <Contact />
               </Route>
          </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
