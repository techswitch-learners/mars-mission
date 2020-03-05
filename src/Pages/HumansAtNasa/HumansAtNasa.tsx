﻿﻿import React from "react";
import {NavBar} from "../../NavBar/NavBar";
import {HumanAtNasa} from "../../Components/HumanAtNasa/HumanAtNasa";
import './HumansAtNasa.scss';

export function HumansAtNasa() {
    return (
        <div className='humansAtNasaBody'>
            <h1>Humans At Nasa</h1>
            <p>NASA's Mars missions are designed, built and operated by some of the best and brightest. Meet some of the amazing people who do their best work on another planet.</p>
            <HumanAtNasa name={"Laura Kerber"} jobTitle={"Research Scientist"} jobDescription={"Laura Kerber is a research scientist at JPL with interests in physical volcanology, aeolian geomorphology, wind over complex surfaces, the ancient Martian climate."} imageUrl={"https://science.jpl.nasa.gov/images/people-3979.jpg"}/>
            <HumanAtNasa name={"Dr. Timothy Parker"} jobTitle={"Geology Team Group Lead"} jobDescription={"Dr. Tim Parker was the originator of the Mars Ocean hypothesis. He earned his Ph.D. at the University of Southern California in 1994, with a dissertation entitled \"Martian Paleolakes and Oceans.\""} imageUrl={"https://science.jpl.nasa.gov/images/people-135.jpg"}/>
            <HumanAtNasa name={"Nathan Williams"} jobTitle={"Planetary Geologist"} jobDescription={"Nathan Williams is a planetary geologist with particular interest in the remote sensing of planetary surfaces, especially relating to structural geology, geodesy, and landform evolution."} imageUrl={"https://science.jpl.nasa.gov/images/people-4770.jpg"}/>
        </div>

    );
} 