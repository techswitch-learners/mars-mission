import React from 'react';
import { render } from '@testing-library/react';
import {parseApiData} from "./ApodApiFetch";


test('check function returns JSON data', () => {
    expect(parseApiData()).not.toBeNull();
});