import Link from "next/link";
import Card from "../../components/Card";
import Pill from "../../components/Pill";
import { demoMedallas, demoUser } from "../../src/lib/demoData";

export default function MedallasPage() {
  return (
    <main className="space-y-8">
      <header className="rounded-3xl border border-[var(--color-surface)] bg-[var(--color-background)] p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Medallas
            </p>
            <h1 className="mt-3 text-3xl font-semibold">Mis logros</h1>
            <p className="mt-2 text-sm text-[var(--color-text-primary)] opacity-70">
              Progreso de {demoUser.nombre} en la recaudación 2026.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="rounded-full px-4 py-2 text-sm font-semibold hover:bg-[var(--color-surface)]"
          >
            Volver al resumen
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {demoMedallas.map((medalla) => {
          const unlocked = medalla.estado === "unlocked";
          return (
            <Card
              key={medalla.nombre}
              className={unlocked ? "border-l-4 border-l-[var(--color-success)]" : ""}
            >
              <div className="text-3xl">{medalla.icono}</div>
              <p className="mt-3 text-lg font-semibold">{medalla.nombre}</p>
              <div className="mt-2">
                <Pill variant={unlocked ? "success" : "neutral"}>
                  {unlocked ? "Desbloqueada" : "En progreso"}
                </Pill>
              </div>
            </Card>
          );
        })}
      </section>
    </main>
  );
}
