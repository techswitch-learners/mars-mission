import React from 'react';
import {render, wait} from '@testing-library/react';
import {AstronautsInSpace, getHumansInSpace, Astronaut} from "../../Pages/HumansAtNasa/HumansInSpaceApiFetch";
import * as HumansInSpace from './HumansInSpace';
import {HeroImageOfTheDay} from "../HeroImageOfTheDay/HeroImageOfTheDay";
import App from "../../App";
import {AstronautProps} from "./HumansInSpace";

test('check get method returns valid data', () => {

    const astronautData = {
            name: "TechSwitch",
            craft: "Monkey"
    };
    
    let app = render(<App/>);
    const astronautsInSpaceNow = app.getByTestId("astronautsInSpaceNow");
    expect(astronautsInSpaceNow).toBeInTheDocument();

    jest.spyOn(HumansInSpace, 'DisplayAstronauts').mockImplementation((props:AstronautProps) => Promise.resolve(astronautData));
});