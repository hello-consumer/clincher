import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/Lorem ipsum/i);
  expect(buttonElement).toBeInTheDocument();
});
