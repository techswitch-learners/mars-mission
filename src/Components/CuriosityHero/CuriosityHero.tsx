﻿import React from "react";
import 'CuriosityHero.css';

export function CuriosityHero(prop: {imageUrl: string}){
    
    return (
        <div>
            <img src={prop.imageUrl} />
        </div>
    );
}