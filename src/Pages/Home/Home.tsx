import {HeroImageOfTheDay} from "../../Components/HeroImageOfTheDay/HeroImageOfTheDay";

﻿import React from "react";
import "./Home.scss";
import {RoverNavItem} from "./RoverNavItem";

export function Home(): JSX.Element {
    return (
        <div>
        <HeroImageOfTheDay/>
        <ul className="roverNav">
            <RoverNavItem imageUrl={"https://image.freepik.com/free-vector/group-people-holding-question-mark-icons_53876-64627.jpg"}
                          align={"rightAlign"}
                          altText={"Curiosity Rover"}
                          description={"Curiosity"}
                          destination={"/curiosity"}/>
            <RoverNavItem imageUrl={"https://media.npr.org/assets/img/2018/06/15/mom-support_slide-b7832f16b707e5bde84de23c0277f0328d7bd6f9-s800-c85.jpg"}
                          align={"leftAlign"}
                          altText={"Opportunity Rover"}
                          description={"Opportunity"}
                          destination={"/opportunity"}/>
            <RoverNavItem imageUrl={"https://image.freepik.com/free-vector/teenagers-friends-having-fun-cartoons_18591-52609.jpg"}
                          align={"rightAlign"}
                          altText={"Spirit Rover"}
                          description={"Spirit"}
                          destination={"/spirit"}/>
        </ul>
    </div>
    )
}