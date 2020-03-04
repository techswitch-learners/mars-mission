import React from "react";
import './WeatherOnMarsImage.scss';

function WeatherOnMarsImage() {


    return (
        <div className='iframeContainer'>
            <iframe
                src='https://mars.nasa.gov/layout/embed/image/insightweather/'
                height ='530'
                width = '750'
            />
        </div>
            
    );
}
export {WeatherOnMarsImage};