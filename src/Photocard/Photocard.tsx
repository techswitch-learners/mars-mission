﻿import React from "react";
import {Url} from "../Models/Url"
import "./Photocard.scss";

interface PhotocardProps {
    imageUrl: Url;
    altText: string;
    imageTitle: string;
    description: string;
    testid: string;
}

function Photocard(props: PhotocardProps) {
    return (
        <div className="photocard" data-testid={props.testid}>
            <img className="contentImage"
                 src={props.imageUrl}
                 alt={props.altText}/>
            <h3 className="contentTitle">{props.imageTitle}</h3>
            <p className="contentDescription">{props.description}</p>
        </div>
    )
}

export {Photocard}
