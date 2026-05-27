---
name: sage-existence-review
description: Existence / duplication review for sage-lib. Given a diff, flags new React components, SCSS partials, mixins, and design tokens that appear to duplicate something already in the library.
---

# Existence Review (sage-lib)

Review a diff for new artifacts that likely duplicate something already in
`sage-lib`. The goal is to ask "should this extend X instead?" — not to
block. Sage is a design system; duplication of look-and-feel atoms is
particularly costly because it cascades to every consuming app.

## When to Use

- As part of the gauntlet, automatically whenever the diff introduces
  new files in the conventional directories below
- When reviewing a PR that adds new components, mixins, partials, or
  tokens

## Scope — What to Check

Inspect **newly introduced** artifacts and **new token keys** added inside
existing token JSON files. Renames, deletions, and edits that only change
values of existing keys are out of scope.

| Artifact type | Conventional directory | New-file signal |
|---|---|---|
| React component | `packages/sage-react/lib/<Name>/` | New `Name.jsx` exporting a top-level component |
| Sub-component | `packages/sage-react/lib/<Parent>/<Sub>.jsx` | New `*.jsx` file inside an existing component dir |
| Config / constants | `packages/sage-react/lib/<Name>/configs.js` | New `configs.js` exporting maps like `BADGE_COLORS` |
| SCSS component partial | `packages/sage-assets/lib/stylesheets/components/_*.scss` | New `_<name>.scss` partial |
| SCSS mixin | `packages/sage-assets/lib/stylesheets/mixins/_*.scss` | New `_<name>.scss` mixin partial |
| Design token | `style-dictionary/tokens/**/*.json` | New token **file** (`--diff-filter=A`) or **new keys** added in a modified JSON file (inspect the diff hunk) |
| Icon | `packages/sage-assets/lib/icons/`, icon name additions in `_icons.scss` | New icon symbol |

**Out of scope:** spec files, story files, generated files (`packages/*/dist/`,
`packages/*/build/`), changelog entries, config files.

## Review Process

1. **Identify new files** — `git diff develop...HEAD --diff-filter=A --name-only`
2. **Identify new token keys** — for any modified (non-added) file under
   `style-dictionary/tokens/**/*.json` from
   `git diff develop...HEAD --name-only`, read
   `git diff develop...HEAD -- <file>` and extract **added** token names/keys
   from the hunk (ignore value-only edits to keys that already existed).
3. **Filter** new files to the directories above; ignore specs, stories, and
   generated files.
4. **Extract concrete names** from each new file and each new token key:
   - Component name (from `export const X = …` or directory name)
   - Constant names exported from `configs.js`
   - Mixin name (`@mixin <name>`) from SCSS partials
   - Token name from style-dictionary JSON
5. **Grep for similar names** in the same conventional directory:
   - Exact name minus generic suffix (e.g. `IconButton` → search for
     `Button`, `Icon`)
   - Semantic synonyms (`Pill` → check `Badge`, `Label`, `Chip`)
   - Concept overlap (`StatusIndicator` → check `Badge`, `Dot`,
     `StatusLabel`)
6. **For each candidate**, read 10–20 lines of the existing file to confirm
   it does something related (avoid false positives from name collisions).
7. **Output** the candidates as "should this extend X?" prompts with
   severity.

## Severity Guidance

### SHOULD FIX

- New component does essentially the same job as an existing one with a
  different name (e.g. `Pill` + existing `Badge`).
- New SCSS partial covers ground already in an existing component
  partial.
- New token alias whose value is identical to an existing token.
- New constant export in `configs.js` that overlaps an existing map (e.g.
  a third source-of-truth for "status colors").

### CONSIDER

- Loose name similarity but different responsibilities.
- Existing component could be extended via a new variant prop, but the
  extension might be a larger refactor than a separate component.
- New variant of a family that legitimately needs multiple
  implementations (e.g. variants tuned to a specific layout context) but
  worth flagging so the maintainer confirms.

### Not flagged

- Renames or moves (handled by code review).
- Pure spec / story additions.
- Distinct components that share a class prefix purely by convention
  (e.g. `Card` and `CardSection`).
- New components that are explicitly tracked toward Pine deprecation.

## Anti-Patterns in Reviewing

- Do NOT flag based on filename alone — confirm the existing file does
  related work before recommending an extension.
- Do NOT flag BLOCKER severity — existence checks are advisory.
- Do NOT re-survey the full library on every run — work only from the
  diff.
- Do NOT search outside the conventional directories.
- Do NOT grep the filesystem root — anchor all searches to the repo via
  `Grep`, `Glob`, or `git grep`.

## Output Format

**Number items sequentially across all sections — do not restart numbering
in each section.** Section headers still show per-section counts.

```
## Sage Existence Review

**New Artifacts Checked:** [count and list]
**Overall:** CLEAN | POSSIBLE DUPLICATION

### SHOULD FIX ([count])

#### 1. [New artifact] may duplicate [existing artifact]
- **New file:** `path/to/new_file.jsx:line`
- **Existing candidate:** `path/to/existing_file.jsx:line`
- **Overlap:** [specific behaviors / props / classNames that look
  duplicated]
- **Recommendation:** Extend `ExistingClass` (or rename/generalize it)
  rather than introducing a second implementation. If the new component
  is a distinct concept, document the distinction in the class comment
  / `configs.js`.

### CONSIDER ([count])

#### 2. [New artifact] has loose overlap with [existing artifact]
- **New file:** `path/to/new_file.jsx:line`
- **Existing candidate:** `path/to/existing_file.jsx:line`
- **Note:** [why this might be worth discussing]

### Artifacts Checked, No Duplication Found
- `path/to/clean_artifact.jsx` — no similar implementations in
  `packages/sage-react/lib/`
```

## Example

New file: `packages/sage-react/lib/Pill/Pill.jsx`

Grep `packages/sage-react/lib/` for `Pill`, `Badge`, `Label`, `Chip`,
`Status`:

- Finds `packages/sage-react/lib/Badge/Badge.jsx`, `Label/Label.jsx`.
- Read both — Badge renders a rounded container with a value and optional
  dot; Label does the same with an icon and interactive modes. Both
  match the Pill concept.

Flag:

```
#### 1. Pill may duplicate Badge / Label
- **New file:** packages/sage-react/lib/Pill/Pill.jsx:1
- **Existing candidate:** packages/sage-react/lib/Badge/Badge.jsx:1,
  packages/sage-react/lib/Label/Label.jsx:1
- **Overlap:** Pill renders a rounded text container with optional
  leading indicator. Badge and Label already cover this surface with
  established color / sentiment maps and dark-mode shims.
- **Recommendation:** Extend Badge or Label (depending on whether the
  Pill use case needs a dot or an icon). If Pill is meant to fill a
  third niche, document the distinction in `configs.js` and update the
  sage-react README so consumers know when to choose which.
```
