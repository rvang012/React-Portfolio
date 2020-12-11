import React from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/home";
import EntryPage from "./views/entrypage";
import Contact from "./views/contact";


function App() {
  return (
      <div>
        <Router>
        <Header />
        <div>
          <div className="container">
          </div>
          <Switch>
            <Route exact path = "/React-Portfolio/">
              <EntryPage />
             </Route>
             <Route path= "/React-Portfolio/home">
               <Home />
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
