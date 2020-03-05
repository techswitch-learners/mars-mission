import React from "react";

export interface RoverImages {
    img_src: string;
    earth_date: string;
    sol: number;
}

const roversUrl: string = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${process.env.REACT_APP_NASA_API_KEY}`;

export async function getRoverImages() : Promise<RoverImages>  {
        const apiResponse = await fetch(roversUrl);
        const jsonResponse = await apiResponse.json();
        return jsonResponse.photos[0];
}