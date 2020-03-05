import React from "react";
import "../../ConstantsMixins.scss";
import "./HumansInSpace.scss";
import {astronautList, SetHumansInSpace} from "../../Pages/HumansAtNasa/HumansInSpaceApiFetch";

export function HumansInSpace() {
    SetHumansInSpace();
    return (
        <div>
            <article className="astronautsInSpaceNow">{astronautList}</article>
        </div>
    )
}
