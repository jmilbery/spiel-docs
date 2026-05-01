# spiel-docs

Documentation site for [Spiel](https://github.com/jmilbery/spiel) — a markdown-driven slide engine for solo video creators.

Built with [Docusaurus](https://docusaurus.io/) 3.9.

## Local development

```bash
npm install
npm start
```

Opens the docs site at `http://localhost:3000`. Most changes hot-reload.

## Build

```bash
npm run build
```

Outputs static HTML to `build/`. Servable from any static host.

## Deploy

GitHub Pages deploy:

```bash
GIT_USER=<your-github-username> npm run deploy
```

Or via SSH:

```bash
USE_SSH=true npm run deploy
```

Production URL: <https://jmilbery.github.io/spiel-docs/>

## Editing

All doc pages live in `docs/`. Sidebar order is configured in `sidebars.js`. Brand styles in `src/css/custom.css`.

When adding a new page:
1. Create the `.md` file in `docs/`
2. Add the page ID to `sidebars.js`
3. Run `npm start` to verify locally
4. PR + deploy

## License

MIT.
