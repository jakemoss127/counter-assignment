import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

// Renders counter message
test('renders counter message', () => {
  render(<Counter />);
  const counterTitle = screen.getByText(/Counter/i);
  expect(counterTitle).toBeInTheDocument();
});

// Should render initial count with value of 0
test('should render initial count with value of 0', () => {
  render(<Counter />);
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

// Clicking + increments the count
test('clicking + increments the count', () => {
  render(<Counter />);
  const incrementButton = screen.getByRole('button', { name: '+' });
  userEvent.click(incrementButton);

  const incrementedCount = screen.getByTestId('count');
  expect(incrementedCount).toHaveTextContent('1');
});

// Clicking - decrements the count
test('clicking - decrements the count', () => {
  render(<Counter />);
  // Increment first to avoid testing negative numbers, assuming your component doesn't handle them specifically
  const incrementButton = screen.getByRole('button', { name: '+' });
  userEvent.click(incrementButton); // count is now 1
  
  const decrementButton = screen.getByRole('button', { name: '-' });
  userEvent.click(decrementButton); // should decrement back to 0

  const decrementedCount = screen.getByTestId('count');
  expect(decrementedCount).toHaveTextContent('0');
});
