import React, {useEffect, useState} from "react";
import "../../ConstantsMixins.scss";
import "./HumansInSpace.scss";
import {Astronaut, AstronautsInSpace, getHumansInSpace} from "../../Pages/HumansAtNasa/HumansInSpaceApiFetch";

export function HumansInSpace() {
    const [humansInSpace, setHumansInSpace] = useState<AstronautsInSpace | null>(null);

    useEffect(() => {
        getHumansInSpace()
            .then(astronauts => setHumansInSpace(astronauts));
    }, []);
    
    if (!humansInSpace) {
        return (<div>Loading</div>)
    }

    return (
        <div>
            There are currently {humansInSpace.number} astronauts in space!
            {humansInSpace.people.map(human => <DisplayAstronauts astronaut={human} />)}
        </div>
    );
}

interface AstronautProps {
    astronaut: Astronaut
}

function DisplayAstronauts(props: AstronautProps) {
    return (
        <div>
            <article className="astronautsInSpaceNow">
                Astronaut: {props.astronaut.name} SpaceCraft: {props.astronaut.craft}
            </article>
        </div>
    );
}
