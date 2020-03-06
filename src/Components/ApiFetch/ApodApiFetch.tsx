import {Url} from "../../Models/Url";

export interface ImageOfTheDay {
    url: Url;
    explanation: string;
    title: string;
    media_type: string;
    date: string;
}

const apiUrl: string = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;

export async function getImageOfTheDay(): Promise<ImageOfTheDay>  {
    const apiResponse = await fetch(apiUrl);
    return await apiResponse.json();
}


