import React from "react";
import {Url} from "../../Models/Url"
import {Link} from "react-router-dom";


interface roverNavItemProps {
    imageUrl: Url;
    align : 'leftAlign' | 'rightAlign';
    altText : string;
    description : string;
    destination : '/curiosity' | '/opportunity' | '/spirit';
}

export function RoverNavItem (props : roverNavItemProps):JSX.Element {
    return (
        <Link className={`roverNavItem ${props.align}`} to={props.destination}>
            <img className="roverNavImage" src={props.imageUrl} alt={props.altText}/>
            <p className="roverNavLink" >{props.description}</p>
        </Link>
    )
}