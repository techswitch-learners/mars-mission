import React from 'react';
import { render } from '@testing-library/react';
import {parseApiData} from "./Components/ApiFetch/ApodApiFetch";


test('check that function returns JSON', () => {
    expect(parseApiData()).not.toBeNull();
});

