# Dhanvin S — Portfolio

Single-page portfolio for a Machine Learning Engineer focused on **AI evaluation
and LLM / multimodal model quality**. Plain HTML, CSS, and vanilla JS — no build
step, no framework.

**Live:** https://dhanvins.github.io/Dhanvin-s-Portfolio/

## Files

| File | Purpose |
|------|---------|
| `index.html` | All page content and structure |
| `styles.css` | Dark theme, layout, responsive rules |
| `script.js` | Scroll reveal, footer year, active-nav highlight |
| `Dhanvin_S_Resume.pdf` | Résumé linked from the hero and contact sections |

## Editing

Everything is content-in-HTML:

- **Name / role / tagline** — `.hero` section in `index.html`
- **Results strip** — `.metrics` section (four headline numbers)
- **Experience** — the `#work` timeline
- **Projects** — `#projects`; evaluation systems first, then infrastructure/research
- **Colors** — CSS variables at the top of `styles.css` (`--accent`, `--accent-2`, `--bg`)

## Local preview

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000
```

## Deploy

GitHub Pages serves from the `main` branch root. Push to `main` and the site
updates within a minute.
