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
- `app/`: rutas del App Router de Next.js (login, home, dashboard, membresia, perfil).
- `components/`: componentes UI reutilizables.
- `data/`: datos mock centralizados usados por las vistas.
- `src/lib/`: helpers y hooks del MVP.
- `tailwind.config.ts` / `postcss.config.js`: configuración de Tailwind CSS.

## Deploy en Vercel
1. Subir el repo a GitHub/GitLab/Bitbucket.
2. En Vercel, crear un nuevo proyecto y seleccionar el repositorio.
3. Mantener los valores por defecto (Next.js detectado automáticamente).
4. Click en **Deploy**.

## Rutas principales
- `/login`: selección de rol y acceso al portal.
- `/home`: bienvenida y CTA al dashboard.
- `/dashboard`: resumen del espacio personal y accesos.
- `/membresia`: estado de membresía, medallas y equipo.
- `/perfil`: formulario editable con rol y preferencias.
