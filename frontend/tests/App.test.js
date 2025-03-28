import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the homepage', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bug Tracker/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the bug form', () => {
  render(<App />);
  const formElement = screen.getByLabelText(/Report a new bug/i);
  expect(formElement).toBeInTheDocument();
});

test('renders the bug list', () => {
  render(<App />);
  const listElement = screen.getByText(/Reported Bugs/i);
  expect(listElement).toBeInTheDocument();
});