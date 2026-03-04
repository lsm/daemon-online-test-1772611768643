# Plan: Add a Triple Utility

## Goal

Create `src/triple.ts` that exports `triple(n: number): number` which returns `n * 3`.

## Tasks

### Task 1: Implement the triple utility function

**Agent:** coder

**Description:**
Create `src/triple.ts` with the following content:

```ts
export function triple(n: number): number {
  return n * 3;
}
```

**Acceptance Criteria:**
- `src/triple.ts` exists and exports a named function `triple`
- `triple(n)` returns `n * 3` for any number input
- Changes must be on a feature branch with a GitHub PR created via `gh pr create`

**Dependencies:** none

### Task 2: Add tests for the triple utility

**Agent:** coder

**Description:**
Create a test file (e.g. `src/triple.test.ts`) that verifies:
- `triple(0)` returns `0`
- `triple(1)` returns `3`
- `triple(-2)` returns `-6`
- `triple(1.5)` returns `4.5`

Use whatever test framework is already configured in the project (e.g. Jest, Vitest). If none exists, set up a minimal test runner.

**Acceptance Criteria:**
- Test file exists and all tests pass
- Changes must be on a feature branch with a GitHub PR created via `gh pr create`

**Dependencies:** Task 1 must be complete before tests can be written against the implementation.
