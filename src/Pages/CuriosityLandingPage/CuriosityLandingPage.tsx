﻿import React from "react";
import {Link} from "react-router-dom";

import {Hero} from "../../Components/Hero/Hero";
import './CuriosityLandingPage.scss';



export function Curiosity(): JSX.Element {
    return (
        <div className='hero-image_'>
            <div className="hero-image">
            <Hero 
                headingText={"Curiosity"} 
                rover={"curiosity"} 
                imageUrl={"https://mars.nasa.gov/system/content_pages/main_images/20_overlay_2000x1000_curiosity.jpg"}/>
            </div>
            <ul className="childList">
                <li>
                    <Link className="childLink" to='/curiosity/on-this-day-on-mars'>On this day on Mars</Link>
                </li>
                <li>
                    <Link className="childLink" to='/curiosity/discover-rovers'>Discover the Rovers</Link>
                </li>
                <li>
                    <Link className="childLink" to='/curiosity/weather-on-mars'>Weather On Mars</Link>
                </li>
                <li>
                    <Link className="childLink" to='/curiosity/life-on-mars'>Life On Mars</Link>
                </li>
            </ul>
        </div>
    );
}
