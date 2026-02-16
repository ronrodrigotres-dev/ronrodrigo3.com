# Contribuyendo a RON3IA Web

¡Gracias por tu interés en contribuir al proyecto RON3IA! Este documento proporciona guías para contribuir.

## Cómo Contribuir

### Reportar Bugs

Si encuentras un bug, por favor crea un issue con:
- Descripción clara del problema
- Pasos para reproducirlo
- Comportamiento esperado vs actual
- Screenshots (si aplica)
- Información del navegador/dispositivo

### Sugerir Mejoras

Para sugerir nuevas características:
- Describe el problema que resuelve
- Explica la solución propuesta
- Considera alternativas

### Pull Requests

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## Estándares de Código

### TypeScript
- Usa tipos explícitos
- Evita `any`
- Documenta funciones públicas

### CSS/Tailwind
- Usa clases de Tailwind cuando sea posible
- Para estilos custom, usa el sistema de diseño cyberpunk
- Mantén consistencia con los colores del tema

### Componentes React
- Usa functional components
- Implementa proper TypeScript interfaces
- Documenta props con JSDoc

## Estructura de Commits

```
tipo(alcance): descripción corta

descripción más larga si es necesaria

Fixes #123
```

Tipos: feat, fix, docs, style, refactor, test, chore

## Testing

- Asegúrate de que el build pase: `npm run build`
- Verifica que no haya errores de TypeScript
- Prueba en diferentes navegadores

## Preguntas

¿Tienes preguntas? Contáctanos en hola@ron3ia.com

---

**Nota**: Al contribuir, aceptas que tus contribuciones serán licenciadas bajo la licencia MIT del proyecto.
