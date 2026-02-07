// Purpose: Concentrar la lógica de autenticación y sesión del usuario.

import { UserRole } from "./constants.js";
import type { Profile } from "./types.js";

export interface Session {
  accessToken: string;
  profile: Profile;
}

// Comentario clave: autenticación y construcción de sesión.
export function buildSessionFromPayload(payload: {
  accessToken: string;
  profile: Profile;
}): Session {
  return {
    accessToken: payload.accessToken,
    profile: payload.profile,
  };
}

// Comentario clave: validar si un perfil tiene permisos de administración.
export function isAdmin(profile: Profile): boolean {
  return profile.role === UserRole.Admin;
}
