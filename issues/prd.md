## Problem Statement

The app is only usable in one, permanently light, high-contrast color scheme. Users who browse in low light find the bright white background straining, and users whose devices/browsers are set to a dark appearance still get switched into a jarring light UI every time they open the app, with no way to change it.

## Solution

Add a dark mode to the app: a manual light/dark toggle (sun/moon icon in the Navbar) that overrides the app's color scheme, defaulting on first visit to whatever the user's operating system/browser already prefers (`prefers-color-scheme`). The choice is remembered in the browser (`localStorage`) so it persists across sessions on that device. Every part of the UI — Bulma's native components (navbar, buttons, forms, boxes), the app's custom-styled components, and the Budget chart — switches to a legible dark palette. The freeform drawing canvas is intentionally left as a fixed light surface, since it behaves like a sheet of paper rather than UI chrome.

## User Stories

1. As a user browsing at night, I want to switch the app to a dark color scheme, so that the interface doesn't strain my eyes in a dark room.
2. As a user whose OS/browser is set to dark mode, I want the app to open in dark mode automatically on my first visit, so that I don't have to manually configure it.
3. As a user who prefers light mode even though my OS is set to dark, I want to manually switch the app back to light mode, so that I can use my preferred appearance regardless of system settings.
4. As a returning user, I want the app to remember my chosen color scheme on this device, so that I don't have to re-select it every time I visit.
5. As a user, I want a clearly visible, easy-to-find toggle control, so that I can switch modes at any time without hunting through menus.
6. As a user, I want the toggle to give immediate visual feedback (e.g. sun/moon icon state) about which mode is currently active, so that I always know which mode I'm in.
7. As a user in dark mode, I want all text to remain clearly readable against its background, so that I don't struggle to read any part of the app.
8. As a user in dark mode, I want form inputs, buttons, and interactive controls to look and behave consistently with the rest of the dark theme, so that the app feels cohesive rather than half-themed.
9. As a user in dark mode, I want hover, focus, and active states (e.g. button hovers, focus outlines) to remain visible and consistent with the dark palette, so that keyboard and mouse interactions stay usable.
10. As a user in dark mode, I want the Login and Sign Up modal forms to be themed correctly, so that authentication doesn't dump me back into a blinding light popup.
11. As a user in dark mode, I want the Navbar, Footer, and page layout/containers to be themed correctly, so that the overall page shell feels intentional, not broken.
12. As a user in dark mode, I want feature components (Home, Tasks, Shopping, Calendar, Clock, Medication, Budget, Chat, Entertainment, Social Life) to be themed correctly, so that the entire app experience is consistent, not just the shell.
13. As a user viewing the Budget chart in dark mode, I want the chart's axis labels, legend, and gridlines to remain legible against the dark background, so that I can still read my budget data.
14. As a user using the shared drawing canvas, I want the canvas to remain a light drawing surface regardless of app theme, so that drawings stay visible and consistent for everyone using it, similar to a physical sheet of paper.
15. As a user with a screen reader or who relies on visible focus indicators, I want focus-visible outlines to remain clearly visible in both light and dark mode, so that keyboard navigation isn't degraded by the theme change.
16. As a developer maintaining this app, I want theme colors defined as a small set of reusable CSS variables rather than scattered hardcoded values, so that future components can be themed correctly without duplicating logic.
17. As a developer maintaining this app, I want the theme detection/persistence logic isolated in one module with a simple interface, so that it can be reasoned about, tested, and reused without touching every component that needs theme awareness.

## Implementation Decisions

- **Theme module (deep module).** A single module owns all theme logic behind a minimal interface (e.g. a `useTheme()` hook returning `{ theme, toggleTheme }`). Internally it:
  - Resolves the initial theme on load: checks `localStorage` for a previously saved user choice first; if none exists, falls back to the OS/browser's `prefers-color-scheme` media query.
  - Persists any manual toggle to `localStorage`, which from that point on takes precedence over the system preference for that browser.
  - Applies the resolved theme by setting a `data-theme` attribute (`"light"` or `"dark"`) on the document root element. This is deliberately the same attribute/value convention that Bulma 1.0.3 (already a dependency) uses for its own built-in dark mode support, so Bulma's native components (navbar, buttons, inputs, boxes, etc.) re-theme automatically without per-component Bulma overrides.
  - Applies the theme synchronously before/during initial render (not in a `useEffect` that runs after first paint) to avoid a visible flash of the wrong theme on load.
  - Listens for OS-level `prefers-color-scheme` changes and updates the resolved theme live only when the user has not made a manual choice stored in `localStorage`; once a manual choice exists, system changes are ignored until the user toggles again.
- **ThemeProvider.** A context provider wraps the app at the root (alongside the existing Redux `Provider` in `index.js`/`App.js`) so any component can call the `useTheme()` hook without prop drilling.
- **ThemeToggle component.** A new small icon-button component (sun/moon, using the existing FontAwesome/react-icons setup already used elsewhere in the app) placed in the Navbar next to the existing sign up/login/logout controls, present in both the desktop and mobile navigation states. Calls `toggleTheme()` on click and reflects the current theme via its icon.
- **CSS token layer.** A new set of app-specific CSS custom properties (e.g. surface/background, primary text, secondary/muted text, border, hover-state color) is defined once, with light values at `:root` and dark overrides scoped under `[data-theme="dark"]`. These tokens sit alongside (not replacing) Bulma's own native dark-mode variables — Bulma handles its own components, this new token set handles the app's custom-styled markup.
- **Component style refactor.** Every hardcoded color currently in the ~18 component `style.css` files and in inline `style={{...}}` color/background values across the ~19 affected components (Home, Navbar, Tasks, Shopping, Calendar, Entertainment, LoginForm, OneClock, Canvas, Dob, EventInput, StyledInput, Medication, SocialLife, AddMedication, SignUpForm, Clock, StyledInputDouble, Budget) is replaced with a reference to the new CSS token (`var(--token-name)`), except where a component is explicitly out of scope (see below). Inline styles can reference CSS custom properties directly (e.g. `style={{ color: "var(--app-text)" }}`), so this does not require removing inline styling wholesale, only replacing hardcoded literals with token references.
- **Chart theming.** The `Chart` component (Budget's Chart.js line chart) reads the current theme via `useTheme()` and passes theme-appropriate colors into the Chart.js `options` object for axis ticks, legend text, and gridlines, so the chart stays legible on a dark background.
- **Canvas is explicitly excluded from theming** (see Out of Scope) — its container chrome (buttons, borders) still themes normally via the token layer, but the drawing surface itself stays a fixed light background.
- **No backend/schema changes.** The preference lives entirely client-side in `localStorage`; no changes to `UserModel`, routes, or controllers are needed for this PRD.

## Testing Decisions

- Good tests here exercise observable behavior (resolved theme value, attribute applied, `localStorage` contents, click behavior) rather than internal implementation details.
- **Theme module**: unit tests covering — defaults to system preference when no stored value exists; prefers a stored `localStorage` value over system preference when one exists; persists a manual toggle to `localStorage`; applies the correct `data-theme` value; live-updates on system preference change only when no manual choice has been stored.
- **ThemeToggle component**: a render test (using the existing `@testing-library/react` + `@testing-library/jest-dom` setup, already a dependency) confirming the toggle reflects the current theme state and that clicking it invokes the toggle behavior.
- No prior first-party test coverage exists for comparable modules in this codebase (`App.test.js` is unmodified Create React App boilerplate), so these two suites establish the pattern for future component/module tests rather than following an existing one.
- No tests are planned for the CSS token layer, the broad component style refactor, or Chart theming — these are visual outcomes, better verified by manually checking the app in the browser in both modes than by automated tests.

## Out of Scope

- Theming the shared drawing Canvas's drawing surface itself — it stays a fixed light background regardless of app theme (its surrounding chrome/buttons still theme normally).
- Persisting the theme preference to the user's account/database — the preference is local to the browser only; it will not follow a user across devices or browsers.
- A settings/account preferences page — the toggle lives directly in the Navbar.
- Per-component custom theme choices (e.g. a component picking its own accent color independent of the global toggle).
- Any additional dark-mode-specific imagery/illustrations (e.g. dark-mode-specific logo variants) — existing images/icons are reused as-is.
- Automated visual regression testing.

## Further Notes

- Because Bulma 1.0.3 already ships CSS-variable-based dark mode keyed off `[data-theme]`, the bulk of native Bulma-rendered elements (navbar, buttons, inputs, boxes, form controls) should re-theme correctly with just the attribute toggle and minimal-to-no direct Bulma overrides — the real implementation effort is in the CSS token layer and the sweep through the app's own hardcoded custom styles.
- `bulma-calendar` (used by the Calendar component) and `react-calendar` ship their own default styling; these should be spot-checked in dark mode as part of the component style refactor, since third-party widget CSS won't automatically pick up the app's new tokens or Bulma's dark-mode variables.
- The freeform Canvas uses `react-p5`, which paints via imperative JS drawing calls rather than CSS — this is a separate reason (beyond the product decision above) why theming it would require materially different work than the CSS-token approach used everywhere else.
