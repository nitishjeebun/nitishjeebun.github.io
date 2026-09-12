# nitishjeebun.github.io

Animated studio site for independent iOS apps. Source lives in `web/`. The compiled site is committed in `docs/` for GitHub Pages.

## Develop

```bash
pnpm install
pnpm dev
```

## Ship

```bash
pnpm build
git add docs
git commit -m "Rebuild site"
```

GitHub Pages serves the `/docs` folder. All public URLs stay the same: `/apps/`, `/snapordina/`, `/qrartify/`, `/privacy/`, `/support/`, and the per-app legal pages.
