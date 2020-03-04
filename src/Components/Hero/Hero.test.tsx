import {render} from "@testing-library/react";
import {Curiosity} from "../../Pages/CuriosityLandingPage/CuriosityLandingPage";
import React from "react";

test('check Hero component renders on page', () => {
    let curiosityPage = render(<Curiosity />);
    const hero = curiosityPage.getByTestId("hero");
    expect(hero).toBeInTheDocument();
});