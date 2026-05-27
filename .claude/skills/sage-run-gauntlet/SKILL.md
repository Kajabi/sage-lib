---
name: sage-run-gauntlet
description: Run parallel reviews of sage-lib changes using specialized reviewer agents (code, design, a11y, existence). Launches reviewers simultaneously, then consolidates feedback by severity. Use before opening a PR against develop.
---

# Run Gauntlet (sage-lib)

Launch multiple specialized reviewers in parallel against the current changes
in `sage-lib`, then consolidate their feedback into a single prioritized report.

`sage-lib` is a pure frontend design-system library (React components in
`packages/sage-react/lib/`, SCSS in `packages/sage-assets/lib/stylesheets/`,
design tokens in `style-dictionary/`). It has no backend, no auth boundary,
no Stimulus or ViewComponents — the reviewer lineup is tuned for component
quality, design-token discipline, accessibility, and duplication.

## When to Use

- After implementing a component / bug fix / token change (before opening PR)
- When asked to review changes thoroughly
- As part of the contribution workflow against `develop`

## Reviewer Lineup

| Reviewer | Agent | Focus | When to Include |
|---|---|---|---|
| Code reviewer | `sage-code-reviewer` | React patterns (propTypes, forwardRef, hooks rules, classnames), Jest spec coverage, story-file presence, XSS-via-`dangerouslySetInnerHTML` | Always when `*.jsx`, `*.tsx`, `*.js`, `*.ts` files change |
| Design reviewer | `sage-design-reviewer` | Sage token discipline (`sage-color()`, `sage-spacing()`, `sage-border()` helpers vs raw values), Pine-token alignment for dark-mode shims, BEM-style classnames, SCSS structure | Always when `*.scss` files change OR when a React component's classNames change |
| Accessibility reviewer | `sage-a11y-reviewer` | Keyboard nav, ARIA, focus management, semantic HTML, label association, contrast | When component JSX or component SCSS changes (see Step 2); **not** for story-only diffs (`*.story.jsx` alone) |
| Existence reviewer | `sage-existence-reviewer` | Duplication: new component / mixin / token / icon that already exists | When the diff introduces new artifacts — new files under `packages/sage-react/lib/`, `packages/sage-assets/` (stylesheets, icons), or `style-dictionary/tokens/`, **or** new token keys in modified token JSON (see Step 2) |

There is intentionally **no security reviewer**. `sage-lib` ships no auth
surface; the only relevant security check (XSS via `dangerouslySetInnerHTML` or
unsanitized URL props) is folded into the code reviewer.

## Execution

### Step 1: Identify Changes

Run `git diff develop...HEAD --name-only` to determine which files have
changed. Note that sage-lib's base branch is **`develop`**, not `main`.

If working with staged changes pre-PR, fall back to
`git diff --staged --name-only`.

### Step 2: Determine Which Reviewers to Launch

Classify changed files:

- **React component files** (`packages/sage-react/lib/**/*.{jsx,tsx,js,ts}`,
  excluding `*.story.jsx` and `*.spec.jsx`) → code-reviewer + a11y-reviewer;
  also add **design-reviewer** when the diff touches `className`,
  `classnames(`, or BEM-style `sage-*` class strings in those files
- **SCSS / asset files** (`packages/sage-assets/lib/stylesheets/**/*.scss`) →
  design-reviewer; add a11y-reviewer if the file is in
  `stylesheets/components/`
- **Story files only** (`*.story.jsx`) → code-reviewer (story patterns + arg
  coverage); skip design/a11y unless other files also changed
- **Spec files only** (`*.spec.jsx`) → code-reviewer only
- **Token files** (`style-dictionary/tokens/**/*.json`) → design-reviewer only
  (existence-reviewer runs only when new artifacts are introduced — see below)
- **Docs / changelogs / config** (`docs/`, `CHANGELOG.md`, `*.yml`,
  `package.json`, `lerna.json`) → skip the gauntlet, review manually

Additionally, launch `sage-existence-reviewer` when **any** of the following
apply:

**New files** (`git diff develop...HEAD --diff-filter=A --name-only`) under:

- `packages/sage-react/lib/` — new component directories or root files
- `packages/sage-assets/lib/stylesheets/components/` — new component partials
- `packages/sage-assets/lib/stylesheets/mixins/` — new mixins
- `packages/sage-assets/lib/icons/` — new icon assets
- `packages/sage-assets/lib/stylesheets/_icons.scss` — new icon registry entries
- `style-dictionary/tokens/` — new token files

**New token keys** in existing token JSON — any modified file under
`style-dictionary/tokens/**/*.json` where the diff adds token entries (not
just value edits to existing keys).

Skip existence-reviewer when the only new files are specs, stories, or
changelog entries, and when token JSON changes are edits to existing keys
only.

### Step 3: Launch Reviewers in Parallel

Launch all applicable reviewers in a **single message** using the Agent tool:

```
Agent(subagent_type: "sage-code-reviewer"):
  "Review the current changes on this branch against sage-lib standards.
   Run git diff develop...HEAD to see all changes. Provide a structured review
   following the sage-review-code skill format."

Agent(subagent_type: "sage-design-reviewer"):
  "Review SCSS / token / class-name changes on this branch against sage-lib
   design-token discipline and Pine-alignment criteria.
   Run git diff develop...HEAD. Follow the sage-design-review skill format."

Agent(subagent_type: "sage-a11y-reviewer"):
  "Run an accessibility review on the current UI changes.
   Run git diff develop...HEAD. Check keyboard navigation, ARIA, focus
   management, semantic HTML, and label association.
   Follow the sage-a11y-review skill format."

Agent(subagent_type: "sage-existence-reviewer"):
  "Run an existence/duplication review on new artifacts introduced by this
   branch (new files via --diff-filter=A, new token keys in modified token
   JSON, new icons). Follow sage-existence-review for scope and grep targets.
   Flag SHOULD FIX or CONSIDER only — never BLOCKER."
```

### Step 4: Consolidate Reviews

After all reviewers complete, merge their feedback.

#### Priority Order

1. **BLOCKER** — Must fix. Raised by code, design, or a11y reviewers. The
   existence reviewer is advisory and never raises BLOCKER.
2. **SHOULD FIX** — Strongly recommended. From any reviewer.
3. **CONSIDER** — Optional improvements. From any reviewer.

#### Deduplication

If multiple reviewers flag the same issue:
- Keep the highest severity.
- Merge their descriptions.
- Note which reviewers flagged it.

#### Conflict Resolution

If reviewers disagree:
- Accessibility concerns override style preferences.
- Pattern compliance overrides personal taste.
- Token discipline overrides "it looks fine without it."
- Flag genuine disagreements for user decision.

## Output Format

**Number items sequentially across all sections — do not restart numbering
in each section.** If BLOCKERS has 2 items (1–2) and SHOULD FIX has 3 items,
SHOULD FIX starts at 3. CONSIDER continues from there. Section headers still
show per-section counts.

```
## Sage Gauntlet Results

**Reviewers:** [which reviewers ran]
**Files Reviewed:** [list]
**Overall Assessment:** APPROVED | NEEDS CHANGES | BLOCKER

---

### BLOCKERS ([count])

#### 1. [Issue Title] (flagged by: [reviewer(s)])
- **File:** `path/to/file:line`
- **Issue:** [description]
- **Fix:** [specific action]

### SHOULD FIX ([count])

#### 2. [Issue Title] (flagged by: [reviewer(s)])
- **File:** `path/to/file:line`
- **Issue:** [description]
- **Fix:** [specific action]

### CONSIDER ([count])

#### 3. [Issue Title] (flagged by: [reviewer(s)])
- **File:** `path/to/file:line`
- **Suggestion:** [description]

### What's Good
- [Positive observations from reviewers]
```

## After the Gauntlet

### Apply the `ran-gauntlet` label (required)

Always add the `ran-gauntlet` label to the PR to signal to human reviewers
that automated multi-agent review has already run on this branch:

```bash
gh pr edit <PR#> --add-label ran-gauntlet
```

Apply the label unconditionally — including when the gauntlet short-circuits
to manual review for docs-only or config-only diffs. The signal is "the
gauntlet step was performed on this branch," not "N agents executed."

If no PR exists yet (common when running the gauntlet before PR creation),
add the label at PR creation time or immediately after the PR is opened.

### Present results and offer options

1. **Fix blockers** — Address BLOCKER issues, optionally re-run gauntlet
2. **Fix all** — Address BLOCKER + SHOULD FIX items
3. **Proceed to PR** — Open PR against `develop` with current state
4. **Discuss** — Talk through specific issues

**Max re-run cycles:** 2 (to prevent infinite loops)

## sage-lib specifics

- **Base branch is `develop`** — all PRs target `develop`, not `main`.
- **Conventional commits required** — commitlint enforces
  `@commitlint/config-conventional` via lefthook on `commit-msg`.
- **Do not Squash and Merge** — sage-lib uses Lerna for automated changelogs
  generated from individual commit messages; squashing collapses that
  history. Per-commit conventional types matter.
- **Monorepo with Lerna** — scope commits to the affected package where
  possible: `feat(sage-react):`, `fix(sage-assets):`, `chore(sage-system):`,
  `style(sage-react):`, etc.
