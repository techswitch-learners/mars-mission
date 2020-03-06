import {Link} from "react-router-dom";

﻿import React from "react";
import {Hero} from "../../Components/Hero/Hero";
import './SpiritLandingPage.scss';


export function Spirit() {
    return (
        <div>
            <Hero
                headingText={"Spirit"}
                rover={"spirit"}
                imageUrl={"https://img.itch.zone/aW1hZ2UvMTk2MTE0LzkxNjY1My5wbmc=/original/hIpl%2Bw.png"}
            />
            <ul className="childList">
                <li>
                    <Link className="childLink" to='/spirit/inspirational-quotes'>Inspirational Quotes</Link>
                </li>
                <li>
                    <Link className="childLink" to='/spirit/social-media-gallery'>Social Media Gallery</Link>
                </li>
            </ul>
        </div>
    );
}