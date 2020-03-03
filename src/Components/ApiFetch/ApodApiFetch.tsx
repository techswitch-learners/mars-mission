import React from "react";



export function parseApiData() {
    var requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
    };

    var apiUrl: string = "https://api.nasa.gov/planetary/apod?api_key="+process.env.REACT_APP_NASA_API_KEY;
    let parsedResult:JSON = JSON;
    fetch(apiUrl, requestOptions)
        .then(response => response.text())
        .then(result => {
           parsedResult = JSON.parse(result);
           console.log(parsedResult);
        }
            )
        .catch(error => console.log('error', error));
    
    return parsedResult;
}

function mapApiData() {
    
}