---
name: sage-review-code
description: Structured code review for the sage-lib design-system monorepo. Reviews React component changes against sage's existing patterns (propTypes + forwardRef, classnames, configs.js, story + spec files) and Jest test coverage. Categorizes issues by severity.
---

# Review Code (sage-lib)

Review code changes against sage-lib project standards. Identify pattern
violations, anti-patterns, and engineering issues. Provide structured,
actionable feedback.

## When to Use

- After implementing a component change or bug fix
- Before opening a PR against `develop`
- When asked to review specific files or changes

## Review Process

1. **Identify changes** — `git diff develop...HEAD --name-only`
2. **Run automated checks:**
   ```bash
   yarn lint                                      # all packages (from repo root)
   yarn test:prod:react                           # full sage-react Jest suite (from repo root)
   # Optional focused run when only one component changed:
   cd packages/sage-react && yarn test -- <ComponentNameOrSpecPath>
   ```
   There is no root `yarn jest` script — tests live in `packages/sage-react`.
   Any failures are automatic BLOCKERs.
3. **Check pattern compliance** per area (see Review Criteria below).
4. **Output structured review** using the Output Format below.

## Review Criteria

### React Components — BLOCKER

- **Missing `propTypes`** — Every exported React component must declare
  `propTypes` (sage uses runtime PropTypes, not TypeScript). Required props
  must use `.isRequired`.
- **`dangerouslySetInnerHTML` with user-controllable input** — Never use
  with a value that comes from a prop without explicit sanitization. The
  prop name should make sanitization expectations obvious (e.g.
  `unsafeHTML` and documented).
- **Breaking change without a `BREAKING CHANGE:` footer** — Removing or
  renaming a public prop, removing an exported member from `configs.js`, or
  changing default behavior without a `BREAKING CHANGE:` block in the commit
  body. Conventional Commits + Lerna drive changelogs from these.
- **Failing tests / lint** — `yarn test:prod:react`, `yarn lint`, or
  `packages/sage-react` `yarn test` failures count as BLOCKER; fix or
  annotate before merging.
- **Hooks-rules violations** — `react-hooks/rules-of-hooks` is configured
  as `error` in sage-react's ESLint; never call hooks conditionally or
  inside loops.

### React Components — SHOULD FIX

- **Missing story file** — Every new component or new variant should have
  matching `*.story.jsx` updates. Stories drive both docs and visual review.
- **Missing spec file** — Every new component or non-trivial behavior change
  should ship with a `*.spec.jsx` (Banner, Toggle, Divider, Avatar, etc. are
  the established pattern).
- **Defaulting a required prop** — A prop with `.isRequired` should not also
  appear in `defaultProps`; pick one.
- **`configs.js` constants not exported** — When a component exposes
  enum-like values (e.g. `BADGE_COLORS`), the constant lives in
  `configs.js` and is re-exported on the component
  (`Badge.COLORS = BADGE_COLORS`). New variants should follow the same
  pattern.
- **`classnames` not used** — Multi-class strings should compose through
  the `classnames` helper, not via `+` or template literals; matches the
  established Badge/Label/etc. pattern.
- **Inline event handlers in render that allocate every render** — Hoist
  callbacks via `useCallback` or component methods when they're passed to
  children that memoize.
- **`...rest` spread to an unknown DOM node without filtering** — Be careful
  when spreading to a primitive element; React 17 warns on unknown DOM
  attributes.

### React Components — CONSIDER

- **Sub-component naming** — Sage attaches sub-components to the parent
  (`Label.Group`, `Label.SecondaryButton`). New related components should
  follow that idiom rather than being free-floating exports.
- **Default value churn** — Changing a `defaultProps` value is technically
  non-breaking but observable; consider whether the change deserves a
  `feat:` rather than `fix:` commit.
- **Story arg coverage** — Story should expose the new prop via Storybook
  args/controls so reviewers can exercise it.

### Tests (Jest) — BLOCKER

- **Test that doesn't actually assert** — `it('renders', () => render(<X />))`
  with no `expect()` should be rewritten or removed.
- **Snapshot mass-update without justification** — Updating many snapshots
  in a non-snapshot-targeted PR is usually a signal of accidental visual
  regression.

### Tests — SHOULD FIX

- **Missing coverage for new prop / variant** — New `color`, `style`, or
  `interactiveType` value should have at least one rendering assertion.
- **Async behavior tested with bare `setTimeout`** — Use Testing Library's
  `waitFor` / `findBy*` instead.

### Conventional Commits — SHOULD FIX

- **Scope mismatch** — Commit scope should match the affected package:
  `feat(sage-react):`, `fix(sage-assets):`, `chore(sage-system):`, etc.
  A change touching only React with a `sage-assets` scope is wrong.
- **Missing scope** — Multi-package commits without a scope are allowed but
  make changelogs noisier; prefer one commit per package.

## Severity Definitions

| Level | Meaning | Action |
|---|---|---|
| BLOCKER | Breaks conventions, breaking change without footer, security issue, failing tests/lint | Must fix |
| SHOULD FIX | Violates patterns or best practices | Fix unless good reason |
| CONSIDER | Could be improved but acceptable | Optional |

## Output Format

**Number items sequentially across all sections — do not restart numbering
in each section.** Section headers still show per-section counts.

```markdown
## Sage Code Review

**Files Reviewed:** [list]
**Packages Affected:** sage-react | sage-assets | sage-system | sage-packs
**Overall Assessment:** APPROVED | NEEDS CHANGES | BLOCKER

---

### BLOCKERS ([count])

#### 1. [Issue Title]
- **File:** `path/to/file:line`
- **Issue:** [description]
- **Fix:** [specific action]

---

### SHOULD FIX ([count])

#### 2. [Issue Title]
- **File:** `path/to/file:line`
- **Issue:** [description]
- **Fix:** [specific action]

---

### CONSIDER ([count])

#### 3. [Issue Title]
- **File:** `path/to/file:line`
- **Suggestion:** [description]

---

### What's Good
- [Positive observation]
- [Pattern followed correctly]
```

## Anti-Patterns in Reviewing

- Do NOT nitpick formatting — ESLint/Stylelint/Prettier handle that.
- Do NOT suggest adding comments to self-explanatory code.
- Do NOT flag patterns that match existing sage components (consistency
  with the rest of the library is more important than personal taste).
- Do NOT suggest migrating to TypeScript inside this PR; sage-react is
  still PropTypes-based and TS migration is its own initiative.
- Do NOT review generated files (`packages/*/dist/`, `packages/*/build/`).
