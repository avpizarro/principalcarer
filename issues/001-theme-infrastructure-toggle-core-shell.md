## Parent PRD

`issues/prd.md`

## What to build

The end-to-end foundation for dark mode, fully demoable on its own: a user can click a toggle in the Navbar and see the app's shell switch between light and dark, with the choice remembered across visits and matching their OS preference on first visit.

This includes:

- The theme module (a `useTheme()`-style hook/interface) that resolves the initial theme (stored `localStorage` value if present, else `prefers-color-scheme`), applies it via a `data-theme` attribute on the document root before/during first paint (no flash of wrong theme), persists manual toggles to `localStorage`, and live-updates on OS preference changes only when no manual override is stored.
- A `ThemeProvider` wrapping the app root (alongside the existing Redux `Provider`) so any component can consume the theme via context.
- A `ThemeToggle` icon-button component (sun/moon) added to the Navbar in both its desktop and mobile navigation states.
- The CSS token layer: a set of app-specific custom properties (surface/background, primary text, secondary/muted text, border, hover-state color) defined with light values at `:root` and dark overrides under `[data-theme="dark"]`, using the same attribute convention Bulma 1.0.3's native dark mode already watches.
- Applying those tokens to the core shell: Navbar, Footer, the app's layout/container elements, the Modal wrapper, and the LoginForm/SignUpForm components rendered inside it.

See the parent PRD's Implementation Decisions section for full detail on the theme module, ThemeProvider, ThemeToggle, and CSS token layer.

## Acceptance criteria

- [x] On first visit with no stored preference, the app's theme matches the OS/browser's `prefers-color-scheme`.
- [x] Clicking the Navbar toggle switches the app between light and dark, and the toggle's icon reflects the current state.
- [x] The chosen theme persists across page reloads and new sessions on the same browser (`localStorage`).
- [x] Once a manual choice has been made, subsequent OS-level `prefers-color-scheme` changes do not override it.
- [x] There is no visible flash of the wrong theme on initial page load.
- [x] Navbar, Footer, page layout/containers, the Modal, and the Login/Sign Up forms are all fully legible and visually consistent in both light and dark mode, including hover and focus-visible states.
- [x] The toggle is present and functional in both the desktop and mobile navigation states.
- [x] Unit tests cover the theme module: defaults to system preference when unset, prefers a stored value over system preference, persists manual toggles, applies the correct `data-theme` value, and only live-updates from system changes when no manual override exists.
- [x] A render test confirms the `ThemeToggle` reflects the current theme and invokes the toggle behavior on click.

## Blocked by

None - can start immediately

## User stories addressed

- User story 1
- User story 2
- User story 3
- User story 4
- User story 5
- User story 6
- User story 10
- User story 11
- User story 16
- User story 17
- Contributes to user stories 7, 8, 9, 15 (within the scope of the shell components this issue covers)
