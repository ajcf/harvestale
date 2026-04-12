# Design: Public / Private Site Split

**Date:** 2026-04-12

## Overview

Split the Harvest Ale website into a public-facing section and a password-gated participants-only section. The public section is a single scrollable page with no navigation bar. The private section preserves the existing multi-page structure behind a hardcoded password stored in `localStorage`.

## Goals

- First-time visitors and members of the general public see only public-facing content (performance schedule, folk team info).
- Participants can access the full site (registration, detailed schedule, general information, FAQ) after entering a password once. The login persists across browser sessions via `localStorage`.
- Mobile-friendly: the public page has no hamburger menu or navigation bar.

## Architecture

### Routing (App.js)

| Path | Component | Access |
|---|---|---|
| `/` | `PublicPage` | Public |
| `/participants/login` | `Login` | Public |
| `/participants/schedule` | `Schedule` | Protected |
| `/participants/information` | `Information` | Protected |
| `/participants/faq` | `FAQ` | Protected |
| `/schedule`, `/information`, `/faq` | Redirect to `/participants/*` equivalents | — |
| `*` | `NotFound` | Public |

### Auth

- Password is hardcoded as a constant in `Login.js`. Optionally, it can be moved to a `REACT_APP_PARTICIPANT_PASSWORD` env variable to keep it out of source.
- On successful login, a key `harvestale_auth` is written to `localStorage`.
- On logout, `harvestale_auth` is removed from `localStorage` and the user is redirected to `/`.
- `ProtectedRoute` checks for `harvestale_auth` in `localStorage`; if absent, redirects to `/participants/login`.

## Components

### `src/PublicPage.js` (new)

Single scrollable page. No nav bar or header. Contains:
1. Site title / branding at the top.
2. Public performance schedule (placeholder events — exact content to be filled in later).
3. Participating folk teams section (placeholder — exact content to be filled in later).
4. "Participants Only" link at the bottom that navigates to `/participants/login`.

### `src/Login.js` (new)

Centered MUI form with:
- A password input field.
- A submit button.
- Inline error message on incorrect password.
- On success: sets `harvestale_auth` in `localStorage`, redirects to `/participants/schedule`.

### `src/Components/ProtectedRoute.js` (new)

Wraps a `<Route>` component. Reads `localStorage` for `harvestale_auth`. If present, renders the route. If absent, renders a `<Redirect>` to `/participants/login`.

### `src/Components/Header` (updated)

Header is only rendered inside the private section (unchanged behavior for private pages). Adds a logout button that clears `localStorage` and redirects to `/`. The public page does not render the Header.

### `src/App.js` (updated)

- Adds routes for `/participants/login`, `/participants/schedule`, `/participants/information`, `/participants/faq` using `ProtectedRoute`.
- Redirects legacy routes (`/schedule`, `/information`, `/faq`) to their `/participants/*` equivalents.
- `/` renders `PublicPage` (no header wrapper).

## Out of Scope

- Actual public performance schedule events (placeholder content only).
- Actual folk team information (placeholder content only).
- Server-side authentication or session management.
- Any changes to the S3/CloudFront infrastructure.
