import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Curiosity} from './Pages/Curiosity/CuriosityLandingPage'
import {Spirit} from './Pages/Spirit/SpiritLandingPage';
import {Opportunity} from "./Pages/Opportunity/OpportunityLandingPage";

export function Navigation() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/curiosity">Curiosity</Link>
                    </li>
                    <li>
                        <Link to="/spirit">Spirit</Link>
                    </li>
                    <li>
                        <Link to="/opportunity">Opportunity</Link>
                    </li>
                </ul>
 
                <hr/>
                
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