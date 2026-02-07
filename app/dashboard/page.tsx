// Dashboard principal con estadísticas y accesos rápidos.
import { demoStats, demoUser } from "../../src/lib/demoData";
import NavCard from "../components/NavCard";
import StatCard from "../components/StatCard";
import TopNav from "../components/TopNav";

export default function DashboardPage() {
  return (
    <main className="space-y-8">
      <header className="flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
            Recaudación 2026
          </p>
          <h1 className="text-3xl font-semibold text-white">
            Hola, {demoUser.nombre}
          </h1>
          <p className="text-sm text-slate-400">{demoUser.tipo}</p>
        </div>
        <TopNav />
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <StatCard
          label="Horas acumuladas"
          value={`${demoStats.horasAcumuladas} horas`}
        />
        <StatCard
          label="Voluntariados validados"
          value={`${demoStats.voluntariadosValidados} actividades`}
        />
        <StatCard label="Próxima medalla" value={demoStats.proximaMedalla} />
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <NavCard
          title="Mi Perfil"
          description="Actualiza tus datos personales y tu foto."
          href="/perfil"
        />
        <NavCard
          title="Mis Medallas"
          description="Revisa el progreso de tus logros solidarios."
          href="/medallas"
        />
        <NavCard
          title="Subir Foto"
          description="Adjunta evidencia de tus actividades."
          href="/subir-foto"
        />
        <NavCard
          title="Historial"
          description="Pronto podrás ver tus actividades registradas."
          disabled
        />
      </section>
    </main>
  );
}
