import React from "react";
import {Url} from "../../Models/Url";
import {RoverName} from "../../Models/RoverName";
import {RoverNameLowerCase} from "../../Models/RoverNameLowerCase";
import './Hero.scss';

interface HeroProps {
    headingText: RoverName;
    rover: RoverNameLowerCase;
    imageUrl: Url;
}

export function Hero(props: HeroProps) {

    return (
        <div id="rover" data-testid="hero" className={`hero ${props.rover}`}>
            <h1 className='heroTitle'>{props.headingText}</h1>
            <img className='heroImage' src={props.imageUrl} alt={props.rover}/>
        </div>
    );


}