import React from "react";
import {render} from "@testing-library/react";
import {DiscoverRoversPage} from "./DiscoverRoversPage";
import {BrowserRouter as Router} from "react-router-dom";


test('check if photocards render', () => {

    let discoverPage = render(
        <Router>
            <DiscoverRoversPage />
        </Router>);
    const photo1 = discoverPage.getByTestId("sojournerPhotocard");
    expect(photo1).toBeInTheDocument();

    const photo2 = discoverPage.getByTestId("spiritAndOpportunityPhotocard");
    expect(photo2).toBeInTheDocument();

    const photo3 = discoverPage.getByTestId("curiosityPhotocard");
    expect(photo3).toBeInTheDocument();
});