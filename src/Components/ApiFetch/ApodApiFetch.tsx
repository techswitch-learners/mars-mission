import React, {useEffect, useState} from "react";

interface ImageOfTheDay {
    url: string;
}

const apiUrl: string = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;

export async function getImageOfTheDay(): Promise<ImageOfTheDay>  {
    const apiResponse = await fetch(apiUrl);
    return await apiResponse.json();
}

export async function imageOfTheDayUrl() {
    const [image, setImage] = useState<string>("");

    useEffect(() => {
        getImageOfTheDay().then(imageOfTheDay => setImage(imageOfTheDay.url));
    }, []);
    
    return {image};
}

    