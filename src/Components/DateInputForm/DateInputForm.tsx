import React from "react";
import "./DateInputForm.scss"


export function DateInputForm() {
    function getDateToday(){
        let today: string = new Date().toISOString().split("T")[0];
        return today;
    }
    
    return (
        <div >
            <form className="form">
                <label>DATE: 
                    <br/>
                    <input type="date" id="date" name="date"
                           min="12-08-05" max={getDateToday()}/>
                </label>
                <input type="submit" name="Submit" />
            </form>
        </div>
    );
}