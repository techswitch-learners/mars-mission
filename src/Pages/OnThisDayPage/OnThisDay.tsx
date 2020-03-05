import React, {useEffect, useState} from "react";
import {DateInputForm} from "../../Components/DateInputForm/DateInputForm";
import {getRoverImages, RoverImages} from "../../Components/ApiFetch/RoversApiFetch";
import {RoverGalleryImage} from "../../Components/RoverGalleryImage/RoverGalleryImage";

export function OnThisDayPage() {
    
    const [dateInput, setDateInput] = useState<string | null>(null);

    useEffect(() => {
        getDateInput()
            .then(input=> setDateInput(input));
    }, []);
    
    return (
        <div>
            <DateInputForm/>
            <RoverGalleryImage dateInput={dateInput}/>
        </div>
    );
}
