import React from 'react';
import { render } from '@testing-library/react';
import {getImageOfTheDay} from "./Components/ApiFetch/ApodApiFetch";


test('check that function returns JSON', () => {
    expect(getImageOfTheDay()).not.toBeNull();
});

