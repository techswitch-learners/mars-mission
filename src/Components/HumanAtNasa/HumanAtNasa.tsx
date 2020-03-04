import React from 'react';

interface HumanAtNasaProps{
    name : string;
    jobTitle : string;
    imageUrl : string;
}

export function HumanAtNasa(props : HumanAtNasaProps){
    
    return(
        <div>
            <h1>Humans At Nasa</h1>
            <p>General text about what people at Nasa do and about the team that launched Mars rovers.</p>
            <img className='humansImage' src={props.imageUrl}/>
            <h2 className='humanNames'>{props.name}</h2>
            <h3 className='jobTitle'>{props.jobTitle}</h3>
        </div>
    );
    
}