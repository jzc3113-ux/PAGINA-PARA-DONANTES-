// Purpose: Centralizar enums y constantes para evitar "magic strings" en el proyecto.

export enum UserRole {
  Admin = "admin",
  Donor = "donor",
}

export enum ActivityStatus {
  Pending = "pending",
  Approved = "approved",
  Rejected = "rejected",
}

export enum PhotoStatus {
  Pending = "pending",
  Approved = "approved",
  Rejected = "rejected",
}

export const STORAGE_BUCKETS = {
  profilePhotos: "profile-photos",
  activityEvidence: "activity-evidence",
} as const;

// EDIT HERE: cambiar textos visibles en el dashboard.
export const DASHBOARD_COPY = {
  welcomeTitle: "Gracias por apoyar nuestras causas",
  uploadPrompt: "Sube una foto para validar tu actividad",
} as const;

// EDIT HERE: cambiar medallas iniciales y sus etiquetas públicas.
export const DEFAULT_BADGES = [
  {
    code: "starter",
    label: "Donante Inicial",
  },
  {
    code: "helper",
    label: "Manos Solidarias",
  },
] as const;
