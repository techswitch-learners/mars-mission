import React from 'react';
import './App.scss';
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./Pages/Home/Home";
import {Curiosity} from "./Pages/CuriosityLandingPage/CuriosityLandingPage";
import {Spirit} from "./Pages/SpiritLandingPage/SpiritLandingPage";
import {Opportunity} from "./Pages/OpportunityLandingPage/OpportunityLandingPage";
import {WeatherOnMarsPage} from "./Pages/WeatherOnMarsPage/WeatherOnMarsPage";
import {DiscoverRoversPage} from "./Pages/DiscoverRoversPage/DiscoverRoversPage";
import {InspirationalQuotesPage} from "./Pages/InspirationalQuotesPage/InspirationalQuotesPage";
import {OnThisDayPage} from "./Pages/OnThisDayPage/OnThisDay";
import {HumansAtNasa} from "./Pages/HumansAtNasa/HumansAtNasa";


export default function App() {

    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/curiosity" component={Curiosity}/>
                <Route exact path="/curiosity/discover-rovers" component={DiscoverRoversPage}/>
                <Route exact path="/curiosity/date-input" component={OnThisDayPage}/>
                <Route exact path="/spirit" component={Spirit}/>
                <Route exact path="/spirit/inspirational-quotes" component={InspirationalQuotesPage}/>
                <Route exact path="/opportunity" component={Opportunity}/>
                <Route exact path="/opportunity/humans" component={HumansAtNasa} />
                <Route exact path="/curiosity/weather-on-mars" component={WeatherOnMarsPage}/>
            </Switch>
            <Footer/>
        </Router>
    );
}
