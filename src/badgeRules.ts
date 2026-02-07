// Purpose: Definir la lógica de asignación de medallas según actividad.

import { ActivityStatus, DEFAULT_BADGES } from "./constants.js";
import type { Activity, Badge } from "./types.js";

export interface BadgeRuleResult {
  awardedBadges: Badge[];
}

// Comentario clave: asignación de medallas basada en actividad aprobada.
export function assignBadgesFromActivity(activities: Activity[]): BadgeRuleResult {
  const approvedActivities = activities.filter(
    (activity) => activity.status === ActivityStatus.Approved
  );

  // EDIT HERE: cambiar reglas de cálculo de medallas.
  if (approvedActivities.length === 0) {
    return { awardedBadges: [] };
  }

  const awardedBadges: Badge[] = DEFAULT_BADGES.map((badge, index) => ({
    id: `${badge.code}-${index}`,
    code: badge.code,
    label: badge.label,
    description: `Medalla otorgada por ${approvedActivities.length} actividades aprobadas.`,
    awardedAt: new Date().toISOString(),
  }));

  return { awardedBadges };
}
