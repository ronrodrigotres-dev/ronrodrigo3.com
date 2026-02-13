# CLAUDE.md - RON3IA Site

## Project Overview

RON3IA is a static marketing website for a Generative Engine Optimization (GEO) platform based in Chile. The site audits brand visibility, entity strength, E-E-A-T, and citability across AI-powered search engines. All content is in Spanish.

**Domain:** ronrodrigo3.com
**Hosting:** GitHub Pages (automatic deploy on push to `master`)

## Tech Stack

- **No framework** - Pure vanilla HTML5, CSS3, JavaScript (ES6+)
- **No build system** - No bundler, no package.json, no npm dependencies
- **No testing framework** - No automated tests
- **No linting/formatting** - No ESLint, Prettier, or similar tools
- **Font:** Google Fonts - Orbitron (wght 400, 700, 900)

## File Structure

```
/
├── index.html            # Main landing page (~637 lines) - hero, audit console, health score, CTAs
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

### CSS
- All CSS is embedded in `<style>` blocks within each HTML file (no external stylesheets)
- `index.html` contains ~500 lines of CSS with 36+ `@keyframes` animations
- Dark theme: background `#0a0a0a`, primary accent `#ff0000`, text `#fff`
- Retro/cyberpunk aesthetic with scan-line overlay, glitch effects, neon glows
- Responsive via `clamp()` for fluid typography and a `@media (max-width: 600px)` breakpoint
- CSS Grid and Flexbox for layout

### JavaScript
- Vanilla ES6+ with `async/await` and Fetch API
- Inline `<script>` blocks (no external JS files)
- DOM manipulation via `getElementById` and event handlers (`onclick`)
- No modules, no imports, no third-party JS libraries

### HTML
- Semantic HTML5 (`<section>`, `<header>`, etc.)
- Language attribute: `lang="es"` on all pages
- `geo-vs-seo.html` uses Schema.org JSON-LD structured data

## External API Integration

### Backend API (Google Cloud Run)
```
Base URL: https://ron3ia-api-819648047297.southamerica-west1.run.app
```

**Endpoints used by `index.html`:**
- `POST /analizar-sitio` - Submit site for GEO audit
  - Request body: `{ descripcion: string }`
  - Response: `{ audit_id, health_score, reporte }`
- `GET /descargar-reporte/{audit_id}` - Download PDF report

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
- **Design language** - dark theme, red accents, Orbitron font, cyberpunk/terminal aesthetic with glitch and glow effects
- **Keep files lean** - this is a static site; avoid over-engineering

## Deployment

Push to `master` branch triggers automatic GitHub Pages deployment. No CI/CD pipeline, no build step. Files are served as-is.

## Sitemap Notes

The `sitemap.xml` currently contains a duplicate `<urlset>` block (two XML declarations in one file). This is a known structural issue - only the first block is valid XML.
