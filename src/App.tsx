import React from 'react';
import './App.scss';
import {Footer} from "./Footer/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Curiosity} from "./Pages/CuriosityLandingPage/CuriosityLandingPage";
import {Spirit} from "./Pages/SpiritLandingPage/SpiritLandingPage";
import {Opportunity} from "./Pages/OpportunityLandingPage/OpportunityLandingPage";
import {NavBar} from "./NavBar/NavBar";
import {Home} from "./Pages/Home/Home";
import {DiscoverRoversPage} from "./Pages/DiscoverRoversPage/DiscoverRoversPage";

function App() {
    
  return (
      <Router>
            <div>
              <header className="header">
                  <NavBar />
              </header>
                <Switch>
                    <Route exact path="">
                        <Home />
                    </Route>
                    <Route exact path="/curiosity">
                        <Curiosity />
                    </Route>
                    <Route exact path="/curiosity/discover-rovers">
                        <DiscoverRoversPage />
                    </Route>
                    <Route path="/spirit">
                        <Spirit />
                    </Route>
                    <Route path="/opportunity">
                        <Opportunity />
                    </Route>
                </Switch>
                <Footer/>
            </div>
      </Router>
  );
}

export default App;
