// import necessary react testing library helpers here
import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const countMessage = screen.getByText(/Counter/i);
  expect(countMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counter = screen.getByTestId('count');
  expect(counter).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incr = screen.getByText('+');
  const counter = screen.getByTestId('count');
  userEvent.click(incr);
  expect(counter).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decr = screen.getByText('-');
  const counter = screen.getByTestId('count');
  userEvent.click(decr);
  expect(counter).toHaveTextContent('-1');
});
