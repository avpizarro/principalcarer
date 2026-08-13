## Parent PRD

`issues/prd.md`

## What to build

Using the CSS token layer and `data-theme` infrastructure built in `issues/001-theme-infrastructure-toggle-core-shell.md`, sweep the social/communication feature components' hardcoded colors (in both their `style.css` files and inline `style={{...}}` values) and replace them with the app's theme tokens, so these components render correctly in both light and dark mode.

Components in scope: Chat, Entertainment, SocialLife, Canvas (chrome only — buttons/border/container, not the p5.js drawing surface itself, which is explicitly out of scope per the parent PRD), CloseButton, ExpandButton, IconAddImage, IconDeletePhoto, IconImageUpload, IconSearchImage.

This is a CSS/inline-style refactor only — no new theme infrastructure is introduced here; it consumes what issue 1 built.

## Acceptance criteria

- [ ] Chat, Entertainment, SocialLife, Canvas's surrounding chrome, CloseButton, ExpandButton, and the icon components render with no hardcoded light-only colors remaining in their `style.css` files or inline styles.
- [ ] All text in these components remains clearly readable against its background in both light and dark mode.
- [ ] Hover, focus, and focus-visible states in these components remain visible and consistent in both modes.
- [ ] The Canvas drawing surface itself is verified to remain a fixed light background regardless of app theme, unaffected by this refactor.
- [ ] Manually verified in the browser in both light and dark mode (no automated tests planned for this refactor, per the parent PRD's Testing Decisions).

## Blocked by

- Blocked by `issues/001-theme-infrastructure-toggle-core-shell.md`

## User stories addressed

- User story 12
- User story 14
- Contributes to user stories 7, 8, 9, 15 (within the scope of the components this issue covers)
