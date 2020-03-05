import React from "react";
import {astronautList, SetHumansInSpace} from "../../Pages/HumansAtNasa/HumansInSpaceApiFetch";

export function HumansInSpace() {
    SetHumansInSpace();
    return (
        <div>
            {astronautList}
        </div>
    )
}
