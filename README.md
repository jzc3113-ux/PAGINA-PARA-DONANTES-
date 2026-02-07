# Página para Donantes

## Resumen del proyecto
Aplicación web para donantes con autenticación, perfil, subida de foto de actividad, validación por admin y asignación de medallas. Está pensada para usar Supabase (Auth, Database y Storage) como backend y Vercel para despliegue.

## Arquitectura (carpetas principales)
- `src/`: lógica compartida en TypeScript (auth, middleware, validaciones, reglas de medallas, tipos y constantes).
- `docs/`: documentación interna (modelo de datos, policies RLS, reglas de medallas y flujo admin).
- `package.json`: scripts y dependencias de lint.
- `.eslintrc.json`: configuración de ESLint.

## Setup paso a paso (Supabase + Storage + SQL + env vars)
1. **Crear proyecto en Supabase**
   - Crear un nuevo proyecto y guardar `Project URL` y `anon public` key.
2. **Auth**
   - Habilitar login con email/password (o el proveedor deseado).
3. **Database (SQL)**
   - Crear tablas base para `profiles`, `activities`, `photos`, `badges`, `badge_awards`.
   - Aplicar políticas RLS siguiendo `docs/rls-policies.md`.
4. **Storage**
   - Crear buckets:
     - `profile-photos`
     - `activity-evidence`
   - Ajustar policies de Storage según `docs/rls-policies.md`.
5. **Variables de entorno**
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (solo backend o funciones seguras)

## Cómo correr local
```bash
npm install
npm run dev
```

> Nota: reemplaza el script `dev` por el comando de tu framework (Vite, Next.js, etc.).

## Cómo desplegar en Vercel
1. Agregar las variables de entorno en Vercel (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`).
2. Verificar que la URL de Supabase esté permitida en los settings de Auth (Allowed redirect URLs).
3. Configurar el build command y output según tu framework.

## Flujo de usuario
1. **Login** → inicia sesión.
2. **Dashboard** → ve estado general y CTA de actividades.
3. **Perfil** → actualiza datos personales.
4. **Subir foto** → registra evidencia en Storage y crea un registro `photos` en estado pendiente.
5. **Historial** → consulta actividades, fotos y medallas.

## Flujo de admin
1. **Validar actividad** → revisar `activities` pendientes y aprobar/rechazar.
2. **Aprobar foto** → validar fotos en estado pendiente.
3. **Asignar medallas** → sistema calcula medallas tras aprobar actividades.

## Tabla de endpoints/rutas
| Ruta | Método | Descripción |
| --- | --- | --- |
| `/login` | GET | Pantalla de login y registro. |
| `/dashboard` | GET | Vista principal del donante. |
| `/profile` | GET/PUT | Ver y actualizar perfil. |
| `/activities` | GET/POST | Listar y crear actividades. |
| `/activities/:id/approve` | POST | Aprobar actividad (admin). |
| `/photos` | GET/POST | Listar y subir fotos. |
| `/photos/:id/approve` | POST | Aprobar foto (admin). |
| `/badges` | GET | Listar medallas del usuario. |

## Documentación adicional
- Modelo de datos: `docs/data-model.md`
- Policies RLS: `docs/rls-policies.md`
- Reglas de medallas: `docs/badge-rules.md`
- Flujo admin: `docs/admin-flow.md`
