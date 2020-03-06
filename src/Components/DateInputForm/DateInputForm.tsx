import React, {FormEvent, SetStateAction, useState} from "react";
import "./DateInputForm.scss"



interface DateInputFormProps {
    dateInput : string | null;
    setDateInput : (date: string) => void;
}

export function DateInputForm(props : DateInputFormProps) {
    const [date, setDate] = useState("");
    
    function getDateToday(){
        let today: string = new Date().toISOString().split("T")[0];
        return today;
    }
    
    function handleClick(event: FormEvent) {
        event.preventDefault();
        props.setDateInput(date);
    }

    return (
        <div >
            <form data-testid={"on-this-day-form"} onSubmit={handleClick} className="form">
                <label>DATE:
                    <br/>
                    <input data-testid={"date-input"} value={date} onChange={event => setDate(event.target!.value)} type="date" id="date" name="date"
                           min="12-08-05" max={getDateToday()}/>
                </label>
                <input type="submit" name="Submit"/>
            </form>
        </div>
    );
}