import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {Curiosity} from "./Curiosity";

test('curiosity page url contains word curiosity', () => {
    let curiosityUrl = "http://localhost:3000/curiosity";
    expect(curiosityUrl).toContain('curiosity')
});

