# Harvest Ale — Fall Theme Design Spec

**Date:** 2026-05-17  
**Scope:** Full visual redesign of all pages — public and participant-facing — with fall-themed styling, responsive for mobile and desktop.

---

## Design Decisions (approved)

| Decision | Choice |
|---|---|
| Overall tone | Warm & Refined — cream background, generous whitespace, warm serif typography |
| Header style | Tall Hero — foliage photo fading into the cream page |
| Schedule style | Clean rows — time right-aligned, event name left, subtle dividers |
| Tour layout | Two-column — split events break into Juggler Meadow / Wake Robin columns; shared events span full width |

---

## Color Palette

| Role | Value | Usage |
|---|---|---|
| Page background | `#fffbf0` | All page backgrounds |
| Body text | `#3d2e1e` | All primary text |
| Muted text | `#7a6040` | Descriptions, notes, italic captions |
| Time labels | `#a08050` | Small-caps time stamps |
| Day header / accent | `#c8942a` | Day names, amber accent lines |
| Section dividers | `#e0c878` | Horizontal rules under section headers |
| Row dividers | `#ede0c0` | Borders between schedule rows |
| Juggler Meadow | `#c8942a` (amber) | Tour column top-border and label |
| Wake Robin | `#5a8a4a` (green) | Tour column top-border and label |
| Link underline | `rgba(90,138,74,0.5)` | Decorative underline on links |
| Button / CTA | `#c8942a` | Login button, primary actions |
| Login card bg | `#ffffff` | Login form card |
| Intro quote border | `#e0c070` | Left border on intro paragraph |

---

## Typography

Base font size: `18px` on `<body>` — all `rem` values scale from this. Sized up for accessibility and elderly visitors.

| Role | Font | Size | Notes |
|---|---|---|---|
| Site title (hero) | EagleLake | `3rem` desktop / `1.8rem` mobile | `letter-spacing: 0.12em`, normal weight |
| Day names | Georgia / EagleLake | `1.6rem` | Color: `#c8942a` |
| Event labels | Georgia | `1.05rem` | Color: `#3d2e1e` |
| Time stamps | Georgia | `0.85rem` | Uppercase, `letter-spacing: 0.05em`, color `#a08050` |
| Tour name labels | Georgia | `0.75rem` | Bold, all-caps, `letter-spacing: 0.12em` |
| Team lists | Georgia | `0.85rem` | Color: `#7a6040`, line-height `1.6` |
| Location text | Georgia | `0.95rem` | Color: `#3d2e1e` |
| Body / info pages | Podkova | `1–1.1rem` | Line height `1.8` |
| Section headers | Georgia | `1.15rem` | Bold, `letter-spacing: 0.05em` |
| Nav links | Georgia | `0.85rem` | Uppercase, `letter-spacing: 0.12em` |
| Participant link (hero) | Georgia | `0.8rem` | Uppercase, color `#3a6030` |

---

## Layout

### All pages
- `max-width: 720px` content area, horizontally centered
- Page background: `#fffbf0`
- Side foliage decoration: `foliage.jpg` as `position: fixed` strips on left and right edges (so they remain visible during scroll), fading inward via `mask-image` gradient. Hidden on mobile (≤750px) — not enough horizontal room.

### Hero Header
- **Desktop (≥640px):** `height: 160px`, `foliage.jpg` as `background: cover center`, gradient overlay `rgba(30,15,5,0.1) → rgba(255,251,240,1)` fading bottom-up. Site title and subtitle centered at the bottom of the hero.
- **Mobile (<640px):** `height: 64px`, flex row, title left-aligned, participant link right-aligned. Subtitle hidden.
- Title text-shadow: `0 1px 8px rgba(255,248,220,0.95)` for legibility over the photo.
- The `foliage.jpg` asset is already in `/public`.

### Public Header (`PublicHeader`)
- Hero only (no nav bar).
- "Participant Information →" link: top-right, small-caps, green (`#3a6030`), `position: absolute` within the hero. On mobile: rendered inline in the flex row, no absolute positioning.

### Participant Header (`Header` + `ResponsiveNav`)
- Hero + nav bar below.
- Nav bar: `background: #fffbf0`, `border-bottom: 1px solid #e8d8a0`, links centered, `letter-spacing: 0.15em`, uppercase.
- Active page: `color: #c8942a`, `border-bottom: 1.5px solid #c8942a`.
- Mobile: hamburger drawer (existing `ButtonBarCollapse`) — drawer background `#fffbf0`.

---

## Schedule Components

### `ScheduleDay`
- Day header: flex row, day name (`#c8942a`, `1.35rem`) + horizontal rule that fades right (`linear-gradient(to right, #d4a84a, transparent)`).
- Bottom margin `2.5rem` between day blocks.

### `ScheduleItem` (standard / shared event)
- Flex row: time column (`min-width: 4.5rem`, right-aligned) + content column.
- `border-bottom: 1px solid #ede0c0`. Last item: no border.
- Padding: `0.5rem 0`.
- Description text: `0.78rem`, `#7a6040`, italic.

### Split Tour Items
When a `ScheduleItem` has content for both tours, render a two-column grid instead of the standard content column:

```
[time]  [JUGGLER MEADOW col] | [WAKE ROBIN col]
         amber top border       green top border
         amber tour label        green tour label
         team list               team list
         location link           location link
```

- Grid: `grid-template-columns: 1fr 1fr`, `gap: 0.6rem`.
- Each column: `border-top: 2.5px solid` (amber for JM, green for WR), `padding-top: 0.4rem`.
- Tour name: `0.6rem`, bold, all-caps, colored to match border.
- Team names: `0.7rem`, `#7a6040`, line-height `1.5`.
- Location: `0.82rem`, `#3d2e1e`, linked.
- **Mobile (<750px):** columns stack vertically (`grid-template-columns: 1fr`).

---

## Pages

### Public Page (`PublicPage`)
- Hero header (PublicHeader).
- Side foliage decoration.
- Intro paragraph with amber left-border (`border-left: 3px solid #e0c070`).
- Schedule days with two-column tour split.
- "Participating Teams" section header + placeholder text.

### Login (`Login`)
- Hero header (PublicHeader).
- Side foliage decoration.
- Centered login card: `max-width: 340px`, white background, `border: 1px solid #e8d8b0`, soft box-shadow.
- "Participants Only" title + subtitle explaining the password.
- Password `<TextField>` styled to match: `background: #fffbf0`, border `#ddd0a8`.
- Submit button: full-width, `background: #c8942a`, white text.

### Participant Schedule (`Schedule`)
- Hero + nav bar (Header).
- Side foliage decoration.
- Date/location block centered at top (small-caps date, linked address).
- Full schedule with two-column tour splits on all split stands.

### Information (`Information`) and FAQ (`FAQ`)
- Hero + nav bar (Header).
- Side foliage decoration.
- Body text in Podkova, `0.95rem`, line-height `1.75`, color `#4a3825`.
- Section headers: bold, `border-bottom: 1px solid #e0c878`.

---

## Responsive Breakpoints

| Viewport | Hero height | Side foliage | Tour columns | Nav |
|---|---|---|---|---|
| ≥750px | 160px | Visible | Side-by-side | Horizontal bar |
| <750px | 64px | Hidden | Stacked | Hamburger drawer |

The `750px` breakpoint matches the existing codebase (`@media (min-width: 750px)` / `@media (max-width: 750px)` in `style.css` and `ResponsiveNav.js`).

---

## Files to Change

| File | What changes |
|---|---|
| `src/css/style.css` | Primary target — new rules for hero, foliage sides, schedule rows, tour columns, login card, info/FAQ sections |
| `src/theme.js` | Update palette: primary `#c8942a`, secondary `#5a8a4a`, background `#fffbf0` |
| `src/Components/Header/PublicHeader.js` | Participant link placement, hero markup |
| `src/Components/Header/index.js` | Nav bar markup and active-page styling |
| `src/Components/Header/ResponsiveNav.js` | Nav link colors, active state |
| `src/Components/ScheduleDay/index.js` | Day header markup (name + fading rule) |
| `src/Components/ScheduleItem/index.js` | Row layout, tour-split two-column grid |
| `src/Components/AppPage/AppPage.js` | Add `page-outer` wrapper with foliage sides |
| `src/Components/AppPage/ReadableAppPage.js` | Ensure foliage wrapper is present |
| `src/Login.js` | Login card styling |
| `src/PublicPage.js` | Intro paragraph markup, ensure foliage wrapper |

---

## What Does NOT Change

- All copy and schedule data — no content edits.
- Routing, auth logic, protected routes.
- Component hierarchy beyond minor markup additions.
- Existing font files (EagleLake, Podkova, Quicksand, OpenSans already in `/public`).
- The `foliage.jpg`, `leaf.png`, `leaves.png` assets — used as-is.
