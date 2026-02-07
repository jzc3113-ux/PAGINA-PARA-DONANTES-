// Landing ligera para dirigir al login del MVP.
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-start gap-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-10">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
          Recaudación 2026
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-white">
          Página para Donantes
        </h1>
      </div>
      <p className="max-w-xl text-base text-slate-300">
        Demo visual del portal de voluntariado con estadísticas, medallas y
        perfil editable. Accede para explorar el dashboard.
      </p>
      <Link
        href="/login"
        className="inline-flex items-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300"
      >
        Ir al login
      </Link>
    </main>
  );
}
