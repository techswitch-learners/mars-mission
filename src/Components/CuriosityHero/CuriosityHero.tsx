﻿import React from "react";
import 'CuriosityHero.scss';

export function CuriosityHero(prop: {imageUrl: string}){
    
    return (
        <div>
            <img src={prop.imageUrl} />
        </div>
    );
}