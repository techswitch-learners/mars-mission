﻿import {render} from "@testing-library/react";
import {Curiosity} from "./CuriosityLandingPage";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

test('check Hero component renders on page', () => {
    let curiosityPage = render(
        <Router>
            <Curiosity />    
        </Router>
        );
    const hero = curiosityPage.getByTestId("hero");
    expect(hero).toBeInTheDocument();
});