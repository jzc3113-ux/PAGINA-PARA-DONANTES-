// Datos demo para el MVP sin backend.
export const demoUser = {
  nombre: "María González",
  email: "maria.gonzalez@email.com",
  tipo: "Voluntaria activa",
  foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=256&q=80",
};

export const demoStats = {
  horasAcumuladas: 42,
  voluntariadosValidados: 7,
  proximaMedalla: "Agente Solidario",
};

export const demoAportes = [
  {
    id: "ap-001",
    fecha: "12 Ago 2026",
    aporte: "$25.000",
    metodo: "Tarjeta Visa",
    status: { label: "Confirmado", variant: "success" as const },
  },
  {
    id: "ap-002",
    fecha: "12 Jul 2026",
    aporte: "$25.000",
    metodo: "Tarjeta Visa",
    status: { label: "En revisión", variant: "highlight" as const },
  },
  {
    id: "ap-003",
    fecha: "12 Jun 2026",
    aporte: "$25.000",
    metodo: "Débito automático",
    status: { label: "Procesado", variant: "neutral" as const },
  },
];

export const demoImpacto = [
  {
    id: "imp-001",
    titulo: "Kit de bienvenida",
    detalle: "Se entregaron 45 kits educativos a nuevas familias.",
  },
  {
    id: "imp-002",
    titulo: "Becas activas",
    detalle: "12 jóvenes recibieron apoyo para continuar sus estudios.",
  },
  {
    id: "imp-003",
    titulo: "Voluntariado",
    detalle: "8 jornadas comunitarias activas en la última semana.",
  },
];

export const demoMedallas = [
  { nombre: "Inicio Solidario", icono: "🌟", estado: "unlocked" },
  { nombre: "Manos a la Obra", icono: "🤝", estado: "unlocked" },
  { nombre: "Equipo Imparable", icono: "🚀", estado: "locked" },
  { nombre: "Agente Solidario", icono: "🏅", estado: "locked" },
  { nombre: "Corazón Donante", icono: "❤️", estado: "locked" },
  { nombre: "Mentor Comunitario", icono: "🎓", estado: "locked" },
];
