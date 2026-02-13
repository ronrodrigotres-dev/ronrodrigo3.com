# CLAUDE.md - RON3IA Site

## Project Overview

RON3IA is a static marketing website for a digital optimization and GEO (Generative Engine Optimization) platform based in Chile. The site showcases 6 core services via an interactive terminal-style UI and collects lead data (URL + email) through a hacker-themed modal. All content is in Spanish.

**Domain:** ronrodrigo3.com
**Hosting:** GitHub Pages (automatic deploy on push to `master`)

## Tech Stack

- **No framework** - Pure vanilla HTML5, CSS3, JavaScript (ES6+)
- **No build system** - No bundler, no package.json, no npm dependencies
- **No testing framework** - No automated tests
- **No linting/formatting** - No ESLint, Prettier, or similar tools
- **Fonts:** Google Fonts - Orbitron (wght 400, 700, 900) + Fira Code (wght 300, 500)

## File Structure

```
/
├── index.html            # Main landing page (~435 lines) - hero, 6 service cards, terminal modal, score ring
├── analizar-ahora.html   # Post-payment audit results page - calls Netlify function
├── entidad.html          # Entity declaration page (plain HTML, no styling)
├── geo-vs-seo.html       # Educational article with Schema.org JSON-LD structured data
├── glosario.html         # GEO glossary/definitions page
├── robots.txt            # Crawler rules: allows AI search bots, blocks AI training bots
├── sitemap.xml           # XML sitemap for crawlers
├── llms.txt              # LLM entity metadata (entity name, type, topics)
├── CNAME                 # GitHub Pages custom domain: ronrodrigo3.com
└── CLAUDE.md             # This file
```

## Architecture & Patterns

### index.html - Main Page Structure

The landing page has 4 main sections and a modal overlay:

1. **Hero** - Logo with glow animation, subtitle, description
2. **Services Grid** - 6 service cards rendered dynamically from a JS `services[]` array; clicking a card opens the terminal modal
3. **Score Section** - Health score ring that animates (45-85 random score) after a simulated command execution
4. **Terminal Modal** - Hacker-themed overlay with typewriter effect, URL + email input fields, and simulated execution flow

### Custom Sniper Cursor

The site hides the default cursor and replaces it with a custom crosshair (`sniper-cursor` + `sniper-dot`). On hover over `.interactive` elements, buttons, or inputs, the cursor enters a "locked" state (green border, 45-degree rotation). Hidden on mobile via `@media (max-width: 768px)`.

### CSS

- All CSS is embedded in `<style>` blocks within each HTML file (no external stylesheets)
- Dark theme: background `#050505`, primary accent `#ff0000`, text `#fff`
- Tactical/cyberpunk aesthetic with scan-line overlay, glow effects, red corner decorations
- `clamp()` for fluid typography; `@media (max-width: 768px)` for mobile breakpoint
- CSS Grid for services layout (`repeat(auto-fit, minmax(300px, 1fr))`)
- Fira Code monospace font used in the terminal modal

### JavaScript

- Vanilla ES6+ with template literals and arrow functions
- Service cards rendered dynamically via `document.createElement`
- Modal opens with typewriter animation (`setInterval` at 30ms per character)
- Score animation counts up from 0 to a random final score (45-85)
- Email input gets visual validation (green when contains `@` and `.`)
- Execution is simulated (alert + score animation) - no real API call from the main page
- No modules, no imports, no third-party JS libraries

### HTML

- Semantic HTML5 (`<section>`, `<h1>`-`<h3>`, etc.)
- Language attribute: `lang="es"` on all pages
- `geo-vs-seo.html` uses Schema.org JSON-LD structured data

## Services Data Model

The 6 services are defined in a JS array with this shape:

```js
{ title: string, sub: string, cmd: string }
```

Services: Auditoría Estratégica, Ingeniería de Conversión (CRO), SEO de Arquitectura, Growth & SEM, E-Commerce Escalable, Transformación Digital.

## External API Integration

### Backend API (Google Cloud Run) - used by `analizar-ahora.html`
```
Base URL: https://ron3ia-api-819648047297.southamerica-west1.run.app
```

- `POST /analizar-sitio` - Submit site for GEO audit
- `GET /descargar-reporte/{audit_id}` - Download PDF report

**Note:** The redesigned `index.html` no longer calls the backend API directly. It uses simulated execution with an alert. The API is still used by `analizar-ahora.html`.

### Netlify Functions
- `analizar-ahora.html` calls `/.netlify/functions/analyze` (serverless function)
  - Request body: `{ brand, domain, email }`
  - Response: `{ geo_score, grade, strategic_roadmap }`

## AI/SEO Configuration

### robots.txt Strategy
- **Allowed:** OAI-SearchBot, PerplexityBot, Bingbot (real-time AI search crawlers)
- **Blocked:** GPTBot, Google-Extended (AI training data crawlers)
- This is intentional: allow search visibility, protect intellectual property from training

### llms.txt
Declares RON3IA as an entity for LLM consumption with topics: GEO, Marketing Intelligence, Entity SEO, AI Search Visibility, E-E-A-T.

## Development Workflow

1. Edit HTML files directly (no build step required)
2. Test locally by opening HTML files in a browser
3. Commit and push to `master` for automatic GitHub Pages deployment
4. Custom domain routing handled by the `CNAME` file

## Key Conventions

- **All content is in Spanish** - maintain this language for all user-facing text
- **Self-contained pages** - each HTML file includes its own CSS and JS inline; do not extract to external files unless explicitly requested
- **No build tooling** - do not introduce package.json, bundlers, or transpilers unless explicitly requested
- **Design language** - dark theme (`#050505`), red accents (`#ff0000`), green for success/lock-on (`#00FF00`), Orbitron font for UI, Fira Code for terminal elements
- **Sniper cursor** - custom crosshair cursor is a core UX element; elements that should trigger lock-on must have the `.interactive` class
- **Keep files lean** - this is a static site; avoid over-engineering

## Deployment

Push to `master` branch triggers automatic GitHub Pages deployment. No CI/CD pipeline, no build step. Files are served as-is.

## Known Issues

- `sitemap.xml` contains a duplicate `<urlset>` block (two XML declarations in one file) - only the first block is valid XML
- `analizar-ahora.html` has hardcoded brand/domain values (`RON3IA` / `ronrodrigo3.com`) and a hardcoded email (`cliente@pago.com`)
