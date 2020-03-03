import React from "react";
import "./DateInputForm.scss"


export function DateInputForm() {
    return (
        <div >
            <form className="form">
                <label>DATE: 
                    <br/>
                    <input type="date" id="date" name="date"
                           min="12-08-05" max="2020-03-03" />
                </label>
                <input type="submit" name="Submit" />
            </form>
        </div>
    );
}