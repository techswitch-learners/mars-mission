import React, {useState} from "react";
import {DateInputForm} from "../../Components/DateInputForm/DateInputForm";
import {RoverGalleryImage} from "../../Components/RoverGalleryImage/RoverGalleryImage";

export function OnThisDayPage() {

    const [dateInput, setDateInput] = useState<string | null>(null);

    return (
        <div>
            <DateInputForm dateInput={dateInput} setDateInput={setDateInput}/>
            {dateInput && <RoverGalleryImage dateInput={dateInput}/>}
        </div>
    );
}
