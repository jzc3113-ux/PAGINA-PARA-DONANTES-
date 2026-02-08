export const roleOptions = [
  { id: "amigo", label: "Amigo Crea+" },
  { id: "voluntariado", label: "Voluntariado" },
  { id: "creandos", label: "Creandos" },
];

export const defaultRoleId = "amigo";

export const roleStorageKey = "amigos-crea-role";

export const profileDefaults = {
  nombre: "María González",
  email: "maria.gonzalez@email.com",
  preferencia: "WhatsApp",
};

export const dashboardCards = [
  {
    id: "comunidad",
    title: "Tu comunidad",
    description: "Formas parte del equipo Confía",
  },
  {
    id: "recorrido",
    title: "Tu recorrido",
    description: "Llevas 8 meses acompañando este movimiento",
  },
  {
    id: "impacto",
    title: "Impacto reciente",
    description: "Este mes ayudaste a que experiencias educativas sigan activas",
  },
  {
    id: "reconocimiento",
    title: "Reconocimiento activo",
    description: "Medalla destacada",
  },
];

export const membershipStatus = {
  status: "activa" as const,
  copy: {
    activa: "Tu membresía está activa. Gracias por acompañar este camino.",
    pausa: "Tu membresía está en pausa. Lo que ya hiciste sigue teniendo impacto.",
    pendiente: "Estamos validando tu membresía. Te avisaremos pronto.",
  },
};

export const membershipBadges = [
  { id: "badge-1", name: "Inicio Solidario", status: "lograda" },
  { id: "badge-2", name: "Manos a la Obra", status: "lograda" },
  { id: "badge-3", name: "Camino Constante", status: "en progreso" },
  { id: "badge-4", name: "Reconocimiento Especial", status: "en progreso" },
];

export const teamInfo = {
  name: "Confía",
  description: "Este valor guía la forma en que transformamos juntos.",
};
