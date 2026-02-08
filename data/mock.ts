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

export const dashboardSummary = [
  {
    id: "comunidad",
    title: "Tu comunidad",
    value: "Equipo Confía",
  },
  {
    id: "recorrido",
    title: "Tu recorrido",
    value: "8 meses",
    helper: "Estás comenzando tu camino dentro de la comunidad.",
  },
  {
    id: "impacto",
    title: "Impacto reciente",
    value: "Acompañamiento que continúa",
  },
];

export const dashboardHighlights = [
  {
    id: "espacio",
    title: "Relación continua",
    description:
      "Tu presencia fortalece la confianza y la permanencia en los procesos.",
  },
  {
    id: "rol",
    title: "Tu rol actual",
    description: "Este rol solo personaliza tu experiencia.",
  },
  {
    id: "impacto",
    title: "Impacto compartido",
    description: "Celebramos logros que siguen creciendo en comunidad.",
  },
];

export const membershipStatus = {
  label: "Membresía activa",
  message: "¡Gracias por seguir haciendo la diferencia!",
};

export const membershipBadges = [
  { id: "badge-1", label: "Lograda", status: "lograda" },
  { id: "badge-2", label: "En progreso", status: "en progreso" },
  { id: "badge-3", label: "Bloqueada", status: "bloqueada" },
];
