import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const ProtectedContent = () => <div>Protected Content</div>;
const LoginPage = () => <div>Login Page</div>;

const renderWithRouter = (isAuthenticated) => {
  if (isAuthenticated) {
    localStorage.setItem('harvestale_auth', 'true');
  } else {
    localStorage.removeItem('harvestale_auth');
  }
  return render(
    <MemoryRouter initialEntries={['/participants/schedule']}>
      <Switch>
        <ProtectedRoute path="/participants/schedule" component={ProtectedContent} />
        <Route path="/participants/login" component={LoginPage} />
      </Switch>
    </MemoryRouter>
  );
};

afterEach(() => {
  localStorage.clear();
});

test('renders protected component when authenticated', () => {
  const { getByText } = renderWithRouter(true);
  expect(getByText('Protected Content')).toBeTruthy();
});

test('redirects to /participants/login when not authenticated', () => {
  const { getByText } = renderWithRouter(false);
  expect(getByText('Login Page')).toBeTruthy();
});
