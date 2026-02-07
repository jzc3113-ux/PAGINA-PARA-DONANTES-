# Policies RLS

## Objetivo
Garantizar que los donantes solo puedan leer/escribir sus propios registros y que los admins puedan validar actividades y fotos.

## Sugerencias de policies
- **profiles**
  - Select/Update: `auth.uid() = id`
- **activities**
  - Insert: `auth.uid() = profile_id`
  - Select: `auth.uid() = profile_id` o `role = admin`
  - Update (admin): `role = admin`
- **photos**
  - Insert: `auth.uid() = profile_id`
  - Select: `auth.uid() = profile_id` o `role = admin`
  - Update (admin): `role = admin`
- **badge_awards**
  - Select: `auth.uid() = profile_id`
  - Insert/Update: solo backend seguro o admin

## Storage
- **profile-photos**
  - Insert: `auth.uid()` igual al path del perfil
  - Select: usuario propietario o admin
- **activity-evidence**
  - Insert: usuario propietario
  - Select: usuario propietario o admin
