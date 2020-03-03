import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Curiosity} from "./Pages/CuriosityLandingPage/CuriosityLandingPage";
import {Spirit} from "./Pages/SpiritLandingPage/SpiritLandingPage";
import {Opportunity} from "./Pages/OpportunityLandingPage/OpportunityLandingPage";
import {TestColoursFonts} from "./TestColoursFonts";
import {NavBar} from "./NavBar/NavBar";


function App() {
  return (
      <Router>
            <div>
              <header className="header">
                  <NavBar />
              </header>
                <Switch>
                    <Route exact path="/curiosity">
                        <Curiosity />
                    </Route>
                    <Route path="/spirit">
                        <Spirit />
                    </Route>
                    <Route path="/opportunity">
                        <Opportunity />
                    </Route>
                    <Route path="/test">
                        <TestColoursFonts/>
                    </Route>
                </Switch>
            </div>
      </Router>
      
  );
}

export default App;
