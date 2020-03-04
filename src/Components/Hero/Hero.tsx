import React from "react";
import {Url} from "../../Models/Url";


interface HeroProps{
    headingText : 'Curiosity' | 'Spirit'  | 'Opportunity';
    rover : 'curiosity' | 'spirit'  | 'opportunity';
    imageUrl : Url;
}

export function Hero(props : HeroProps){
    return(
        
        <div className={props.rover}>
            <h1 className='heroTitle'>{props.headingText}</h1>
            <img className='heroImage' src={props.imageUrl}/>
        </div>
        
    );
    
    
}