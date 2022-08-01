import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';

test('renders counter', () => {
  render(<Counter />);
  const counter = screen.getByText(/Counter/i);
  expect(counter).toBeInTheDocument();
});
