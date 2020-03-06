﻿import React from "react";
import {WeatherOnMarsImage} from "../../Components/WeatherOnMarsImage/WeatherOnMarsImage";
import './WeatherOnMarsPage.scss';

export function WeatherOnMarsPage() {
    return (
        <div className="weatherPage">
            <WeatherOnMarsImage/>
        </div>
    );
}