import Link from "next/link";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Pill from "../../components/Pill";
import { demoStats, demoUser } from "../../src/lib/demoData";

const quickStats = [
  {
    id: "stat-001",
    title: "Aporte mensual",
    value: "$25.000",
    helper: "Próximo cobro el 12 de cada mes.",
  },
  {
    id: "stat-002",
    title: "Horas acumuladas",
    value: `${demoStats.horasAcumuladas} horas`,
    helper: "Gracias por tu tiempo solidario.",
  },
  {
    id: "stat-003",
    title: "Familias acompañadas",
    value: "130",
    helper: "Impacto directo de este año.",
  },
  {
    id: "stat-004",
    title: "Estado de membresía",
    value: demoStats.proximaMedalla,
    helper: "Siguiente reconocimiento en camino.",
  },
];

export default function DashboardPage() {
  return (
    <main className="space-y-8">
      <header className="rounded-3xl border border-[var(--color-surface)] bg-[var(--color-background)] p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Amigos Crea+
            </p>
            <h1 className="text-3xl font-semibold">
              Bienvenida, {demoUser.nombre}
            </h1>
            <p className="text-sm text-[var(--color-text-primary)] opacity-70">
              Gracias por seguir acompañando a la comunidad este mes.
            </p>
            <Pill variant="success">Membresía activa</Pill>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm font-semibold">
            <Link
              href="/dashboard"
              className="rounded-full bg-[var(--color-surface)] px-4 py-2"
            >
              Resumen
            </Link>
            <Link
              href="/aportes"
              className="rounded-full px-4 py-2 hover:bg-[var(--color-surface)]"
            >
              Aportes
            </Link>
            <Link
              href="/impacto"
              className="rounded-full px-4 py-2 hover:bg-[var(--color-surface)]"
            >
              Impacto
            </Link>
            <Link
              href="/perfil"
              className="rounded-full px-4 py-2 hover:bg-[var(--color-surface)]"
            >
              Perfil
            </Link>
          </nav>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {quickStats.map((stat) => (
          <Card key={stat.id} title={stat.title} description={stat.helper}>
            <p className="text-2xl font-semibold text-[var(--color-text-primary)]">
              {stat.value}
            </p>
          </Card>
        ))}
      </section>

      <Card
        variant="info"
        title="¿Quieres ajustar tu aporte?"
        description="Actualiza tu método de pago o modifica el monto cuando lo necesites."
        footer={
          <div className="flex flex-wrap items-center gap-3">
            {/* Regla: una sola CTA primaria por pantalla. */}
            <Button>Actualizar método de aporte</Button>
            <Button variant="ghost">Ver opciones</Button>
          </div>
        }
      >
        <p className="text-sm text-[var(--color-text-primary)] opacity-70">
          Mantén tu aporte al día para que el impacto continúe sin pausas.
        </p>
      </Card>
    </main>
  );
}
