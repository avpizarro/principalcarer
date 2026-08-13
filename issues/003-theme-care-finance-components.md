## Parent PRD

`issues/prd.md`

## What to build

Using the CSS token layer and `data-theme` infrastructure built in `issues/001-theme-infrastructure-toggle-core-shell.md`, sweep the care/finance feature components' hardcoded colors (in both their `style.css` files and inline `style={{...}}` values) and replace them with the app's theme tokens, so these components render correctly in both light and dark mode.

Components in scope: Medication, AddMedication, Budget (non-chart UI only — the Chart.js graph itself is handled separately in `issues/005-theme-budget-chart.md`), StyledInput, StyledInputDouble, FileUpload.

This is a CSS/inline-style refactor only — no new theme infrastructure is introduced here; it consumes what issue 1 built.

## Acceptance criteria

- [ ] Medication, AddMedication, Budget's non-chart UI, StyledInput, StyledInputDouble, and FileUpload render with no hardcoded light-only colors remaining in their `style.css` files or inline styles.
- [ ] All text in these components remains clearly readable against its background in both light and dark mode.
- [ ] Form inputs (StyledInput, StyledInputDouble, FileUpload) and buttons in these components look and behave consistently with the rest of the dark theme.
- [ ] Hover, focus, and focus-visible states in these components remain visible and consistent in both modes.
- [ ] Manually verified in the browser in both light and dark mode (no automated tests planned for this refactor, per the parent PRD's Testing Decisions).

## Blocked by

- Blocked by `issues/001-theme-infrastructure-toggle-core-shell.md`

## User stories addressed

- User story 12
- Contributes to user stories 7, 8, 9, 15 (within the scope of the components this issue covers)
