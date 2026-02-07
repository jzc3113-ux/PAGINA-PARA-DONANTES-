// Purpose: Definir los tipos TypeScript compartidos para entidades principales.

import { ActivityStatus, PhotoStatus, UserRole } from "./constants.js";

export interface Profile {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
  avatarUrl?: string | null;
}

export interface Activity {
  id: string;
  profileId: string;
  description: string;
  occurredAt: string;
  status: ActivityStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Badge {
  id: string;
  code: string;
  label: string;
  description: string;
  awardedAt?: string | null;
}

export interface Photo {
  id: string;
  profileId: string;
  storagePath: string;
  status: PhotoStatus;
  createdAt: string;
  validatedAt?: string | null;
}
