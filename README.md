# Fullstack Open Part 6 Exercises

This repository contains my solutions for selected Part 6 exercises of the Fullstack Open course. Each subfolder maps to a group of exercises; instructions for installing, running the development server, and (where applicable) running tests are provided. All apps use Vite, so the development command is `npm run dev` (not `npm start`).

## Folder Overview

- **unicafe-redux**

  - Exercises: 6.1–6.2 (Reducer implementation + tests)
  - Run:
    1. `cd unicafe-redux`
    2. `npm install`
    3. Development UI: `npm run dev`
    4. Tests (Vitest): `npm test` or `npx vitest run`

- **redux-anecdotes**

  - Exercises: 6.13–6.19 (Redux Toolkit anecdotes app)
  - Run:
    1. `cd redux-anecdotes`
    2. `npm install`
    3. (If using a JSON server for earlier parts) start backend: `npm run server` (port 3001)
    4. Development UI: `npm run dev`

- **query-anecdotes**
  - Exercises: 6.20–6.23 (React Query version of anecdotes)
  - Run:
    1. `cd query-anecdotes`
    2. `npm install`
    3. Start backend (JSON server wrapper): `npm run server`
    4. Development UI: `npm run dev`
  - Features: Query + Mutation hooks, server availability fallback, notification context, vote sorting, validation for short anecdotes.

## Notes

- Each project uses Vite for development: use `npm run dev` (there is intentionally no `npm start` script).
- Make sure you have Node.js and npm installed.
- Refer to any folder-specific README (if present) for deeper details.

## Verification / Tests

- `unicafe-redux`: Comprehensive reducer tests (GOOD, OK, BAD, RESET + immutability) via Vitest.
- `redux-anecdotes`: State managed with Redux Toolkit; manual testing via UI (no test suite included here).
- `query-anecdotes`: Behavior verified manually (no automated tests added yet); potential future improvement would be adding React Query component tests.

## Possible Future Enhancements

- Add tests for anecdote creation & voting (both Redux and React Query versions).
- Extract notification logic into shared package if reused elsewhere.
- Add CI workflow (GitHub Actions) to run `npm run test` where available and lint.

---

If you have any questions or issues running the code, please contact me via GitHub.
