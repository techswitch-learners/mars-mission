﻿import React from "react";
import "./Home.scss";
import {RoverNavItem} from "./RoverNavItem";

export function Home() {
    return (
        <ul className="roverNav">
            <RoverNavItem imageUrl={"https://robohash.org/CuriosityRover"} 
                          altText={"Curiosity Rover"} 
                          description={"Curiosity"}/>
            <RoverNavItem imageUrl={"https://robohash.org/OpportunityRover"} 
                          altText={"Opportunity Rover"} 
                          description={"Opportunity"}/>
            <RoverNavItem imageUrl={"https://robohash.org/SpiritRover"} 
                          altText={"Spirit Rover"} 
                          description={"Spirit"}/>
        </ul>
    )
}