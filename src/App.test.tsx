import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Test Eurosport/i);
  expect(titleElement).toBeInTheDocument();
});
