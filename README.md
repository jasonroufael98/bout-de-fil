# Bout de Fil — Homepage

Static, dependency-free homepage (HTML, CSS, vanilla JS). Fonts are self-hosted in `assets/fonts`.

```bash
npm start        # http://localhost:5173  (set PORT to change)
```

## Hero photo

The page loads `assets/images/hero.jpg`. If that file is missing it falls back to the bundled
illustration `assets/images/hero-fallback.svg`. To use the real photography, save it as
`assets/images/hero.jpg` (landscape, ≈1600×1440, cream background on its right edge so it blends into the page).

## Structure

- `index.html` — header, hero
- `css/styles.css` — tokens (`:root`), reusable `.btn`, `.eyebrow`, `.nav`; desktop scales from the 1600×900 design via `--u`; stacked layout below 860px
- `js/main.js` — hero fallback, mobile menu
