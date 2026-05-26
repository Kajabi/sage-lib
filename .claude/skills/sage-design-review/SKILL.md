---
name: sage-design-review
description: Design-token + SCSS review criteria for sage-lib. Covers sage-token discipline (`sage-color`, `sage-spacing`, `sage-border` helpers), Pine-token alignment for dark-mode shims, BEM-style classname conventions, and Storybook story coverage.
---

# Design Review (sage-lib)

Review SCSS / token / classname changes against sage-lib's design-system
discipline. Sage is in a phased migration: new work should align with Pine
tokens where possible, and legacy work should preserve the existing helper
function conventions.

## When to Use

- After any SCSS, token JSON, or component classname changes
- As part of the gauntlet (only when SCSS / token files changed, or when
  component classNames are modified)
- When new components or variants are added to `packages/sage-assets/`

## Design Context

- **Sage helpers** — SCSS functions: `sage-color(name, [tint])`,
  `sage-spacing(key)`, `sage-border([key])`, `sage-font-size(key)`,
  `sage-font-weight(key)`, `sage-breakpoint(key)`, `sage-z-index(key)`.
- **Sage tokens** — Live in `style-dictionary/tokens/**/*.json`; compiled
  into Sass variables and CSS custom properties via Style Dictionary.
- **Pine tokens** — `var(--pine-color-*)`, `var(--pine-dimension-*)`,
  `var(--pine-border-radius-*)`, `var(--pine-typography-*)` etc., already
  available globally to sage components. Use Pine tokens for new dark-mode
  work and when the existing sage token is being deprecated.
- **BEM-style classnames** — `.sage-{component}__{element}--{modifier}`
  (e.g. `.sage-badge__value`, `.sage-badge--draft`).

**Key directories:**
- `packages/sage-assets/lib/stylesheets/components/` — per-component SCSS
- `packages/sage-assets/lib/stylesheets/mixins/` — shared mixins
- `packages/sage-assets/lib/stylesheets/tokens/` — token consumption files
- `packages/sage-react/lib/<Component>/` — React + classnames

## Design Review Checklist

### BLOCKER Severity

- **Raw hex / rgb in `*.scss`** when a sage or Pine token exists
  (e.g. `color: #f8f8f8` where `var(--pine-color-grey-100)` is correct).
  Exception: an explicit comment justifying the literal (e.g. iframe
  content stylesheet where Pine tokens aren't available).
- **Wrong Pine token name** — `--pine-color-gray-*` (American spelling),
  `--pine-color-grey-50` (missing leading zero), `--pine-shadow-md` (use
  `--pine-box-shadow-100`), `--pine-spacing-*` (use `--pine-dimension-*`).
  See the kp `CLAUDE.md` "common hallucinated tokens" table for the full
  list — the same rules apply here.
- **BEM violation that breaks downstream consumers** — Removing or
  renaming an existing modifier class (`.sage-badge--draft`,
  `.sage-label--published`, etc.). These are public API for downstream
  apps; a rename is a breaking change and must use a `BREAKING CHANGE:`
  footer.
- **`!important` cascade fight without a comment explaining why** — Use
  of `!important` always demands a comment naming what it's beating.

### SHOULD FIX Severity

- **`sage-color()` / `sage-spacing()` / `sage-border()` not used** when
  introducing a new value — Use the helper for sage-internal values to
  keep token consumption uniform.
- **Magic numbers (`16px`, `8px`) where a `sage-spacing` or
  `--pine-dimension-*` token applies** — Prefer the token.
- **Missing or out-of-date Storybook story arg** — A new variant /
  modifier should be exposed in `*.story.jsx` so reviewers can see it.
- **Inconsistent dark-mode treatment** — When adding a `[data-theme='dark']`
  block, use the same palette-step convention as the rest of the file
  (e.g. existing sage-label uses bg = `-900` for colored / `-800` for grey;
  hover = `-800` / `-600`; text = `-100`).
- **Pine semantic token over core palette where applicable** — Prefer
  `var(--pine-color-background-container)` over
  `var(--pine-color-grey-050)` when the surface meaning is semantic;
  reserve core palette tokens for explicit ramp steps (typical in shim
  loops that step through `-100` / `-900`).
- **Selector specificity creep** — Adding deeply-nested selectors
  (`.a .b .c .d`) when a more direct selector would do; sage's existing
  partials avoid this.

### CONSIDER Severity

- **Mixin reuse opportunity** — A new utility could go into
  `stylesheets/mixins/` instead of inline.
- **Token addition vs reuse** — A new token in `style-dictionary/tokens/`
  that closely matches an existing one. Coordinate with DS team before
  introducing.
- **Story documentation** — Newly added components should include the
  doc block with prop descriptions in the story file.

## Pine token quick reference

These are the most commonly-needed token families when shimming sage to
Pine. Always verify a specific token exists before using it
(`grep var --pine-color packages/sage-assets/lib/stylesheets` or check the
kp `CLAUDE.md` token list for the canonical name).

| Family | Examples |
|---|---|
| Core palette | `--pine-color-{green,red,blue,yellow,grey,purple}-{050,100,…,950}` |
| Semantic surfaces | `--pine-color-background-container`, `--pine-color-background-inset` |
| Semantic text | `--pine-color-text`, `--pine-color-text-strong`, `--pine-color-text-muted` |
| Semantic borders | `--pine-color-border`, `--pine-color-border-subtle` |
| Dimensions | `--pine-dimension-{none,2xs,xs,sm,md,lg,xl,2xl}` (or core `100`/`200`/… steps) |
| Box shadows | `--pine-box-shadow-{050,100,150,200,300,400,500}` |
| Border radius | `--pine-border-radius-{sm,md,lg,full}` |

## Output Format

**Number items sequentially across all sections — do not restart numbering
in each section.** Section headers still show per-section counts.

```
## Sage Design Review

**Files Reviewed:** [list]
**Areas Affected:** components | mixins | tokens | story | classNames
**Overall:** APPROVED | NEEDS CHANGES | BLOCKER

### BLOCKERS ([count])
1. [Hardcoded color when token applies, wrong Pine token name, breaking BEM rename]

### SHOULD FIX ([count])
2. [Helper not used, magic numbers, missing story arg, inconsistent dark-mode steps]

### CONSIDER ([count])
3. [Mixin reuse, new token vs reuse, story docs]

### What's Good
[Token consumption discipline, consistent palette stepping, etc.]
```

## Anti-Patterns in Reviewing

- Do NOT flag Sass formatting — Stylelint handles that.
- Do NOT push for full Pine migration inside a sage PR; alignment where
  practical is enough.
- Do NOT review generated files (`packages/*/dist/`, `packages/*/build/`).
- Do NOT require a Storybook story for a CSS-only fix that doesn't change
  visible variants.
- Do NOT block on `!important` if there's a clear cascade-fight comment;
  block only when there's no justification at all.
