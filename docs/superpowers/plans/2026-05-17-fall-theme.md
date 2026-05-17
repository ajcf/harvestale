# Fall Theme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the approved "Warm & Refined" fall design to all pages — public schedule, login, participant schedule, information, and FAQ — with full mobile/desktop responsiveness.

**Architecture:** Styling changes live almost entirely in `src/css/style.css`. Component files receive only minimal markup additions (CSS class names, one wrapper div). No logic, routing, or copy changes. The `foliage.jpg` asset already exists in `/public`.

**Tech Stack:** React (CRA), MUI v5 (`@mui/material`), legacy MUI v4 (`@material-ui/core`) for `withStyles`, CSS, `@testing-library/react`, `react-scripts test`

---

## File Map

| File | Role |
|---|---|
| `src/css/style.css` | All new visual rules — hero, foliage sides, schedule rows, tour columns, login card, content pages |
| `src/theme.js` | Palette only: primary `#c8942a`, secondary `#5a8a4a` |
| `src/Components/Header/PublicHeader.js` | Participant link — add `logo-with-shadow` class, absolute positioning class |
| `src/Components/Header/ResponsiveNav.js` | Nav bar border color, active-page font weight (already inline) |
| `src/Components/ScheduleDay/index.js` | Replace day label + commented-out date col with name + fading rule markup |
| `src/Components/ScheduleItem/index.js` | Replace MUI Grid row with semantic flex markup |
| `src/PublicPage.js` | Add `tour-jm` / `tour-wr` classes to tour Grid items; wrap intro in `.intro` |
| `src/Schedule.js` | Add `tour-jm` / `tour-wr` classes to tour Grid items |
| `src/Login.js` | Wrap form in `.login-card` div; add subtitle paragraph |

---

## Task 1: Update MUI theme palette

**Files:**
- Modify: `src/theme.js`

- [ ] **Step 1: Verify tests pass before any changes**

```bash
CI=true npm test -- --watchAll=false
```

Expected: all tests pass (establish a baseline).

- [ ] **Step 2: Update the palette**

Replace the full contents of `src/theme.js`:

```js
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#c8942a',
    },
    secondary: {
      main: '#5a8a4a',
    },
  },
});

export default theme;
```

- [ ] **Step 3: Run tests to confirm nothing broke**

```bash
CI=true npm test -- --watchAll=false
```

Expected: all tests pass.

- [ ] **Step 4: Commit**

```bash
git add src/theme.js
git commit -m "style: update MUI theme to fall palette (amber primary, forest green secondary)"
```

---

## Task 2: Base body styles — font size, background, font family

**Files:**
- Modify: `src/css/style.css`

- [ ] **Step 1: Replace the `body` rule**

In `src/css/style.css`, find and replace the existing `body` rule:

```css
/* BEFORE */
body {
  font-family: 'EagleLake';
  font-weight: 400;
  color: #FFD700;
  margin: 0;
}
```

```css
/* AFTER */
body {
  font-family: 'EagleLake';
  font-size: 18px;
  font-weight: 400;
  color: #3d2e1e;
  margin: 0;
  background-color: #fffbf0;
}
```

- [ ] **Step 2: Replace the `body:has(.not_home)` rule**

```css
/* BEFORE */
body:has(.not_home) {
  background-color: #fffbf0;
}
```

```css
/* AFTER */
body:has(.not_home) {
  background-color: #fffbf0;
}

/* Links — consistent warm underline across all content */
.not_home a {
  color: #3d2e1e;
  text-decoration: underline;
  text-decoration-color: rgba(90, 138, 74, 0.5);
}
.not_home a:hover {
  text-decoration-color: rgba(90, 138, 74, 0.9);
}
```

- [ ] **Step 3: Run tests**

```bash
CI=true npm test -- --watchAll=false
```

Expected: all tests pass.

- [ ] **Step 4: Commit**

```bash
git add src/css/style.css
git commit -m "style: set 18px base font, cream background, warm link styles"
```

---

## Task 3: Hero header — tall foliage photo fading to cream

**Files:**
- Modify: `src/css/style.css`

The `.header` class is used by both `PublicHeader` and `Header`. The existing rule already uses `foliage.jpg`. Replace its styles with the tall-hero design.

- [ ] **Step 1: Replace the `.header` CSS block and related responsive rules**

Find and remove the existing `.header` block and both `@media` blocks that reference `.header`. Replace with:

```css
/* ── HERO HEADER ── */
.header {
  background:
    linear-gradient(to bottom, rgba(30, 15, 5, 0.1) 0%, rgba(255, 251, 240, 1) 90%),
    url('../../public/foliage.jpg') center / cover no-repeat;
  position: absolute;
  z-index: 15;
  width: 100%;
}

.header-logo {
  font-weight: normal;
  text-decoration: none;
  color: #2e1a08;
  letter-spacing: 0.12em;
  text-shadow: 0 1px 8px rgba(255, 248, 220, 0.95), 0 0 30px rgba(255, 248, 220, 0.7);
  line-height: 1;
}

.header-tagline {
  font-size: 0.85rem;
  color: #4a7840;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin-top: 0.4rem;
  text-shadow: 0 1px 4px rgba(255, 248, 220, 0.9);
}

/* Participant link — public pages only */
.header-participant-link {
  font-size: 0.8rem;
  color: #3a6030 !important;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none !important;
  border-bottom: 1px solid rgba(58, 96, 48, 0.4) !important;
}

@media (min-width: 750px) {
  .header {
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .header-logo {
    font-size: 3rem;
  }
  .header-participant-link {
    position: absolute;
    top: 0.75rem;
    right: 1.25rem;
  }
  .content-wrapper {
    padding-top: 160px;
  }
}

@media (max-width: 750px) {
  .header {
    height: 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
  }
  .header-logo {
    font-size: 1.8rem;
    letter-spacing: 0.06em;
    text-shadow: 0 1px 6px rgba(255, 248, 220, 0.95);
  }
  .header-tagline {
    display: none;
  }
  .content-wrapper {
    padding-top: 64px;
  }
}
```

- [ ] **Step 2: Add tagline to PublicHeader**

Replace the full contents of `src/Components/Header/PublicHeader.js`:

```jsx
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const PublicHeader = () => (
  <div className="header">
    <RouterLink to="/" className="header-logo">
      The Harvest Ale
    </RouterLink>
    <div className="header-tagline">Northern Pioneer Valley</div>
    <RouterLink
      to="/participants/login"
      className="header-participant-link"
    >
      Participant Information →
    </RouterLink>
  </div>
);

export default PublicHeader;
```

- [ ] **Step 3: Add tagline to participant Header**

The participant Header keeps `<ResponsiveNav>` as the last child so it sits at the bottom of the hero (the header uses `justify-content: flex-end` on desktop). Replace the full contents of `src/Components/Header/index.js`:

```jsx
import React from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import ResponsiveNav from "./ResponsiveNav";

const Header = (props) => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('harvestale_auth');
    history.push('/');
  };

  return (
    <div className="header">
      <RouterLink to="/" className="header-logo">
        The Harvest Ale
      </RouterLink>
      <div className="header-tagline">Northern Pioneer Valley</div>
      <ResponsiveNav currentPage={props.currentPage} onLogout={handleLogout} />
    </div>
  );
};

export default Header;
```

- [ ] **Step 4: Run tests**

```bash
CI=true npm test -- --watchAll=false
```

Expected: all tests pass. The Header tests check for "The Harvest Ale" text and logout behavior — both still present.

- [ ] **Step 5: Commit**

```bash
git add src/css/style.css src/Components/Header/PublicHeader.js src/Components/Header/index.js
git commit -m "style: tall foliage hero header with fade-to-cream gradient"
```

---

## Task 4: Side foliage decoration

**Files:**
- Modify: `src/css/style.css`

Uses `::before` / `::after` on `.not_home` with `position: fixed`. No JS or markup changes needed.

- [ ] **Step 1: Add foliage side rules to style.css**

Add these rules after the `.not_home .background` block:

```css
/* ── SIDE FOLIAGE — desktop only ── */
@media (min-width: 750px) {
  .not_home::before,
  .not_home::after {
    content: '';
    position: fixed;
    top: 0;
    width: 120px;
    height: 100vh;
    background: url('../../public/foliage.jpg') center / cover no-repeat;
    pointer-events: none;
    z-index: 5;
  }
  .not_home::before {
    left: 0;
    -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.28) 60%, transparent 100%);
    mask-image: linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.28) 60%, transparent 100%);
  }
  .not_home::after {
    right: 0;
    -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.28) 60%, transparent 100%);
    mask-image: linear-gradient(to left, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.28) 60%, transparent 100%);
  }
}
```

- [ ] **Step 2: Run tests**

```bash
CI=true npm test -- --watchAll=false
```

Expected: all tests pass.

- [ ] **Step 3: Commit**

```bash
git add src/css/style.css
git commit -m "style: add fixed foliage side strips on desktop"
```

---

## Task 5: Navigation bar

**Files:**
- Modify: `src/Components/Header/ResponsiveNav.js`
- Modify: `src/css/style.css`

- [ ] **Step 1: Update the nav-bar CSS**

Find and replace the `.MuiDrawer-paperAnchorLeft` rule and the `.header .menu-icon` rules in `style.css`. Also add the new `.nav-bar` rules:

```css
/* ── NAV BAR (participant pages) ── */
.nav-bar {
  background: #fffbf0;
  border-bottom: 1px solid #e8d8a0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0.55rem 1rem;
  position: relative;
  z-index: 10;
  width: 100%;
}

.nav-bar a,
.nav-bar button {
  font-size: 0.85rem;
  color: #5a4030;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
}

.nav-bar a.active,
.nav-bar button.active {
  color: #c8942a;
  border-bottom: 1.5px solid #c8942a;
  padding-bottom: 1px;
}

.MuiDrawer-paperAnchorLeft {
  background-color: #fffbf0 !important;
}

.drawer-close {
  display: flex;
  justify-content: flex-end;
}

.header .menu-icon {
  font-size: 2rem;
  color: #5a4030;
}

.menu-icon svg {
  height: 2.5rem;
  width: 2.5rem;
}
```

- [ ] **Step 2: Update ResponsiveNav to use nav-bar class and correct colors**

Replace the full contents of `src/Components/Header/ResponsiveNav.js`:

```jsx
import React, { Component, Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonBarCollapse";

import ScheduleSharpIcon from "@mui/icons-material/ScheduleSharp";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import HelpOutline from "@mui/icons-material/HelpOutline";
import Logout from "@mui/icons-material/Logout";

const styles = (theme) => ({
  root: {
    [theme.breakpoints.down(750)]: {
      position: "absolute",
      left: "0",
    },
    [theme.breakpoints.up(750)]: {
      width: "100%",
    },
  },
  buttonBar: {
    [theme.breakpoints.down(750)]: {
      display: "none",
    },
    margin: "10px 0",
    paddingRight: "16px",
    left: 0,
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottom: "solid 1px #e8d8a0",
  },
  btn: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
    marginTop: theme.spacing(0.5),
  },
  collapseBox: {
    display: "flex",
    flexDirection: "column",
    width: 300,
  },
});

class ResponsiveNav extends Component {
  getButton = (path, title, icon) => {
    const { classes, currentPage } = this.props;
    return (
      <Button
        key={path}
        className={classes.btn}
        component={RouterLink}
        startIcon={icon}
        variant="text"
        sx={{
          fontSize: "0.85rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: currentPage === title ? "#c8942a" : "#5a4030",
          fontWeight: currentPage === title ? "700" : "400",
          borderBottom: currentPage === title ? "1.5px solid #c8942a" : "none",
          borderRadius: 0,
          paddingBottom: currentPage === title ? "2px" : "4px",
          "&:hover": { backgroundColor: "transparent", color: "#c8942a" },
        }}
        to={path}
      >
        {title}
      </Button>
    );
  };

  getLogoutButton = () => {
    const { classes, onLogout } = this.props;
    if (!onLogout) return null;
    return (
      <Button
        key="logout"
        className={classes.btn}
        variant="text"
        onClick={onLogout}
        startIcon={<Logout />}
        sx={{
          fontSize: "0.85rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#5a4030",
          "&:hover": { backgroundColor: "transparent", color: "#c8942a" },
        }}
      >
        Log out
      </Button>
    );
  };

  getItems = () => (
    <Fragment>
      {[
        this.getButton("/schedule", "Schedule", <ScheduleSharpIcon />),
        this.getButton("/information", "General Information", <InfoOutlined />),
        this.getButton("/faq", "FAQ", <HelpOutline />),
        this.getLogoutButton(),
      ]}
    </Fragment>
  );

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ButtonAppBarCollapse>
          <Box className={classes.collapseBox}>{this.getItems()}</Box>
        </ButtonAppBarCollapse>
        <div className={classes.buttonBar}>{this.getItems()}</div>
      </div>
    );
  }
}

export default withStyles(styles)(ResponsiveNav);
```

- [ ] **Step 3: Run tests**

```bash
CI=true npm test -- --watchAll=false
```

Expected: all tests pass. The Header tests check for logout behavior — still present.

- [ ] **Step 4: Commit**

```bash
git add src/Components/Header/ResponsiveNav.js src/css/style.css
git commit -m "style: nav bar warm palette, amber active state"
```

---

## Task 6: ScheduleDay — day header with fading rule

**Files:**
- Modify: `src/Components/ScheduleDay/index.js`
- Modify: `src/css/style.css`

- [ ] **Step 1: Update ScheduleDay markup**

Replace the full contents of `src/Components/ScheduleDay/index.js`:

```jsx
import ScheduleItem from '../ScheduleItem';

const ScheduleDay = (props) => (
  <div className="schedule-day">
    <div className="schedule-day-header">
      <div className="schedule-day-label">{props.day}</div>
      <div className="schedule-day-rule" />
    </div>
    <div className="schedule-day-items">
      {props.events.map((child) => (
        <ScheduleItem
          key={child.label + "-" + child.time}
          label={child.label}
          time={child.time}
          description={child.description}
        />
      ))}
    </div>
  </div>
);

export default ScheduleDay;
```

- [ ] **Step 2: Update schedule day CSS**

Find and replace all existing `.schedule-day-label` and `.schedule-date` rules in `style.css` with:

```css
/* ── SCHEDULE DAY ── */
.schedule-day {
  margin-bottom: 2.5rem;
}

.schedule-day-header {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.schedule-day-label {
  font-size: 1.6rem;
  font-family: 'EagleLake';
  font-weight: normal;
  color: #c8942a;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.schedule-day-rule {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, #d4a84a, transparent);
}
```

- [ ] **Step 3: Run tests**

```bash
CI=true npm test -- --watchAll=false
```

Expected: all tests pass.

- [ ] **Step 4: Commit**

```bash
git add src/Components/ScheduleDay/index.js src/css/style.css
git commit -m "style: schedule day header with amber name and fading rule"
```

---

## Task 7: ScheduleItem — clean flex rows

**Files:**
- Modify: `src/Components/ScheduleItem/index.js`
- Modify: `src/css/style.css`

- [ ] **Step 1: Update ScheduleItem markup**

Replace the full contents of `src/Components/ScheduleItem/index.js`:

```jsx
const ScheduleItem = (props) => (
  <div className="schedule-item">
    <div className="schedule-item-row">
      <div className="schedule-time">{props.time}</div>
      <div className="schedule-label">{props.label}</div>
    </div>
    {props.description && (
      <div className="schedule-description">{props.description}</div>
    )}
  </div>
);

export default ScheduleItem;
```

- [ ] **Step 2: Replace all existing `.schedule-item` CSS rules**

Find and remove all existing `.schedule-item` rules (`.schedule-item`, `.schedule-item .MuiGrid-item.schedule-time`, etc.) and the `.schedule-location` and `.schedule-description` rules. Replace with:

```css
/* ── SCHEDULE ITEM ── */
.schedule-item {
  padding: 0.6rem 0;
  border-bottom: 1px solid #ede0c0;
}

.schedule-day-items .schedule-item:last-child {
  border-bottom: none;
}

.schedule-item-row {
  display: flex;
  gap: 1rem;
  align-items: baseline;
}

.schedule-time {
  min-width: 5rem;
  text-align: right;
  font-size: 0.85rem;
  color: #a08050;
  letter-spacing: 0.05em;
  flex-shrink: 0;
}

.schedule-label {
  font-size: 1.05rem;
  color: #3d2e1e;
  flex: 1;
}

.schedule-description {
  margin-top: 0.5rem;
  padding-left: 6rem;
}
```

- [ ] **Step 3: Run tests**

```bash
CI=true npm test -- --watchAll=false
```

Expected: all tests pass.

- [ ] **Step 4: Commit**

```bash
git add src/Components/ScheduleItem/index.js src/css/style.css
git commit -m "style: schedule item clean flex rows, time right-aligned"
```

---

## Task 8: Two-column tour split

**Files:**
- Modify: `src/css/style.css`
- Modify: `src/PublicPage.js`
- Modify: `src/Schedule.js`

The existing schedule data passes a MUI `<Grid container>` as the `description` prop. Add `.tour-jm` and `.tour-wr` CSS classes to those Grid items and style them with the amber/green top-border treatment.

- [ ] **Step 1: Add tour split CSS to style.css**

Add after the `.schedule-description` rules:

```css
/* ── TOUR SPLIT ── */
.schedule-description .MuiGrid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.schedule-description .tour-jm,
.schedule-description .tour-wr {
  border-top: 2.5px solid;
  padding-top: 0.45rem;
}

.schedule-description .tour-jm {
  border-color: #c8942a;
}

.schedule-description .tour-wr {
  border-color: #5a8a4a;
}

.tour-jm .tour-name {
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #c8942a;
  margin-bottom: 0.4rem;
  display: block;
}

.tour-wr .tour-name {
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #5a8a4a;
  margin-bottom: 0.4rem;
  display: block;
}

.tour-teams {
  font-size: 0.85rem;
  color: #7a6040;
  line-height: 1.6;
}

/* Mobile: stack tour columns */
@media (max-width: 750px) {
  .schedule-description .MuiGrid-container {
    grid-template-columns: 1fr;
  }
  .schedule-description {
    padding-left: 0;
  }
}
```

- [ ] **Step 2: Update PublicPage.js tour Grid items**

In `src/PublicPage.js`, add `className="tour-jm"` to every first-column `<Grid item>` and `className="tour-wr"` to every second-column `<Grid item>`. Also wrap the tour label text in `<span className="tour-name">`. Replace the description JSX for Saturday 10:30am:

```jsx
{
  time: "10:30am", label: "First Stand", description:
    <Grid container>
      <Grid item xs={12} sm={6} className="tour-jm">
        <span className="tour-name">Juggler Meadow</span>
        <a href="https://maps.app.goo.gl/eCw7iMPkAdpZL67f7">Mt Sugarloaf</a>
      </Grid>
      <Grid item xs={12} sm={6} className="tour-wr">
        <span className="tour-name">Wake Robin</span>
        <a href="https://maps.app.goo.gl/vuMTamiYgKfTiUxZ9">Hager's Farm Market</a>
      </Grid>
    </Grid>
},
```

Saturday 11:30am:

```jsx
{
  time: "11:30am", label: "Second Stand", description:
    <Grid container>
      <Grid item xs={12} sm={6} className="tour-jm">
        <span className="tour-name">Juggler Meadow</span>
        <a href="https://maps.app.goo.gl/SvEM5o1xUNgDhnFs9">Historic Deerfield</a>
      </Grid>
      <Grid item xs={12} sm={6} className="tour-wr">
        <span className="tour-name">Wake Robin</span>
        <a href="https://maps.app.goo.gl/GTcx5CfNQg83a7EJ8">West County Cider</a>
      </Grid>
    </Grid>
},
```

Sunday 11:45am (same pattern, this item currently has wrong time label "11:45a" — fix to "11:45am"):

```jsx
{
  time: "11:45am", label: "Second Stand", description:
    <Grid container>
      <Grid item xs={12} sm={6} className="tour-jm">
        <span className="tour-name">Juggler Meadow</span>
        <a href="https://maps.app.goo.gl/SvEM5o1xUNgDhnFs9">Glacial Potholes</a>
      </Grid>
      <Grid item xs={12} sm={6} className="tour-wr">
        <span className="tour-name">Wake Robin</span>
        <a href="https://maps.app.goo.gl/E1ysuuaSgDDzQhpA9">Trolley Museum</a>
      </Grid>
    </Grid>
},
```

Also remove the now-duplicate `{ time: "11:45a", label: "Shelburne Falls Trolley Museum" }` item from Sunday (it's superseded by the split item above).

- [ ] **Step 3: Update Schedule.js tour Grid items**

In `src/Schedule.js`, add `className="tour-jm"` / `className="tour-wr"` and `<span className="tour-name">` wrappers to all four split stands (Saturday 10:30am, 11:30am, Sunday 11:45am). Replace Saturday 10:30am description:

```jsx
description:
  <Grid container>
    <Grid item xs={12} sm={6} className="tour-jm">
      <span className="tour-name">Juggler Meadow</span>
      <div className="tour-teams">Ring O'Bells · Ragged Robin · Jack in the Green</div>
      <a href="https://maps.app.goo.gl/eCw7iMPkAdpZL67f7">Mt Sugarloaf</a>
    </Grid>
    <Grid item xs={12} sm={6} className="tour-wr">
      <span className="tour-name">Wake Robin</span>
      <div className="tour-teams">Handsome Molly · Midnight Capers · Newtowne</div>
      <a href="https://maps.app.goo.gl/vuMTamiYgKfTiUxZ9">Hager's Farm Market</a>
    </Grid>
  </Grid>
```

Saturday 11:30am description:

```jsx
description:
  <Grid container>
    <Grid item xs={12} sm={6} className="tour-jm">
      <span className="tour-name">Juggler Meadow</span>
      <a href="https://maps.app.goo.gl/SvEM5o1xUNgDhnFs9">Historic Deerfield</a>
    </Grid>
    <Grid item xs={12} sm={6} className="tour-wr">
      <span className="tour-name">Wake Robin</span>
      <a href="https://maps.app.goo.gl/GTcx5CfNQg83a7EJ8">West County Cider</a>
    </Grid>
  </Grid>
```

Sunday 11:45am description:

```jsx
description:
  <Grid container>
    <Grid item xs={12} sm={6} className="tour-jm">
      <span className="tour-name">Juggler Meadow</span>
      <div className="tour-teams">Handsome Molly · Midnight Capers · Newtowne</div>
      Glacial Potholes (park at <a href="https://maps.app.goo.gl/E1ysuuaSgDDzQhpA9">Trolley Museum</a>)
    </Grid>
    <Grid item xs={12} sm={6} className="tour-wr">
      <span className="tour-name">Wake Robin</span>
      <div className="tour-teams">Ring O'Bells · Ragged Robin · Jack in the Green</div>
      <a href="https://maps.app.goo.gl/E1ysuuaSgDDzQhpA9">Trolley Museum</a>
    </Grid>
  </Grid>
```

- [ ] **Step 4: Run tests**

```bash
CI=true npm test -- --watchAll=false
```

Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/css/style.css src/PublicPage.js src/Schedule.js
git commit -m "style: two-column tour split with amber/green color coding"
```

---

## Task 9: Login page — card layout

**Files:**
- Modify: `src/Login.js`
- Modify: `src/css/style.css`

- [ ] **Step 1: Add login card CSS to style.css**

Add after the tour split rules:

```css
/* ── LOGIN ── */
.login-card {
  max-width: 360px;
  margin: 3rem auto;
  padding: 2rem;
  background: #ffffff;
  border: 1px solid #e8d8b0;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(100, 70, 20, 0.07);
  text-align: center;
  position: relative;
  z-index: 10;
}

.login-card-title {
  font-size: 1.25rem;
  color: #4a3520;
  margin-bottom: 0.35rem;
  letter-spacing: 0.05em;
}

.login-card-subtitle {
  font-size: 0.9rem;
  color: #a08050;
  margin-bottom: 1.25rem;
  line-height: 1.5;
}
```

- [ ] **Step 2: Update Login.js**

Replace the full contents of `src/Login.js`:

```jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import PublicHeader from './Components/Header/PublicHeader';

const PASSWORD = process.env.REACT_APP_PARTICIPANT_PASSWORD || 'harvest2026';

const Login = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.toLowerCase() === PASSWORD.toLowerCase()) {
      localStorage.setItem('harvestale_auth', 'true');
      history.push('/participants/schedule');
    } else {
      setError(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="not_home">
        <PublicHeader />
        <div className="content-wrapper">
          <Box component="form" onSubmit={handleSubmit} className="login-card">
            <div className="login-card-title">Participants Only</div>
            <div className="login-card-subtitle">
              Enter your team password to access the participant schedule
            </div>
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
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#fffbf0',
                  '& fieldset': { borderColor: '#ddd0a8' },
                  '&:hover fieldset': { borderColor: '#c8942a' },
                  '&.Mui-focused fieldset': { borderColor: '#c8942a' },
                },
                '& .MuiInputLabel-root': { color: '#a08050' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#c8942a' },
                '& .MuiInputBase-input': { color: '#3d2e1e', fontSize: '1rem' },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 1,
                backgroundColor: '#c8942a',
                color: '#fff',
                fontSize: '1rem',
                letterSpacing: '0.1em',
                '&:hover': { backgroundColor: '#a07820' },
              }}
            >
              Enter
            </Button>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;
```

- [ ] **Step 3: Run tests**

```bash
CI=true npm test -- --watchAll=false
```

Expected: all tests pass. Login tests check for password input label and "Enter" button text — both still present.

- [ ] **Step 4: Commit**

```bash
git add src/Login.js src/css/style.css
git commit -m "style: login page card layout with warm cream form"
```

---

## Task 10: Readable content pages — body text and section headers

**Files:**
- Modify: `src/css/style.css`

This updates the `.readable-background` region (used by Information, FAQ, and Schedule) plus the `.question` class used for section headers.

- [ ] **Step 1: Replace `.readable-background` and `.question` rules in style.css**

Find and replace the existing `.readable-background`, `.readable-background a`, and `.question` rules:

```css
/* ── READABLE CONTENT ── */
.readable-background {
  font-family: 'Podkova';
  font-size: 1rem;
  color: #4a3825;
  line-height: 1.8;
  margin: 2rem auto;
  padding: 0 1rem;
  width: 100%;
  max-width: 720px;
  min-height: calc(80dvh - 224px);
}

.readable-background a {
  color: #3d2e1e;
  text-decoration: underline;
  text-decoration-color: rgba(90, 138, 74, 0.5);
}

.readable-background a:hover {
  text-decoration-color: rgba(90, 138, 74, 0.9);
}

/* Section headers (.question used in Information, FAQ, PublicPage) */
.question {
  font-family: 'EagleLake';
  font-size: 1.15rem;
  font-weight: bold;
  color: #3d2e1e;
  letter-spacing: 0.05em;
  margin-top: 2rem;
  margin-bottom: 0.6rem;
  padding-bottom: 0.35rem;
  border-bottom: 1px solid #e0c878;
}

@media (max-width: 750px) {
  .readable-background {
    padding: 0;
    margin-top: 1rem;
  }
}
```

- [ ] **Step 2: Run tests**

```bash
CI=true npm test -- --watchAll=false
```

Expected: all tests pass.

- [ ] **Step 3: Commit**

```bash
git add src/css/style.css
git commit -m "style: readable content Podkova body text, amber section headers"
```

---

## Task 11: Public page — intro paragraph and homebody width

**Files:**
- Modify: `src/PublicPage.js`
- Modify: `src/css/style.css`

- [ ] **Step 1: Add intro CSS to style.css**

Add after the `.question` rules:

```css
/* ── INTRO PARAGRAPH ── */
.intro {
  font-size: 1.1rem;
  color: #4a3825;
  line-height: 1.8;
  margin-bottom: 2rem;
  border-left: 3px solid #e0c070;
  padding-left: 1.1rem;
}
```

Also find and update the `.homebody` rule to constrain max-width:

```css
.homebody {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 720px !important;
  padding: 1.5rem 1rem !important;
}
```

- [ ] **Step 2: Wrap the intro text in PublicPage.js**

In `src/PublicPage.js`, wrap the intro `<Box>` in a div with className `intro`:

```jsx
<Box className="readable-background">
  <p className="intro">
    For four decades and counting, Juggler Meadow and Wake Robin Morris have welcomed the fall
    by touring the Northern Pioneer Valley with visiting sides for a full weekend of
    traditional English ritual dance. Check our schedule below and join us as we celebrate
    the harvest with ringing bells and clashing sticks!
  </p>

  <ScheduleDay ... />
  ...

  <Box className="question" sx={{ mt: 3 }}>Participating Teams</Box>
  <Box>Team information coming soon.</Box>
</Box>
```

- [ ] **Step 3: Run tests**

```bash
CI=true npm test -- --watchAll=false
```

Expected: all tests pass.

- [ ] **Step 4: Commit**

```bash
git add src/PublicPage.js src/css/style.css
git commit -m "style: intro paragraph with amber left border, constrain content width"
```

---

## Task 12: Final verification

- [ ] **Step 1: Run full test suite**

```bash
CI=true npm test -- --watchAll=false
```

Expected: all tests pass.

- [ ] **Step 2: Start the dev server and visually check all pages**

```bash
npm start
```

Check each page at `http://localhost:3000`:

| Page | URL | What to check |
|---|---|---|
| Public schedule | `/` | Hero photo, side foliage, intro border, tour split columns, day headers |
| Login | `/participants/login` | Hero, login card centered, amber button |
| Participant schedule | `/participants/schedule` | Hero + nav bar, all days, tour splits with team lists |
| Information | `/information` | Section headers with amber underline, Podkova body text |
| FAQ | `/faq` | Same as Information |

- [ ] **Step 3: Check mobile at 750px**

In browser DevTools, set viewport to 375px wide and verify:
- Hero collapses to 64px bar
- Site title visible, tagline hidden
- "Participant Information" link visible in header
- Tour columns stack vertically
- Side foliage strips are hidden
- Nav bar wraps or shows hamburger

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "style: fall theme complete — verify all pages pass visual review"
```
