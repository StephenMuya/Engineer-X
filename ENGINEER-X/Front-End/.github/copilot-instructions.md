## Purpose
Short, focused guidance to help AI coding agents be productive in this repository (React + Vite frontend).

## Quick facts
- **Stack:** React (JSX) + Vite
- **Styling:** Tailwind CSS (see `tailwind.config.js`, `src/main.css`)
- **Routing:** `react-router-dom` with route array in `src/AppRoutes.jsx`
- **Entry:** `src/Main.jsx` mounts `<App />` into `#root`
- **Build tools:** `vite` (see `vite.config.js`)
- **Scripts:** use `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`, `npm test` (see `package.json`)

## Where to start (small edits)
- To run locally: `npm install` then `npm run dev`.
- To create a new page: add `src/pages/MyPage.jsx` (default export) and register it in `src/AppRoutes.jsx`.
- Routing pattern: `App` uses `useRoutes(appRoutes)`; `appRoutes` is an exported array of objects `{ path, element }` in `src/AppRoutes.jsx`.

## Patterns and conventions observed
- All components use `.jsx` files and default exports (pages follow this pattern).
- Pages live under `src/pages/` and are imported directly in `src/AppRoutes.jsx`.
- Icons are imported from `lucide-react` (per-file imports like `import { Bell } from 'lucide-react'`). Keep imports explicit to avoid bundle bloat.
- CSS: `src/main.css` is the global entry for Tailwind utilities — prefer utility classes and Tailwind tokens already present.
- Navigation: `BrowserRouter` is used at app root (`src/Main.jsx`) and `useNavigate()` is used for imperative navigation.

## Build / Test / Lint specifics
- Build: `npm run build` → vite build. Note `vite.config.js` configures `terser` for minify and drops console/debugger in production.
- Dev: `npm run dev` runs Vite with HMR.
- Tests: `npm test` runs `jest` (no tests detected by search — add `__tests__` or `*.test.jsx` files if adding tests).
- Lint: `npm run lint` runs `eslint .` — follow existing ESLint rules in repo.

## Files to inspect for project-specific behavior
- Entry & routing: [src/Main.jsx](src/Main.jsx#L1) and [src/App.jsx](src/App.jsx#L1)
- Route table: [src/AppRoutes.jsx](src/AppRoutes.jsx#L1-L50)
- Styles: [src/main.css](src/main.css#L1) and `tailwind.config.js`
- Build config: [vite.config.js](vite.config.js#L1-L120)
- Package scripts & deps: [package.json](package.json#L1-L120)

## Integration points & external dependencies
- `lucide-react` icons are used widely — prefer per-icon imports.
- Images are often external (unsplash) — there is no central assets API client in the frontend.
- No backend API client detected in the frontend; network integrations (if needed) are expected to be added as new modules under `src/`.

## Examples
- Add a new route:

1. Create `src/pages/MyFeature.jsx` (default export a React component).
2. Import and append to `appRoutes` in `src/AppRoutes.jsx`:

```js
import MyFeature from './pages/MyFeature.jsx';
// ...
{ path: '/my-feature', element: <MyFeature /> }
```

## Things an agent should avoid changing without human review
- Large changes to `vite.config.js` or `tailwind.config.js` — these affect build output and styling globally.
- Renaming many files at once — routing imports are file-path sensitive.
- Converting to TypeScript without updating build configs and deps.

## Quick checklist for pull requests
- Run `npm run lint` and fix ESLint issues.
- Run `npm run build` locally to confirm no bundling errors.
- Keep changes limited to a single concern (page, route, style, small bugfix).

---
If any of these sections are unclear or you want me to add examples for testing or component patterns, tell me which part to expand.
