import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PublicPage from './PublicPage';

const renderPublicPage = () =>
  render(
    <MemoryRouter>
      <PublicPage />
    </MemoryRouter>
  );

test('renders The Harvest Ale title', () => {
  const { getAllByText } = renderPublicPage();
  expect(getAllByText(/the harvest ale/i).length).toBeGreaterThan(0);
});

test('renders schedule section', () => {
  const { getByText } = renderPublicPage();
  expect(getByText('Schedule')).toBeTruthy();
});

test('renders participating teams section', () => {
  const { getByText } = renderPublicPage();
  expect(getByText('Participating Teams')).toBeTruthy();
});

test('renders Participant Information link pointing to /participants/login', () => {
  const { getByText } = renderPublicPage();
  const link = getByText(/participant information/i);
  expect(link.closest('a').getAttribute('href')).toBe('/participants/login');
});

test('does not render a nav header', () => {
  const { queryByText } = renderPublicPage();
  expect(queryByText(/general information/i)).toBeNull();
  expect(queryByText(/faq/i)).toBeNull();
});
