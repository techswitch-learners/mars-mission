import React from "react";

export interface RoverImages {
    img_src: string;
    earth_date: string;
    sol: number;
}


export async function getRoverImages(dateInput: string | null): Promise<RoverImages> {
    const roversUrl: string = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${dateInput}&api_key=${process.env.REACT_APP_NASA_API_KEY}`;
    const apiResponse = await fetch(roversUrl);
    const jsonResponse = await apiResponse.json();
    return jsonResponse.photos[0];
}