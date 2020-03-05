import {HeroImageOfTheDay} from "../../Components/HeroImageOfTheDay/HeroImageOfTheDay";

﻿import React from "react";
import "./Home.scss";
import {RoverNavItem} from "./RoverNavItem";

export function Home(): JSX.Element {
    return (
        <div>
        <HeroImageOfTheDay/>
        <ul className="roverNav">
            <RoverNavItem imageUrl={"https://robohash.org/CuriosityRover?bgset=bg1"}
                          align={"rightAlign"}
                          altText={"Curiosity Rover"}
                          description={"Curiosity"}
                          destination={"/curiosity"}/>
            <RoverNavItem imageUrl={"https://robohash.org/OpportunityRover?bgset=bg1"}
                          align={"leftAlign"}
                          altText={"Opportunity Rover"}
                          description={"Opportunity"}
                          destination={"/opportunity"}/>
            <RoverNavItem imageUrl={"https://robohash.org/SpiritRover?bgset=bg1"}
                          align={"rightAlign"}
                          altText={"Spirit Rover"}
                          description={"Spirit"}
                          destination={"/spirit"}/>
        </ul>
    </div>
    )
}