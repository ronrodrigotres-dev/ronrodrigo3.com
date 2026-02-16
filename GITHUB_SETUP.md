# Configuración para GitHub

Esta guía te ayudará a configurar el proyecto RON3IA en GitHub y habilitar el deploy automático a GitHub Pages.

## 1. Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Clic en "New repository"
3. Nombre: `ron3ia-web` (o el que prefieras)
4. Descripción: "RON3IA - Consola de Inteligencia Estratégica"
5. Selecciona "Public" o "Private"
6. NO inicialices con README (ya tenemos uno)
7. Clic en "Create repository"

## 2. Subir el Código

```bash
# En la carpeta del proyecto
cd /mnt/okcomputer/output/app

# Inicializar git
git init

# Agregar todos los archivos
git add .

# Commit inicial
git commit -m "Initial commit: RON3IA v5.0.1 - Consola de Inteligencia Estratégica"

# Conectar con GitHub (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/ron3ia-web.git

# Subir código
git push -u origin main
```

## 3. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Clic en "Settings"
3. En el menú lateral, clic en "Pages"
4. En "Source", selecciona "GitHub Actions"

El workflow ya está configurado en `.github/workflows/deploy.yml`

## 4. Verificar Deploy

1. Ve a la pestaña "Actions" en tu repositorio
2. Deberías ver el workflow "Deploy to GitHub Pages" ejecutándose
3. Espera a que termine (toma ~2-3 minutos)
4. Una vez completado, tu sitio estará en:
   `https://TU_USUARIO.github.io/ron3ia-web/`

## 5. Configurar Dominio Personalizado (Opcional)

Si quieres usar tu dominio `ronrodrigo3.com`:

1. Crea un archivo `CNAME` en la carpeta `public/`:
   ```
   echo "ronrodrigo3.com" > public/CNAME
   ```

2. En GitHub Pages settings, agrega tu dominio en "Custom domain"

3. Configura los DNS de tu dominio:
   ```
   Tipo: A
   Nombre: @
   Valor: 185.199.108.153
          185.199.109.153
          185.199.110.153
          185.199.111.153
   
   Tipo: CNAME
   Nombre: www
   Valor: TU_USUARIO.github.io
   ```

## 6. Actualizar vite.config.ts para GitHub Pages

Si usas un dominio personalizado, no necesitas cambios.

Si usas el dominio de GitHub Pages, actualiza:

```typescript
// vite.config.ts
export default defineConfig({
  base: '/ron3ia-web/',  // Nombre de tu repositorio
  // ... resto de config
})
```

## 7. Variables de Entorno (Opcional)

Si necesitas conectar con tu API de RON3IA:

1. Crea un archivo `.env`:
   ```
   VITE_RON3IA_API_URL=https://api.ron3ia.com
   ```

2. En GitHub, ve a Settings > Secrets and variables > Actions
3. Agrega tu `VITE_RON3IA_API_URL` como secret

## Estructura de Archivos para GitHub

```
ron3ia-web/
├── .github/
│   └── workflows/
│       └── deploy.yml       # Workflow de deploy
├── src/
│   ├── components/          # Componentes React
│   ├── sections/            # Secciones de la página
│   ├── hooks/               # Custom hooks
│   ├── App.tsx              # App principal
│   └── index.css            # Estilos globales
├── public/                  # Archivos estáticos
├── index.html               # HTML entry
├── vite.config.ts           # Config Vite
├── tailwind.config.js       # Config Tailwind
├── package.json             # Dependencias
├── README.md                # Documentación
├── LICENSE                  # Licencia MIT
├── CHANGELOG.md             # Historial de cambios
├── CONTRIBUTING.md          # Guía de contribución
└── .gitignore               # Archivos ignorados
```

## Solución de Problemas

### El build falla

```bash
# Limpiar y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### El deploy no se ve reflejado

1. Verifica en Actions que el workflow se ejecutó correctamente
2. Limpia la caché del navegador
3. Espera 5-10 minutos (puede haber delay de CDN)

### Errores de TypeScript

```bash
# Verificar tipos
npx tsc --noEmit
```

## Scripts Útiles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Lint
npm run lint
```

## Soporte

¿Problemas? Contáctanos en hola@ron3ia.com
