import React from "react";
import './WeatherOnMarsImage.scss';

function WeatherOnMarsImage() {


    return (
            <iframe
                className="weatherImage"
                src='https://mars.nasa.gov/layout/embed/image/insightweather/'
                width='750'
                height='530'
                scrolling='no'
                frameBorder='0'
            />
    );
}

export {WeatherOnMarsImage};