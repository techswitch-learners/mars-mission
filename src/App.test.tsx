import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('check app renders and page contains header text', () => {
    let app = render(<App />);
    const header = app.getByText('/curiosity');
    expect(header).toBeInTheDocument();
});

test('check page contains footer', () => {
    let app = render(<App />);
   const footer = app.getByTestId("footer");
   expect(footer).toBeInTheDocument();
});
