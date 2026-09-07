# Dhanvin S — Portfolio

A single-page personal portfolio built with plain HTML, CSS, and vanilla JS.
No build step, no framework.

**Live:** https://dhanvins.github.io/Dhanvin-s-Portfolio/

## Files

| File | Purpose |
|------|---------|
| `index.html` | All page content and structure |
| `styles.css` | Dark theme, layout, responsive rules |
| `script.js` | Scroll reveal, footer year, active-nav highlight |

## Editing

Everything is content-in-HTML. To customize:

- **Name / tagline** — `.hero` section in `index.html`
- **Experience** — the `#experience` timeline; replace the "Edit me" placeholder entry
- **Projects** — the `#projects` cards; each is a plain `<a class="card">`
- **Colors** — CSS variables at the top of `styles.css` (`--accent`, `--bg`, etc.)

## Local preview

Just open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

## Deploy (GitHub Pages)

Pages is served from the `main` branch root. Push to `main` and the site
updates within a minute.
