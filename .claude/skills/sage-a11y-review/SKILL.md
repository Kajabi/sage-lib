---
name: sage-a11y-review
description: Accessibility review criteria for sage-lib React components and SCSS. Sage is a leaf-level UI library so a11y bugs propagate to every consuming app — treat keyboard, ARIA, focus, semantic HTML, and contrast as first-class.
---

# Accessibility Review (sage-lib)

Sage components are the leaf nodes of every consuming app's UI tree. An a11y
bug in a sage component multiplies across the product. This review checks
keyboard support, ARIA correctness, focus management, semantic HTML, and
color contrast — separately from design-token discipline so a11y findings
don't get diluted by stylistic noise.

## When to Use

- After any JSX change in `packages/sage-react/lib/` that touches markup,
  event handlers, or focusable elements
- After any SCSS change in `packages/sage-assets/lib/stylesheets/components/`
  that affects focus rings, hover/active states, or visibility
- As part of the gauntlet (always runs when UI files change)

## Accessibility Review Checklist

### BLOCKER Severity

- **Interactive element without keyboard access** — A non-`<button>`,
  non-`<a>` element with an `onClick` handler and no `onKeyDown` /
  `onKeyUp` to handle Enter/Space, and no `role="button"` + `tabIndex={0}`.
  Sage components like Badge, Label, Card all gate on `isInteractive` /
  `interactiveType` to switch the tag to a real `<button>`; new components
  should follow that idiom.
- **Icon-only button without `aria-label`** — Any `<button>` whose only
  child is an icon (or a `pds-icon`) must carry an `aria-label`. The
  pattern in sage's Button component is to require a non-empty children
  string and visually-hide it when `iconOnly` is true.
- **Image without `alt`** — `<img>` must have `alt`; decorative images
  use `alt=""`, never omitted.
- **Form input without label** — `<input>`, `<textarea>`, `<select>` must
  have either a wrapping `<label>` or an associated `htmlFor` /
  `aria-labelledby`. Sage's Input/Textarea/Select components have this
  built in; ad-hoc inputs added inside another component should preserve
  it.
- **`tabIndex` > 0** — Positive tabindex values disrupt the natural focus
  order and are an a11y anti-pattern. Use only `0` (focusable in natural
  order) or `-1` (focusable programmatically only).
- **Focus trap broken** — A new modal / popover / dropdown that doesn't
  trap focus, doesn't return focus on close, or doesn't dismiss with
  Escape. Use sage's existing Modal / DropdownMenu pattern as the
  reference.
- **`outline: none` without a visible focus replacement** — Removing the
  default focus outline must be paired with `@include sage-focus-outline()`
  or an equivalent visible focus indicator.

### SHOULD FIX Severity

- **Wrong semantic element** — Using `<div>` for a clickable surface when
  `<button>` (action) or `<a>` (navigation) is appropriate.
- **Live-region misuse** — Adding `aria-live="assertive"` when `"polite"`
  is appropriate, or vice versa. Sage Toast / Banner use `polite` by
  default.
- **`aria-hidden` on a focusable element** — The element will still be
  reachable by keyboard but invisible to screen readers; either remove
  `aria-hidden` or also set `tabIndex={-1}`.
- **Color-only signal** — A state difference conveyed only by hue (e.g.
  red vs grey) without an icon, label, or text. Sage Badge / Label use a
  dot + label together for this reason.
- **Heading-level skip** — Jumping from `<h2>` directly to `<h4>` inside
  a component disrupts heading outline. Components that render headings
  (Card, Banner) should accept a `headingLevel` prop.
- **Visible focus ring obscured by overflow / clipping** — `overflow:
  hidden` on a focused element clips the focus outline; sage uses inset
  focus outlines (`sage-focus-outline($outline-offset-block: -1)`) for
  this case.

### CONSIDER Severity

- **Touch target < 44×44px** — Small clickable areas on mobile. Pine's
  base button hits this; new compact variants should justify the
  deviation.
- **Reduced motion respect** — Animations / transitions should check
  `@media (prefers-reduced-motion: reduce)` when they convey state.
- **Skip link / landmark** — For composite layouts (assistant bar, side
  nav) consider whether a `<nav>` landmark or skip link improves
  navigability.
- **Description text length** — Tooltips / hint text > ~80 chars are
  worth re-thinking; screen readers narrate the whole string.

## Accessibility quick checklist

For each interactive component touched, verify:

- [ ] Is reachable by Tab
- [ ] Reflects focus visibly (sage focus outline or equivalent)
- [ ] Activates with Enter and Space (buttons) or Enter (links)
- [ ] Has accessible name (text content, `aria-label`, or
      `aria-labelledby`)
- [ ] Communicates state changes to assistive tech
      (`aria-pressed`, `aria-expanded`, `aria-selected`)
- [ ] Disabled state uses `disabled` (form controls) or
      `aria-disabled="true"` (custom widgets), not just visual styling

For each modal / overlay / popover:

- [ ] Focus moves into the dialog on open
- [ ] Focus is trapped while open
- [ ] Escape closes (where appropriate)
- [ ] Focus returns to the invoker on close
- [ ] `role="dialog"` and `aria-modal="true"` for blocking dialogs

## Output Format

**Number items sequentially across all sections — do not restart numbering
in each section.** Section headers still show per-section counts.

```
## Sage Accessibility Review

**Components Reviewed:** [list]
**Areas Affected:** keyboard | aria | focus | semantics | contrast
**Overall:** APPROVED | NEEDS CHANGES | BLOCKER

### BLOCKERS ([count])
1. [Missing keyboard access, missing aria-label, broken focus trap]

### SHOULD FIX ([count])
2. [Wrong semantic, color-only signal, heading skip]

### CONSIDER ([count])
3. [Touch target, reduced motion, landmark]

### What's Good
[Existing a11y patterns preserved, focus rings intact]
```

## Anti-Patterns in Reviewing

- Do NOT block on contrast unless the change adds new color pairings.
  Existing pairings carry their own history.
- Do NOT require ARIA where semantic HTML alone is correct. "No ARIA is
  better than bad ARIA."
- Do NOT review generated files.
- Do NOT review story files for a11y — stories often deliberately
  exercise edge cases (disabled states, broken inputs) for visual review.
