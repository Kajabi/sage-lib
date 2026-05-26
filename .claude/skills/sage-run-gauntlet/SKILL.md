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
| Accessibility reviewer | `sage-a11y-reviewer` | Keyboard nav, ARIA, focus management, semantic HTML, label association, contrast | Always when JSX/SCSS files change in `sage-react` or `sage-assets/components/` |
| Existence reviewer | `sage-existence-reviewer` | Duplication: new component / mixin / token / icon that already exists | Only if the diff introduces new files in `packages/sage-react/lib/` or `packages/sage-assets/lib/stylesheets/` |

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
  excluding `*.story.jsx` and `*.spec.jsx`) → code-reviewer + a11y-reviewer
- **SCSS / asset files** (`packages/sage-assets/lib/stylesheets/**/*.scss`) →
  design-reviewer; add a11y-reviewer if the file is in
  `stylesheets/components/`
- **Story files only** (`*.story.jsx`) → code-reviewer (story patterns + arg
  coverage); skip design/a11y unless other files also changed
- **Spec files only** (`*.spec.jsx`) → code-reviewer only
- **Vanilla-JS `sage-system` files**
  (`packages/sage-system/lib/**/*.js`) → code-reviewer only. `sage-system`
  is imperative IIFE-style DOM helpers (`Sage.popover`, `Sage.accordion`,
  etc.), not React components — a11y-reviewer is skipped because there's
  no rendered markup in the source, and design-reviewer is skipped because
  there are no SCSS / className changes. By repo convention `sage-system`
  has no spec/test files, so the code reviewer should not flag "missing
  spec coverage" for additions there.
- **Token files** (`style-dictionary/tokens/**/*.json`) → design-reviewer +
  existence-reviewer
- **Docs / changelogs / config** (`docs/`, `CHANGELOG.md`, `*.yml`,
  `package.json`, `lerna.json`, `.claude/**/*.md`) → skip the gauntlet,
  review manually

Additionally, check whether the diff introduces any **new files**
(`git diff develop...HEAD --diff-filter=A --name-only`) in:

- `packages/sage-react/lib/` — new component directories or root files
- `packages/sage-assets/lib/stylesheets/components/` — new component partials
- `packages/sage-assets/lib/stylesheets/mixins/` — new mixins
- `style-dictionary/tokens/` — new token files

If yes, also launch `sage-existence-reviewer`. If the only new files are
specs, stories, or changelog entries, skip the existence reviewer.

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
  "Run an existence/duplication review on new files introduced by this
   branch. Run git diff develop...HEAD --diff-filter=A --name-only to find
   them, then grep packages/sage-react/lib/ and packages/sage-assets/lib/
   for similar existing implementations. Flag SHOULD FIX or CONSIDER only —
   never BLOCKER. Follow the sage-existence-review skill format."
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

### Post results to the PR (optional)

By default the gauntlet output stays in the conversation between the
developer running it and the agent — the assumption is that's the same
person as the PR author, so a verbal-only result is enough.

**Opt in to posting** when any of the following is true:

- The gauntlet is being run against **someone else's PR** (the original
  author needs to see the findings).
- The user explicitly asks: "post the gauntlet findings to the PR,"
  "leave a review on the PR," "comment on the PR with the findings,"
  or similar.
- The findings include at least one BLOCKER or SHOULD FIX and the PR
  is open for review (so the post is actionable, not just informational
  noise).

**Do not post by default** when:

- The gauntlet ran against the developer's own PR pre-push (they're
  going to read the conversation output anyway).
- All sections are empty / "What's Good" only (label is enough signal).
- The user explicitly opted out ("don't post," "just tell me here").

**Format:** post the full structured output as a single `gh pr review`
comment so sequential numbering, severity headers, and per-finding
file:line refs are preserved. Inline per-line comments would fragment
the output and lose cross-finding ordering.

**Command:**

```bash
gh pr review <PR#> --repo Kajabi/sage-lib --comment --body "$(cat <<'EOF'
## Sage Gauntlet Results

**Reviewers launched:** [list]
**Files Reviewed:** [list]
**Overall Assessment:** APPROVED | NEEDS CHANGES | BLOCKER

### BLOCKERS ([count])
…

### SHOULD FIX ([count])
…

### CONSIDER ([count])
…

### What's Good
…

---
_Posted by \`sage-run-gauntlet\`. The \`ran-gauntlet\` label has also
been applied. Findings ordered by severity; numbering is sequential
across sections._
EOF
)"
```

The footer line is required — it tells human reviewers the comment was
machine-generated and signals where to look for the criteria (the
`ran-gauntlet` label).

**Permissions:** `gh pr review --comment` requires you to be a
collaborator on the repo or to have read+pull-request-write scopes on
your `gh auth`. If it fails with a 403 / 404, fall back to
`gh pr comment <PR#> --body "…"` which creates a normal PR conversation
comment instead of a formal review.

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
