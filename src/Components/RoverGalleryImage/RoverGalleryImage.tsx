import React, {useState, useEffect} from "react";
import {getRoverImages, RoverImages} from "../ApiFetch/RoversApiFetch";

interface RoverGalleryImageProps {
    dateInput : string | null;
}

export function RoverGalleryImage(props : RoverGalleryImageProps) {
    const [roverImage, setRoverImage] = useState<RoverImages | null>(null);
    
    useEffect(() => {
        getRoverImages(props.dateInput)
            .then(image => setRoverImage(image));
    }, [props.dateInput]);

    if (!roverImage) {
        return <div>Loading</div>
    }
    
    return (
        <div>
            <img data-testid={"image-from-rover"} src={roverImage?.img_src} alt=""/>
            <p>Sol: {roverImage?.sol}</p>
        </div>
    );
    
}
