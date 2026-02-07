// Purpose: Definir middleware reutilizable para proteger rutas y validar roles.

import type { Session } from "./auth.js";
import { isAdmin } from "./auth.js";

// Comentario clave: middleware de autorización por rol.
export function requireAdmin(session: Session | null): void {
  if (!session || !isAdmin(session.profile)) {
    throw new Error("Acceso denegado: requiere rol administrador.");
  }
}
