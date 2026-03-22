# Rostrata Idle Wiki

Player-facing wiki for **Rostrata Idle**, built with [Vite](https://vite.dev/) + React. Pages are plain **Markdown** files.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Add a wiki page

1. Create `src/content/wiki/<slug>.md`  
   - Use **lowercase** and **hyphens** (e.g. `woodcutting.md` → `/woodcutting`).
2. Put a `# Title` at the top.
3. The **sidebar** picks up every `.md` file automatically.

**Home** is always `index.md` (route `/`).

## Linking

- Same wiki: `[text](/page-slug)` (no `.md` in the URL).
- External: `[text](https://example.com)` — opens in a new tab.

[GitHub-flavored Markdown](https://github.github.com/gfm/) (tables, task lists, etc.) is enabled via `remark-gfm`.

## Build

```bash
npm run build
npm run preview   # optional: test production build
```

## Project layout

| Path | Purpose |
|------|---------|
| `src/content/wiki/*.md` | Wiki page content |
| `src/wiki/WikiLayout.tsx` | Header + sidebar shell |
| `src/wiki/WikiPage.tsx` | Renders the current page |
| `src/wiki/wikiContent.ts` | Loads `.md` via Vite `import.meta.glob` |
| `src/wiki/wiki.css` | Wiki layout + article typography |
