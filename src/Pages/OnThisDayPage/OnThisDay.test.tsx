import React from "react";
﻿﻿import { render, wait, fireEvent} from '@testing-library/react';
import {OnThisDayPage} from "./OnThisDay";
import * as Api from "../../Components/ApiFetch/RoversApiFetch";

test('check image updates when form date changed', async () => {
    const imageSource =  "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG";
    const fakeImage = {
        sol: 1004,
        img_src: imageSource,
        earth_date: "2015-06-03",
    };
    jest.spyOn(Api, "getRoverImage").mockImplementation((dateInput: string | null) => Promise.resolve(fakeImage));
    
    const component = render(<OnThisDayPage/>);
    
    expect(component.queryByTestId("image-from-rover")).toBeNull();
    
    const dateInput = component.getByTestId("date-input") as HTMLInputElement;
    fireEvent.change(dateInput, { target: { value: "2015-07-03"} });
    
    await wait(() => expect(dateInput.value).toBe("2015-07-03"));
    
    const dateForm = component.getByTestId("on-this-day-form");
    fireEvent.submit(dateForm);
    
    await wait(() => component.getByTestId("image-from-rover"));
    const imageElement = component.getByTestId("image-from-rover") as HTMLImageElement;
    expect(imageElement.src).toBe(imageSource);
});
    