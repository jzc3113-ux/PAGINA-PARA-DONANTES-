# Modelo de datos

## Tablas principales
- **profiles**: datos del usuario (id, email, full_name, role, avatar_url).
- **activities**: actividades reportadas por donantes (profile_id, description, occurred_at, status).
- **photos**: evidencia visual de actividades (profile_id, storage_path, status, validated_at).
- **badges**: catálogo de medallas (code, label, description).
- **badge_awards**: relación entre usuarios y medallas (profile_id, badge_id, awarded_at).

## Relaciones
- `profiles` 1..N `activities`
- `profiles` 1..N `photos`
- `profiles` N..N `badges` (via `badge_awards`)

## Notas
- Usar `status` con enums para evitar strings sueltos.
- Para auditoría, guardar `created_at` y `updated_at` en tablas clave.
