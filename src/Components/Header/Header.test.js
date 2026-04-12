import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './index';

let mockPush;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({ push: mockPush }),
}));

beforeEach(() => {
  mockPush = jest.fn();
});

afterEach(() => {
  localStorage.clear();
});

test('renders logo link', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Header currentPage="Schedule" />
    </MemoryRouter>
  );
  expect(getByText(/the harvest ale/i)).toBeTruthy();
});

test('logout button clears localStorage', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Header currentPage="Schedule" />
    </MemoryRouter>
  );
  fireEvent.click(getByText(/log out/i));
  expect(localStorage.getItem('harvestale_auth')).toBeNull();
});

test('logout button redirects to /', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Header currentPage="Schedule" />
    </MemoryRouter>
  );
  fireEvent.click(getByText(/log out/i));
  expect(mockPush).toHaveBeenCalledWith('/');
});
