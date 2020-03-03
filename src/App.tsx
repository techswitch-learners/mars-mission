import React from 'react';
import './App.scss';
import {Navigation} from './TempNav';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Curiosity} from "./Pages/CuriosityLandingPage/CuriosityLandingPage";
import {Spirit} from "./Pages/SpiritLandingPage/SpiritLandingPage";
import {Opportunity} from "./Pages/OpportunityLandingPage/OpportunityLandingPage";


function App() {
  return (
      <Router>
            <div>
              <header className="header">
                <nav>
                    <h1>Mars Mission</h1>
                  <Navigation />
                </nav>
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
                </Switch>
            </div>
      </Router>
  );
}

export default App;
