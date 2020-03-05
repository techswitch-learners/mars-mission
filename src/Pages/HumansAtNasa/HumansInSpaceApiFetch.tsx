import {useEffect, useState} from "react";
import React from "react";

export interface HumansInSpace {
    people: {craft: string; name: string}[];
    number: string;
}

const apiUrl: string = `http://api.open-notify.org/astros.json`;

export async function getHumansInSpace(): Promise<HumansInSpace>  {
    const apiResponse = await fetch(apiUrl);
    return await apiResponse.json();
}
export let astronautList: {craft: string; name: string}[];
export function SetHumansInSpace() {
    const [humansInSpace, setHumansInSpace] = useState<HumansInSpace | null>(null);

    useEffect(() => {
        getHumansInSpace()
            .then(astronauts => setHumansInSpace(astronauts));
    }, []);
    if (!humansInSpace) {
        return (<div>Loading</div>)
    }
    if (!astronautList) {
        return (<div>Loading</div>)
    }

    humansInSpace.people.map(human=> astronautList.push(human));
    return (
        <div>{astronautList}</div>
    )
}