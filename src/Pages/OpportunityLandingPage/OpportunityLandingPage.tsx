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
                imageUrl={"https://video.cgtn.com/news/3d3d414e34636a4e32457a6333566d54/video/4f5e95f750a1479588d540e83524cbb6/4f5e95f750a1479588d540e83524cbb6.jpg"}
            />
            <ul className="childList">
                <li>
                    <Link className="childLink" to='/opportunity/humans'>Humans at NASA</Link>
                </li>
                <li>
                    <Link className="childLink" to='/opportunity/who-is-in-space'>Who is in space</Link>
                </li>
            </ul>
        </div>
    );
}
