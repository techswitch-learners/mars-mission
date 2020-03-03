import React from "react";
import "./DateInputForm.scss"


export function DateInputForm() {
    return (
        <div >
            <form className="form">
                <label>DAY: 
                    <br/>
                    <input type="text" name="day"/>
                </label>
                <label>MONTH:
                    <br/>
                    <input type="text" name="month"/>
                </label>
                <label>YEAR:
                    <br/>
                    <input type="text" name="year"/>
                </label>
                <input type="submit" name="submit"/>
            </form>
        </div>
    );
}