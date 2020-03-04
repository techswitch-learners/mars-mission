import React, {useEffect, useState} from "react";
import {getImageOfTheDay, ImageOfTheDay} from "../ApiFetch/ApodApiFetch";


function HeroImageOfTheDay() {
    const [imageOfTheDay, setImageOfTheDay] = useState<ImageOfTheDay>(
        {url:"", title:"", date:"", explanation:"", media_type:""}
    );
    useEffect(() => {
        getImageOfTheDay().then(image => setImageOfTheDay(image));
    }, []);
    const photoViewer = <img className="contentImage"
                             src={imageOfTheDay.url}
                             alt={imageOfTheDay.date}/>;
    const videoViewer = <iframe className="contentImage"
                             src={imageOfTheDay.url}
                             />;

    function SwitchViewerType(media_type: string) {
        if (media_type === "video") {
            return videoViewer;

        } else {
            return photoViewer;
        }
        
    }
    return (
        <div className="imageOfTheDay">
            {SwitchViewerType(imageOfTheDay.media_type)}
            <h3 className="contentTitle">{imageOfTheDay.title}</h3>
            <p className="contentDescription">{imageOfTheDay.explanation}</p>
        </div>
    )
}

export {HeroImageOfTheDay}



  