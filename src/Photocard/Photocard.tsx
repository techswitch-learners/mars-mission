﻿import React from "react";
import {Url} from "../Models/Url"
import "./Photocard.scss";

interface PhotocardProps {
    imageUrl: Url;
    altText : string;
    description : string;
}

function Photocard (props : PhotocardProps) {
    return (
        <div className="photocard">
            <img className="photocardImage" 
                 src={props.imageUrl} 
                 alt={props.altText}/>
            <p>desc</p>
        </div>
    )
}
export {Photocard}
