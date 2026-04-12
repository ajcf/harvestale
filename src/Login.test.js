import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

let mockPush;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({ push: mockPush }),
}));

const renderLogin = () =>
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

beforeEach(() => {
  mockPush = jest.fn();
  localStorage.clear();
});

test('renders password input and submit button', () => {
  const { getByLabelText, getByText } = renderLogin();
  expect(getByLabelText(/password/i)).toBeTruthy();
  expect(getByText(/enter/i)).toBeTruthy();
});

test('shows error message on wrong password', () => {
  const { getByLabelText, getByText } = renderLogin();
  fireEvent.change(getByLabelText(/password/i), { target: { value: 'wrongpassword' } });
  fireEvent.click(getByText(/enter/i));
  expect(getByText(/incorrect password/i)).toBeTruthy();
});

test('does not set localStorage on wrong password', () => {
  const { getByLabelText, getByText } = renderLogin();
  fireEvent.change(getByLabelText(/password/i), { target: { value: 'wrongpassword' } });
  fireEvent.click(getByText(/enter/i));
  expect(localStorage.getItem('harvestale_auth')).toBeNull();
});

test('sets localStorage and redirects on correct password', () => {
  const { getByLabelText, getByText } = renderLogin();
  fireEvent.change(getByLabelText(/password/i), { target: { value: 'harvest2026' } });
  fireEvent.click(getByText(/enter/i));
  expect(localStorage.getItem('harvestale_auth')).toBe('true');
  expect(mockPush).toHaveBeenCalledWith('/participants/schedule');
});
