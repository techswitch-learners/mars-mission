﻿import React from "react";
import {Link} from "react-router-dom";
import {Hero} from "../../Components/Hero/Hero";
import '../RoverLandingPages.scss';


export function Opportunity() {
    return (
        <div>
            <Hero
                headingText={"Opportunity"}
                rover={"opportunity"}
                imageUrl={"https://mars.nasa.gov/system/content_pages/main_images/21_overlay_2000x1000_opportunity.jpg"}
            />
            <ul className="childList">
                <li>
                    <Link className="childLink" to='/opportunity/humans'>Humans at NASA ></Link>
                </li>
            </ul>
        </div>
    );
}
