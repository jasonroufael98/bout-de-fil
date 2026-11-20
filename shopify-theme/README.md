# Bout de Fil — Shopify theme (phase 1: header + hero)

Online Store 2.0 theme. The original static site in the repo root is unchanged and still runs with `npm start`.

## What's included

| Path | Purpose |
| --- | --- |
| `layout/theme.liquid` | Page shell, theme colour variables, fonts, header group |
| `sections/header.liquid` | Logo, menu (Shopify navigation), cart link with item count, mobile menu |
| `sections/hero.liquid` | Editable hero: image, eyebrow, heading, tagline, note, button label + link |
| `sections/header-group.json` | Places the header in the layout (editable in Theme Editor) |
| `templates/index.json` | Home page = hero section |
| `config/settings_schema.json` | Theme settings: colours, favicon |
| `snippets/fonts.liquid` | Self-hosted fonts (Cormorant Garamond, Jost, Playfair Display) |
| `assets/base.css`, `assets/theme.js` | Styles and mobile-menu script from the original site |

The render is pixel-identical to the static homepage at 1600×900 and 390×844.

## Test and upload

Requires [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) and a store (a free development store from a Shopify Partners account works).

```bash
npm install -g @shopify/cli
shopify theme check --path shopify-theme                       # lint, works offline
shopify theme dev --path shopify-theme --store YOUR-STORE.myshopify.com   # live preview
shopify theme push --path shopify-theme --unpublished          # upload without publishing
```

## Store setup

- **Navigation:** Online Store → Navigation → `main-menu`: add Shop, Collection, Our Story.
- **Hero photo:** Customize → Hero → Image. Without one, the bundled illustration is shown.
- **Button link:** Customize → Hero → Button link (defaults to all products).

## Not built yet

Product, collection and cart templates, cart drawer, featured-collection section, footer, search and 404.
Until they exist, `/cart`, `/products/*` and `/collections/*` use Shopify defaults or error pages, so don't publish this theme yet.
