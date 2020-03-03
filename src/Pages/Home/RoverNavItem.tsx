import React from "react";
import {Url} from "../../Models/Url"


interface roverNavItemProps {
    imageUrl: Url;
    altText: string;
    description: string;
}

export function RoverNavItem (props : roverNavItemProps){
    return (
        <li className="roverNavItem">
            <img className="roverNavImage" src={props.imageUrl} alt={props.altText} />
            <p className="roverNavLink">{props.description}</p>
        </li>
    )
}