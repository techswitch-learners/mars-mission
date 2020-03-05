import React from "react";
import "./DateInputForm.scss"
import {getRoverImages} from "../ApiFetch/RoversApiFetch";
import {RoverGalleryImage} from "../RoverGalleryImage/RoverGalleryImage";


export function DateInputForm() {
    function getDateToday(){
        let today: string = new Date().toISOString().split("T")[0];
        return today;
    }
    
    function getDateInput(e: MouseEvent) {
        e.preventDefault();
        return e.currentTarget.getAttribute;
    }

    return (
        <div >
            <form className="form">
                <label>DATE:
                    <br/>
                    <input value={date} type="date" id="date" name="date"
                           min="12-08-05" max={getDateToday()}/>
                </label>
                <input type="submit" name="Submit" onClick={getDateInput} />
            </form>
        </div>
    );
}