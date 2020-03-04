﻿import React from "react";
import {NavBar} from "../../NavBar/NavBar";
import {HumanAtNasa} from "../../Components/HumanAtNasa/HumanAtNasa";

export function HumansAtNasa() {
    return (
        <div>
            <NavBar/>
            <HumanAtNasa name={"Dr. Steve Squyres"} jobTitle={"principal investigator"} imageUrl={"https://mars.nasa.gov/system/resources/detail_files/7981_20040103_Sp_EDL_02-full2.jpg"}/>
        </div>
            
    );
} 