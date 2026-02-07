// Purpose: Modelar el flujo de subida y validación de fotos en almacenamiento.

import { PhotoStatus, STORAGE_BUCKETS } from "./constants.js";
import type { Photo } from "./types.js";

export interface PhotoUploadPayload {
  profileId: string;
  storagePath: string;
}

// Comentario clave: subida de fotos y creación del registro inicial.
export function createPhotoRecord(payload: PhotoUploadPayload): Photo {
  return {
    id: crypto.randomUUID(),
    profileId: payload.profileId,
    storagePath: payload.storagePath,
    status: PhotoStatus.Pending,
    createdAt: new Date().toISOString(),
    validatedAt: null,
  };
}

// Comentario clave: generar ruta con bucket definido.
export function buildPhotoStoragePath(fileName: string): string {
  return `${STORAGE_BUCKETS.profilePhotos}/${fileName}`;
}
