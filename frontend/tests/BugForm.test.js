import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../src/components/BugForm';

describe('BugForm Component', () => {
  test('renders BugForm correctly', () => {
    render(<BugForm />);
    expect(screen.getByLabelText(/bug title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/bug description/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('submits the form with correct data', () => {
    const handleSubmit = jest.fn();
    render(<BugForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/bug title/i), {
      target: { value: 'Test Bug' },
    });
    fireEvent.change(screen.getByLabelText(/bug description/i), {
      target: { value: 'This is a test bug description.' },
    });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(handleSubmit).toHaveBeenCalledWith({
      title: 'Test Bug',
      description: 'This is a test bug description.',
    });
  });

  test('shows error message when fields are empty', () => {
    render(<BugForm />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/please fill out this field/i)).toBeInTheDocument();
  });
});