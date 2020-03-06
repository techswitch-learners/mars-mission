import {HeroImageOfTheDay} from "../../Components/HeroImageOfTheDay/HeroImageOfTheDay";

﻿import React from "react";
import "./Home.scss";
import {RoverNavItem} from "./RoverNavItem";

export function Home(): JSX.Element {
    return (
        <div>
        <HeroImageOfTheDay/>
        <ul className="roverNav">
            <RoverNavItem imageUrl={`${process.env.PUBLIC_URL}/Images/curiosity.en.png`}
                          align={"rightAlign"}
                          altText={"Curiosity Rover"}
                          description={"Curiosity"}
                          destination={"/curiosity"}/>
            <RoverNavItem imageUrl={`${process.env.PUBLIC_URL}/Images/spirit-opportunity.en.png`}
                          align={"leftAlign"}
                          altText={"Opportunity Rover"}
                          description={"Opportunity"}
                          destination={"/opportunity"}/>
            <RoverNavItem imageUrl={`${process.env.PUBLIC_URL}/Images/sojourner.en.png`}
                          align={"rightAlign"}
                          altText={"Spirit Rover"}
                          description={"Spirit"}
                          destination={"/spirit"}/>
        </ul>
    </div>
    )
}