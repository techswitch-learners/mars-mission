import {useEffect, useState} from "react";
import React from "react";

export interface Astronaut  {
    name: string;
    craft: string;
}

export interface AstronautsInSpace {
    people: Astronaut[];
    number: string;
}

const apiUrl: string = `http://api.open-notify.org/astros.json`;

export async function getHumansInSpace(): Promise<AstronautsInSpace>  {
    const apiResponse = await fetch(apiUrl);
    return await apiResponse.json();
}

// export function SetHumansInSpace() {
//     const [humansInSpace, setHumansInSpace] = useState<HumansInSpace | null>(null);
//
//     useEffect(() => {
//         getHumansInSpace()
//             .then(astronauts => setHumansInSpace(astronauts));
//     }, []);
//     if (!humansInSpace) {
//         return (<div>Loading</div>)
//     }
//    
//     humansInSpace.people.map(human=> astronautList.push(human));
// }