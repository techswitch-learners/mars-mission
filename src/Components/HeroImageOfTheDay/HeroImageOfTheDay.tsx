import React, {useEffect, useState} from "react";
import {getImageOfTheDay, ImageOfTheDay} from "../ApiFetch/ApodApiFetch";


function HeroImageOfTheDay() {
    const [imageOfTheDay, setImageOfTheDay] = useState<ImageOfTheDay>(
        {url:"", title:"", date:"", explanation:"", media_type:""}
    );
    getImageOfTheDay().then(image => setImageOfTheDay(image));
    return (
        <div className="imageOfTheDay">
            <img className="contentImage"
                 src={imageOfTheDay.url}
                 alt={imageOfTheDay.date}/>
            <h3 className="contentTitle">{imageOfTheDay.title}</h3>
            <p className="contentDescription">{imageOfTheDay.explanation}</p>
        </div>
    )
}

export {HeroImageOfTheDay}