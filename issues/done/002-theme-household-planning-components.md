## Parent PRD

`issues/prd.md`

## What to build

Using the CSS token layer and `data-theme` infrastructure built in `issues/001-theme-infrastructure-toggle-core-shell.md`, sweep the household/daily-planning feature components' hardcoded colors (in both their `style.css` files and inline `style={{...}}` values) and replace them with the app's theme tokens, so these components render correctly in both light and dark mode.

Components in scope: Home, Tasks, Shopping, Calendar, Clock, OneClock, EventInput, AddEventIcon, Dob.

This is a CSS/inline-style refactor only — no new theme infrastructure is introduced here; it consumes what issue 1 built.

## Acceptance criteria

- [ ] Home, Tasks, Shopping, Calendar, Clock/OneClock, EventInput, AddEventIcon, and Dob render with no hardcoded light-only colors remaining in their `style.css` files or inline styles.
- [ ] All text in these components remains clearly readable against its background in both light and dark mode.
- [ ] Buttons, inputs, and other interactive controls in these components look and behave consistently with the rest of the dark theme.
- [ ] Hover, focus, and focus-visible states in these components remain visible and consistent in both modes.
- [ ] `bulma-calendar` and `react-calendar` (used by the Calendar component) are spot-checked and adjusted as needed in dark mode, since their default styling won't automatically pick up the app's tokens or Bulma's dark-mode variables.
- [ ] Manually verified in the browser in both light and dark mode (no automated tests planned for this refactor, per the parent PRD's Testing Decisions).

## Blocked by

- Blocked by `issues/001-theme-infrastructure-toggle-core-shell.md`

## User stories addressed

- User story 12
- Contributes to user stories 7, 8, 9, 15 (within the scope of the components this issue covers)
