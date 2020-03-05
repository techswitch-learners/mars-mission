import React from "react";
import "../../ConstantsMixins.scss";
import "./HumansInSpace.scss";
import {astronautList, SetHumansInSpace} from "../../Pages/HumansAtNasa/HumansInSpaceApiFetch";

export function HumansInSpace() {
    SetHumansInSpace();
    astronautList.map(
        person => {
            let name = person.name;
            let craft = person.craft;
        return (
        <div>
            <article className="astronautsInSpaceNow">
                Astronaut: {name} SpaceCraft: {craft}
            </article>
        </div>)
        }
    );
    
}
