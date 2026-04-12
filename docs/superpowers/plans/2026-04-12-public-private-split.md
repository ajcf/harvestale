# Public/Private Site Split Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Split the Harvest Ale website into a public single-page landing and a password-gated participants-only section using localStorage persistence.

**Architecture:** A new `ProtectedRoute` component guards all `/participants/*` routes by checking `localStorage` for `harvestale_auth`. A new `Login` page writes that key on correct password entry. The existing Schedule, Information, and FAQ pages move under `/participants/*` unchanged; a new `PublicPage` becomes the root `/` route with no navigation bar.

**Tech Stack:** React 17, react-router-dom v5, MUI v5, @testing-library/react v9, Jest (via react-scripts)

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `src/Components/ProtectedRoute.js` | Create | Guards private routes; redirects to login if not authenticated |
| `src/Login.js` | Create | Password entry form; writes `harvestale_auth` to localStorage on success |
| `src/PublicPage.js` | Create | Public landing page; no nav bar; public schedule + teams + participants link |
| `src/Components/Header/index.js` | Modify | Add logout button that clears localStorage and redirects to `/` |
| `src/App.js` | Modify | Wire all routes: public, login, protected participants routes, legacy redirects |
| `src/Components/ProtectedRoute.test.js` | Create | Tests for auth check and redirect behavior |
| `src/Login.test.js` | Create | Tests for password validation, error display, localStorage write |
| `src/PublicPage.test.js` | Create | Tests for page structure and participants link |
| `src/Components/Header/Header.test.js` | Create | Tests for logout button behavior |

---

### Task 1: ProtectedRoute component

**Files:**
- Create: `src/Components/ProtectedRoute.js`
- Create: `src/Components/ProtectedRoute.test.js`

- [ ] **Step 1: Write the failing tests**

Create `src/Components/ProtectedRoute.test.js`:

```jsx
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
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
yarn test --watchAll=false --testPathPattern="ProtectedRoute.test"
```

Expected: FAIL — `Cannot find module './ProtectedRoute'`

- [ ] **Step 3: Create ProtectedRoute component**

Create `src/Components/ProtectedRoute.js`:

```jsx
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('harvestale_auth') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/participants/login" />
      )
    }
  />
);

export default ProtectedRoute;
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
yarn test --watchAll=false --testPathPattern="ProtectedRoute.test"
```

Expected: PASS — 2 tests passing

- [ ] **Step 5: Commit**

```bash
git add src/Components/ProtectedRoute.js src/Components/ProtectedRoute.test.js
git commit -m "feat: add ProtectedRoute component with localStorage auth check"
```

---

### Task 2: Login page

**Files:**
- Create: `src/Login.js`
- Create: `src/Login.test.js`

- [ ] **Step 1: Write the failing tests**

Create `src/Login.test.js`:

```jsx
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
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
yarn test --watchAll=false --testPathPattern="Login.test"
```

Expected: FAIL — `Cannot find module './Login'`

- [ ] **Step 3: Create Login component**

Create `src/Login.js`:

```jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const PASSWORD = process.env.REACT_APP_PARTICIPANT_PASSWORD || 'harvest2026';

const Login = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === PASSWORD) {
      localStorage.setItem('harvestale_auth', 'true');
      history.push('/participants/schedule');
    } else {
      setError(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
        <Typography variant="h5" gutterBottom>Participants Only</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: 300 }}>
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false); }}
            error={error}
            helperText={error ? 'Incorrect password' : ''}
            margin="normal"
            inputProps={{ 'aria-label': 'Password' }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
            Enter
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
```

Note: `REACT_APP_PARTICIPANT_PASSWORD` can be set in a `.env` file (not committed to git) to change the password without editing source. The fallback `'harvest2026'` is used in development and tests.

- [ ] **Step 4: Run tests to verify they pass**

```bash
yarn test --watchAll=false --testPathPattern="Login.test"
```

Expected: PASS — 4 tests passing

- [ ] **Step 5: Commit**

```bash
git add src/Login.js src/Login.test.js
git commit -m "feat: add Login page with hardcoded password and localStorage auth"
```

---

### Task 3: PublicPage

**Files:**
- Create: `src/PublicPage.js`
- Create: `src/PublicPage.test.js`

- [ ] **Step 1: Write the failing tests**

Create `src/PublicPage.test.js`:

```jsx
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
  const { getByText } = renderPublicPage();
  expect(getByText(/the harvest ale/i)).toBeTruthy();
});

test('renders schedule section', () => {
  const { getByText } = renderPublicPage();
  expect(getByText(/schedule/i)).toBeTruthy();
});

test('renders participating teams section', () => {
  const { getByText } = renderPublicPage();
  expect(getByText(/participating teams/i)).toBeTruthy();
});

test('renders Participants Only link pointing to /participants/login', () => {
  const { getByText } = renderPublicPage();
  const link = getByText(/participants only/i);
  expect(link.closest('a').getAttribute('href')).toBe('/participants/login');
});

test('does not render a nav header', () => {
  const { queryByText } = renderPublicPage();
  expect(queryByText(/general information/i)).toBeNull();
  expect(queryByText(/faq/i)).toBeNull();
});
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
yarn test --watchAll=false --testPathPattern="PublicPage.test"
```

Expected: FAIL — `Cannot find module './PublicPage'`

- [ ] **Step 3: Create PublicPage component**

Create `src/PublicPage.js`:

```jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import ScheduleDay from './Components/ScheduleDay';

const PublicPage = () => (
  <ThemeProvider theme={theme}>
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        The Harvest Ale
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Schedule
      </Typography>
      {/* Public performance schedule — replace placeholder events with actual public performances */}
      <ScheduleDay
        day="Saturday"
        date="10/11"
        events={[
          { time: "3p", label: "Ashfield Fall Festival" },
        ]}
      />
      <ScheduleDay
        day="Sunday"
        date="10/12"
        events={[
          { time: "10:30a", label: "Three Sisters Sanctuary" },
          { time: "11:45a", label: "Trolley Museum" },
          { time: "3p", label: "Wilder Farm Sampler" },
        ]}
      />

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Participating Teams
      </Typography>
      {/* Replace with actual team list */}
      <Typography>Team information coming soon.</Typography>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <RouterLink to="/participants/login">Participants Only</RouterLink>
      </Box>
    </Container>
  </ThemeProvider>
);

export default PublicPage;
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
yarn test --watchAll=false --testPathPattern="PublicPage.test"
```

Expected: PASS — 5 tests passing

- [ ] **Step 5: Commit**

```bash
git add src/PublicPage.js src/PublicPage.test.js
git commit -m "feat: add public landing page with placeholder schedule and teams"
```

---

### Task 4: Add logout to Header

**Files:**
- Modify: `src/Components/Header/index.js`
- Create: `src/Components/Header/Header.test.js`

- [ ] **Step 1: Write the failing test**

Create `src/Components/Header/Header.test.js`:

```jsx
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
  localStorage.setItem('harvestale_auth', 'true');
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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
yarn test --watchAll=false --testPathPattern="Header.test"
```

Expected: FAIL — test for "log out" button fails, element not found

- [ ] **Step 3: Update Header/index.js**

Replace the contents of `src/Components/Header/index.js`:

```jsx
import React from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import ResponsiveNav from "./ResponsiveNav";

const Header = (props) => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('harvestale_auth');
    history.push('/');
  };

  return (
    <div className="header">
      <ResponsiveNav currentPage={props.currentPage} />
      <RouterLink to="/" className="header-logo logo-with-shadow">
        The Harvest Ale
      </RouterLink>
      <Button onClick={handleLogout} color="secondary" size="small">
        Log out
      </Button>
    </div>
  );
};

export default Header;
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
yarn test --watchAll=false --testPathPattern="Header.test"
```

Expected: PASS — 3 tests passing

- [ ] **Step 5: Commit**

```bash
git add src/Components/Header/index.js src/Components/Header/Header.test.js
git commit -m "feat: add logout button to header"
```

---

### Task 5: Update App.js routing

**Files:**
- Modify: `src/App.js`

No new tests needed here — the routing is integration-level and covered by the component tests above. Verify manually with `yarn start`.

- [ ] **Step 1: Update App.js**

Replace the contents of `src/App.js`:

```jsx
import { hot } from 'react-hot-loader';
import React from 'react';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './css/style.css';
import NotFound from './NotFound';
import FAQ from './FAQ';
import Schedule from './Schedule';
import Information from './Information';
import PublicPage from './PublicPage';
import Login from './Login';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Switch>
                    <Route path="/" component={PublicPage} exact />
                    <Route path="/participants/login" component={Login} />
                    <ProtectedRoute path="/participants/schedule" component={Schedule} />
                    <ProtectedRoute path="/participants/information" component={Information} />
                    <ProtectedRoute path="/participants/faq" component={FAQ} />
                    <Redirect from="/schedule" to="/participants/schedule" />
                    <Redirect from="/information" to="/participants/information" />
                    <Redirect from="/faq" to="/participants/faq" />
                    <Route path="/404" component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default hot(module)(App);
```

- [ ] **Step 2: Run full test suite**

```bash
yarn test --watchAll=false
```

Expected: All tests pass with no failures.

- [ ] **Step 3: Smoke-test the app manually**

```bash
yarn start
```

Verify:
- `/` shows public page with no nav bar, schedule, teams placeholder, and "Participants Only" link
- Clicking "Participants Only" goes to `/participants/login`
- Entering wrong password shows "Incorrect password"
- Entering `harvest2026` navigates to `/participants/schedule` with the full schedule and nav bar
- Nav links to `/participants/information` and `/participants/faq` work
- "Log out" button returns to `/` and subsequent visit to `/participants/schedule` redirects back to login
- Old URLs `/schedule`, `/information`, `/faq` redirect to their `/participants/*` equivalents

- [ ] **Step 4: Commit**

```bash
git add src/App.js
git commit -m "feat: wire public/private routing in App.js"
```
