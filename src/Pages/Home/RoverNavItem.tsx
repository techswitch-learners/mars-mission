import React from "react";
import {Url} from "../../Models/Url"


interface roverNavItemProps {
    imageUrl: Url;
    align : 'leftAlign' | 'rightAlign';
    altText : string;
    description : string;
}

export function RoverNavItem (props : roverNavItemProps):JSX.Element {
    return (
        <li className={`roverNavItem ${props.align}`}>
            <img className="roverNavImage" src={props.imageUrl} alt={props.altText} />
            <p className="roverNavLink">{props.description}</p>
        </li>
    )
}