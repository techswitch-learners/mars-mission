import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Curiosity} from "./Pages/CuriosityLandingPage/CuriosityLandingPage";
import {Spirit} from "./Pages/SpiritLandingPage/SpiritLandingPage";
import {Opportunity} from "./Pages/OpportunityLandingPage/OpportunityLandingPage";
import {NavBar} from "./NavBar/NavBar";
import {DateInputForm} from "./Components/DateInputForm/DateInputForm";


function App() {
  return (
      <Router>
            <div>
              <header className="header">
                  <NavBar />
              </header>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/curiosity" component={Curiosity} />
                    <Route exact path="/curiosity/discover-rovers" component={DiscoverRoversPage} />
                    <Route exact path="/spirit" component={Spirit} />
                    <Route exact path="/opportunity" component={Opportunity} />
                </Switch>
            </div>
      </Router>
  );
}

export default App;