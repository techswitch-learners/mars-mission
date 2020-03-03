import React from "react";
import {CuriosityHero} from "./CuriosityHero/CuriosityHero";

export function Curiosity() {
    const imageOfCuriosity = "https://spaceplace.nasa.gov/mars-curiosity/en/curiosity-here.en.jpg";
    
    return (
        <div>
            <h2>Curiosity</h2>
            <CuriosityHero imageUrl={imageOfCuriosity} />
        </div>
    );
}
