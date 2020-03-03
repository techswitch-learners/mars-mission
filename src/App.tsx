import React, {useEffect, useState} from 'react';
import './App.scss';
import {Navigation} from './TempNav';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Curiosity} from "./Pages/CuriosityLandingPage/CuriosityLandingPage";
import {Spirit} from "./Pages/SpiritLandingPage/SpiritLandingPage";
import {Opportunity} from "./Pages/OpportunityLandingPage/OpportunityLandingPage";
import {getImageOfTheDay} from "./Components/ApiFetch/ApodApiFetch";

function App() {
    const [image, setImage] = useState<string>("");
    
    useEffect(() => {
        getImageOfTheDay().then(imageOfTheDay => setImage(imageOfTheDay.url));
    }, []);
    
  return (
      <Router>
            <div>
              <header className="header">
                <nav>
                    <h1>Mars Mission</h1>
                    {image}
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
