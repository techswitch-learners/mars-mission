import React from "react";
import {Url} from "../../Models/Url"
import {AlignType} from "../../Models/AlignType";
import {RoverLinks} from "../../Models/RoverLinks";
import {Link} from "react-router-dom";


interface roverNavItemProps {
    imageUrl: Url;
    align : AlignType;
    altText : string;
    description : string;
    destination : RoverLinks;
}

export function RoverNavItem (props : roverNavItemProps):JSX.Element {
    return (
        <Link className={`roverNavItem ${props.align}`} to={props.destination}>
            <img className="roverNavImage" src={props.imageUrl} alt={props.altText}/>
            <p className="roverNavLink" >{props.description}</p>
        </Link>
    )
}