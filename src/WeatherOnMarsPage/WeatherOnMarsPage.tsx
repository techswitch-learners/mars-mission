import React from "react";
import {WeatherOnMarsImage} from "../WeatherOnMarsImage/WeatherOnMarsImage";
import './WeatherOnMarsPage.scss';


function WeatherOnMarsPage() {


    return (
        <div className="weatherPage">
            {/*Curiosity hero image*/}
            <WeatherOnMarsImage/>
        </div>
    );
}


export {WeatherOnMarsPage};