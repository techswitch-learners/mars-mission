import React from "react";
import {HumansInSpace} from "../../Components/HumansInSpace/HumansInSpace";
import {Photocard} from "../../Components/Photocard/Photocard";
import './HumansAtNasa.scss';

export function HumansAtNasa() {
    return (
        <div className='humansAtNasaBody'>
            <h1 className='opportunity'>Humans At Nasa</h1>
            <p>NASA's Mars missions are designed, built and operated by some of the best and brightest. Meet some of the amazing people who do their best work on another planet.</p>
            <HumansInSpace/>
            <Photocard imageUrl={"https://science.jpl.nasa.gov/images/people-3979.jpg"}
                       altText={"Laura Kerber"}
                       imageTitle={"Laura Kerber - Research Scientist"}
                       description={"Laura Kerber is a research scientist at JPL with interests in physical volcanology, aeolian geomorphology, wind over complex surfaces, the ancient Martian climate."}
                       testid="photocard"
            />
            <Photocard imageUrl={"https://science.jpl.nasa.gov/images/people-135.jpg"}
                       altText={"Dr. Timothy Parker"}
                       imageTitle={"Dr. Timothy Parker - Geology Team Group Lead"}
                       description={"Dr. Tim Parker was the originator of the Mars Ocean hypothesis. He earned his Ph.D. at the University of Southern California in 1994, with a dissertation entitled \"Martian Paleolakes and Oceans.\""}
                       testid="photocard"
            />
            <Photocard imageUrl={"https://science.jpl.nasa.gov/images/people-4770.jpg"}
                       altText={"Nathan Williams"}
                       imageTitle={"Nathan Williams - Planetary Geologist"}
                       description={"Nathan Williams is a planetary geologist with particular interest in the remote sensing of planetary surfaces, especially relating to structural geology, geodesy, and landform evolution."}
                       testid="photocard"
            />
        </div>
    );
} 