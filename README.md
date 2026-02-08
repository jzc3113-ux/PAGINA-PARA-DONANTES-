# Página para Donantes (MVP)

MVP visual y funcional para la recaudación 2026. Incluye UI, navegación y estado local sin backend.

## Cómo correr local
```bash
npm install
npm run dev
```

## Design System Amigos Crea+
### Tokens (CSS variables)
Definidos en `app/globals.css`:
- `--color-primary`: #0C00C0
- `--color-background`: #FFFFFF
- `--color-surface`: #F5F6FA
- `--color-accent`: #FF98DD
- `--color-success`: #A8DE73
- `--color-highlight`: #FFE667
- `--color-text-primary`: #0B0F1A

### Componentes reutilizables
Ubicados en `/components`:
- `Button`: variantes Primary / Secondary / Ghost con estados.
- `Card`: Default / Info (borde destacado).
- `Pill`: Success / Highlight / Neutral.
- `Alert`: aviso suave con acción secundaria.
- `Table`: encabezado, filas y columna de estado con `Pill`.
- `InputField` y `SelectField`: label + helper + estados.

## Estructura de carpetas
- `app/`: rutas del App Router de Next.js (login, dashboard, aportes, impacto, perfil, medallas, subir-foto).
- `components/`: componentes UI reutilizables.
- `src/lib/`: datos demo (hardcoded) usados por las vistas.
- `tailwind.config.ts` / `postcss.config.js`: configuración de Tailwind CSS.

## Deploy en Vercel
1. Subir el repo a GitHub/GitLab/Bitbucket.
2. En Vercel, crear un nuevo proyecto y seleccionar el repositorio.
3. Mantener los valores por defecto (Next.js detectado automáticamente).
4. Click en **Deploy**.

## Rutas principales
- `/login`: login/registro fake con botón de acceso.
- `/dashboard`: resumen con métricas y CTA principal.
- `/aportes`: historial de aportes con tabla y alerta.
- `/impacto`: tarjetas de impacto y resumen mensual.
- `/perfil`: formulario de perfil editable en estado local.
- `/medallas`: grid con medallas bloqueadas/desbloqueadas.
- `/subir-foto`: input con preview local de imagen.
