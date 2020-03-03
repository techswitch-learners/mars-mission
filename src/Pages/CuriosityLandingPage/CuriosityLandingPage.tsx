﻿import React from "react";
import {CuriosityHero} from "../../Components/CuriosityHero/CuriosityHero";


const imageOfCuriosity = "https://spaceplace.nasa.gov/mars-curiosity/en/curiosity-here.en.jpg";

export function Curiosity(): JSX.Element {
    return (
        <div>
            <h2>Opportunity</h2>
            <CuriosityHero imageUrl={imageOfCuriosity} />
        </div>
    );
}
