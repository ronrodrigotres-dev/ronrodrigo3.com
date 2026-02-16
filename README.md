# RON3IA - Consola de Inteligencia Estratégica

![RON3IA](https://img.shields.io/badge/RON3IA-v5.0.1-cyberred)
![React](https://img.shields.io/badge/React-18.0+-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-06B6D4?logo=tailwindcss)

> **Sistema autónomo de optimización financiera digital.**
> 
> Desde la mejora de conversión hasta la optimización del margen empresarial, RON3IA detecta ineficiencias en tu ecosistema digital y genera decisiones estratégicas accionables en minutos.

## 🚀 Características

- **🤖 IA Autónoma**: Sistema inteligente que opera 24/7 detectando oportunidades
- **📊 Dashboard en Tiempo Real**: Visualización de métricas y score de salud digital
- **⚡ Consola de Comandos**: Interfaz tipo terminal para interacción directa
- **🎨 Diseño Cyberpunk**: Experiencia visual inmersiva y futurista
- **📱 Responsive**: Optimizado para todos los dispositivos
- **🔍 SEO Optimizado**: Meta tags, schema.org y estructura semántica

## 📦 Stack Tecnológico

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion + GSAP
- **Particles**: tsparticles
- **Icons**: Lucide React

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/ron3ia-web.git
cd ron3ia-web

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🏗️ Estructura del Proyecto

```
ron3ia-web/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/
│   │   ├── effects/       # Efectos visuales (Matrix, Particles, etc.)
│   │   └── ui-custom/     # Componentes UI personalizados
│   ├── sections/          # Secciones de la página
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilidades
│   ├── App.tsx            # Componente principal
│   └── index.css          # Estilos globales
├── index.html             # HTML entry point
├── tailwind.config.js     # Configuración Tailwind
├── vite.config.ts         # Configuración Vite
└── package.json
```

## 🎨 Sistema de Diseño

### Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Cyber Red | `#ff003c` | Primario, CTAs, acentos |
| Cyber Cyan | `#00f0ff` | Secundario, información |
| Cyber Green | `#00ff41` | Éxito, online status |
| Cyber Yellow | `#ffee00` | Advertencias |
| Cyber Black | `#050505` | Fondo principal |

### Tipografía

- **Display**: Orbitron (títulos)
- **Body**: Inter (cuerpo)
- **Mono**: Fira Code / JetBrains Mono (terminal, código)

## 📈 Métricas de Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: < 200KB (gzipped)

## 🔧 Configuración para GitHub Pages

1. Actualiza `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/nombre-del-repo/',
  // ... resto de config
})
```

2. Configura GitHub Actions para deploy automático (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 📝 SEO

La aplicación incluye:
- Meta tags optimizados
- Open Graph / Twitter Cards
- Schema.org structured data
- Canonical URLs
- Sitemap XML
- Robots.txt

## 🤝 Integración con RON3IA API

Para conectar con tu backend de IA:

```typescript
// src/lib/api.ts
const API_BASE = import.meta.env.VITE_RON3IA_API_URL;

export async function analyzeWebsite(url: string) {
  const response = await fetch(`${API_BASE}/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
  });
  return response.json();
}
```

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para detalles.

---

<p align="center">
  <strong>RON3IA</strong> — La eficiencia digital no es opcional. Es estructural.
</p>

<p align="center">
  <a href="https://ronrodrigo3.com">🌐 Website</a> •
  <a href="mailto:hola@ron3ia.com">✉️ Email</a> •
  <a href="https://linkedin.com/company/ron3ia">💼 LinkedIn</a>
</p>
