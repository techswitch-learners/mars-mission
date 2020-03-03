﻿import React from "react";
import "./Home.scss";
import {RoverNavItem} from "./RoverNavItem";

export function Home():JSX.Element {
    return  (
        <ul className="roverNav">
            <RoverNavItem imageUrl={"https://robohash.org/CuriosityRover?bgset=bg1"}
                          align={"rightAlign"}
                          altText={"Curiosity Rover"}
                          description={"Curiosity"}/>
            <RoverNavItem imageUrl={"https://robohash.org/OpportunityRover?bgset=bg1"}
                          align={"leftAlign"}
                          altText={"Opportunity Rover"}
                          description={"Opportunity"}/>
            <RoverNavItem imageUrl={"https://robohash.org/SpiritRover?bgset=bg1"}
                          align={"rightAlign"}
                          altText={"Spirit Rover"}
                          description={"Spirit"}/>
        </ul>
    )
}