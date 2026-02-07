// Purpose: Encapsular validaciones de datos de entrada del usuario.

import { ActivityStatus, PhotoStatus } from "./constants.js";

// Comentario clave: validación de estado permitido en actividades.
export function isValidActivityStatus(status: string): status is ActivityStatus {
  return Object.values(ActivityStatus).includes(status as ActivityStatus);
}

// Comentario clave: validación de estado permitido en fotos.
export function isValidPhotoStatus(status: string): status is PhotoStatus {
  return Object.values(PhotoStatus).includes(status as PhotoStatus);
}
