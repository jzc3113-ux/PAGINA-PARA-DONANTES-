# Página para Donantes (MVP)

MVP visual y funcional para la recaudación 2026. Incluye UI, navegación y estado local sin backend.

## Cómo correr local
```bash
npm install
npm run dev
```

## Estructura de carpetas
- `app/`: rutas del App Router de Next.js (login, dashboard, perfil, medallas, subir-foto).
- `app/components/`: componentes UI reutilizables (navegación, cards).
- `src/lib/`: datos demo (hardcoded) usados por las vistas.
- `tailwind.config.ts` / `postcss.config.js`: configuración de Tailwind CSS.

## Deploy en Vercel
1. Subir el repo a GitHub/GitLab/Bitbucket.
2. En Vercel, crear un nuevo proyecto y seleccionar el repositorio.
3. Mantener los valores por defecto (Next.js detectado automáticamente).
4. Click en **Deploy**.

## Rutas principales
- `/login`: login/registro fake con botón de acceso.
- `/dashboard`: resumen con estadísticas y navegación.
- `/perfil`: formulario de perfil editable en estado local.
- `/medallas`: grid con medallas bloqueadas/desbloqueadas.
- `/subir-foto`: input con preview local de imagen.
