import React, {useState} from "react";
import {DateInputForm} from "../../Components/DateInputForm/DateInputForm";
import {RoverGalleryImage} from "../../Components/RoverGalleryImage/RoverGalleryImage";
import {Photocard} from "../../Components/Photocard/Photocard";
import "./OnThisDay.scss";

export function OnThisDayPage() {

    const [dateInput, setDateInput] = useState<string | null>(null);

    return (
        <div className="onThisDay">
            {dateInput? <RoverGalleryImage dateInput={dateInput}/> : <Photocard imageUrl={"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG"} altText={"June 3, 2015 On Mars"} imageTitle={"June 3, 2015 On Mars"} description={""} testid={"rover_default_image"}/>}
            <h3>Curiosity worked on Mars from August 6, 2012 until September 28, 2019.</h3>
            <h2>Please choose a date to see Mars on that day!</h2>
            <DateInputForm dateInput={dateInput} setDateInput={setDateInput}/>
        </div>
    );
}
