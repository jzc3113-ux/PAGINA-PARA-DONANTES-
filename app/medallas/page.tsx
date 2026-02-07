// Grid de medallas con estado bloqueado/desbloqueado.
import { demoMedallas, demoUser } from "../../src/lib/demoData";
import TopNav from "../components/TopNav";

export default function MedallasPage() {
  return (
    <main className="space-y-8">
      <header className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
        <h1 className="text-3xl font-semibold text-white">Mis Medallas</h1>
        <p className="mt-2 text-sm text-slate-400">
          Progreso de {demoUser.nombre} en la recaudación 2026.
        </p>
        <div className="mt-6">
          <TopNav />
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {demoMedallas.map((medalla) => {
          const unlocked = medalla.estado === "unlocked";
          return (
            <div
              key={medalla.nombre}
              className={`rounded-2xl border p-5 ${
                unlocked
                  ? "border-emerald-400/40 bg-emerald-400/10"
                  : "border-slate-800 bg-slate-900/60 text-slate-400"
              }`}
            >
              <div className="text-3xl">{medalla.icono}</div>
              <p className="mt-3 text-lg font-semibold text-white">
                {medalla.nombre}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                {unlocked ? "Desbloqueada" : "Bloqueada"}
              </p>
            </div>
          );
        })}
      </section>
    </main>
  );
}
