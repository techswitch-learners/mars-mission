import React, {useEffect, useState} from "react";
import {DateInputForm} from "../../Components/DateInputForm/DateInputForm";
import {getRoverImages, RoverImages} from "../../Components/ApiFetch/RoversApiFetch";
import {RoverGalleryImage} from "../../Components/RoverGalleryImage/RoverGalleryImage";

export function OnThisDayPage() {
    
    return (
        <div>
            <DateInputForm/>
            <RoverGalleryImage/>
        </div>
    );
}
