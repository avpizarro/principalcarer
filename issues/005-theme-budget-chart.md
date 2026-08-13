## Parent PRD

`issues/prd.md`

## What to build

Make the Budget page's Chart.js line chart legible in dark mode. Unlike the rest of the app, Chart.js draws its axis ticks, legend text, and gridlines using colors set via its JS `options` object, not CSS — so they will not respond to the `data-theme` attribute or CSS token layer built in `issues/001-theme-infrastructure-toggle-core-shell.md` on their own.

The `Chart` component should read the current theme via the `useTheme()` hook and pass theme-appropriate colors into Chart.js's `options` for axis ticks, legend text, and gridlines, so the chart updates live when the user toggles the theme.

## Acceptance criteria

- [ ] The Budget chart's axis labels, legend text, and gridlines are clearly legible against the background in both light and dark mode.
- [ ] Toggling the theme while the Budget chart is visible updates its colors without requiring a page reload.
- [ ] Manually verified in the browser in both light and dark mode (no automated tests planned for chart theming, per the parent PRD's Testing Decisions).

## Blocked by

- Blocked by `issues/001-theme-infrastructure-toggle-core-shell.md`

## User stories addressed

- User story 13
