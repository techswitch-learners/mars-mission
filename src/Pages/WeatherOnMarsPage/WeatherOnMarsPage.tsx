﻿import React from "react";
import {WeatherOnMarsImage} from "../../WeatherOnMarsImage/WeatherOnMarsImage";
import './WeatherOnMarsPage.scss';


function WeatherOnMarsPage() {


    return (
        <div className="weatherPage">
            <hr/>
            {/*Curiosity hero image*/}
            <hr/>
            <WeatherOnMarsImage/>
        </div>
    );
}


export {WeatherOnMarsPage};