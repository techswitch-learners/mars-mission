﻿import React from "react";
import './WeatherOnMarsImage.scss';

export function WeatherOnMarsImage() {


    return (
        <div className='iframeContainer'>
            <iframe
                src='https://mars.nasa.gov/layout/embed/image/insightweather/'
            />
        </div>
            
    );
}