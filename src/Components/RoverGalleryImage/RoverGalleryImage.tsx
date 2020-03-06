import React, {useState, useEffect} from "react";
import {getRoverImage, RoverImage} from "../ApiFetch/RoversApiFetch";
import "./RoverGalleryImage.scss";

interface RoverGalleryImageProps {
    dateInput: string | null;
}

export function RoverGalleryImage(props: RoverGalleryImageProps) {
    const [roverImage, setRoverImage] = useState<RoverImage | null>(null);

    useEffect(() => {
        getRoverImage(props.dateInput)
            .then(image => setRoverImage(image));
    }, [props.dateInput]);

    if (!roverImage) {
        return <div>Loading</div>
    }

    return (
        <div className="roverGalleryImage">
            <h2>Sol: {roverImage?.sol}</h2>
            <img data-testid={"image-from-rover"} src={roverImage?.img_src} alt=""/>
        </div>
    );

}
