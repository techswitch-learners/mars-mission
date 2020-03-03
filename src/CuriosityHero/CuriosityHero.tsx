import React from "react";

export function CuriosityHero(prop: {imageUrl: string}){
    
    return (
        <div>
            <img src={prop.imageUrl} />
        </div>
    );
}