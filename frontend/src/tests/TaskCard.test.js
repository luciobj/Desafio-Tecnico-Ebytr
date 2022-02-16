import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const taskCardTitle = screen.getByTestId('task-card-title');
  const taskCardStatus = screen.getByTestId('task-card-status');
  const taskCardDate = screen.getByTestId('task-card-date');
  expect(taskCardTitle).toBeInTheDocument();
  expect(taskCardStatus).toBeInTheDocument();
  expect(taskCardDate).toBeInTheDocument();
});
