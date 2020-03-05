﻿import React from 'react';
import './HumanAtNasa.scss';

interface HumanAtNasaProps{
    name : string;
    jobTitle : string;
    jobDescription: string;
    imageUrl : string;
}

export function HumanAtNasa(props : HumanAtNasaProps){
    
    return(
        <div className='humansComponent'>
            <img className='humansImage' src={props.imageUrl}/>
            <h2 className='humanNames'>{props.name}</h2>
            <h3 className='jobTitle'>{props.jobTitle}</h3>
            <p className='jobDescription'>{props.jobDescription}</p>
        </div>
    );
    
}