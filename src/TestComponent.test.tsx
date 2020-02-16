import React from 'react';
import { render } from '@testing-library/react';
import TestComponent from './TestComponent';

test('renders hello world', () => {
  const { getByText } = render(<TestComponent />);
  const element = getByText(/Hello World/i);
  expect(element).toBeInTheDocument();
});
