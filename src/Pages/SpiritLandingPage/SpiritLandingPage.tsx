import {Link} from "react-router-dom";

﻿import React from "react";
import {Hero} from "../../Components/Hero/Hero";



export function Spirit() {
    return (
        <div>
            <Hero
                headingText={"Spirit"}
                rover={"spirit"}
                imageUrl={"https://mars.nasa.gov/system/content_pages/main_images/22_22_overlay_2000x1000_insight.jpg"}
            />
            <ul className="childList">
                <li>
                    <Link className="childLink" to='/spirit/inspirational-quotes'>Inspirational Quotes ></Link>
                </li>
            </ul>
        </div>
    );
}