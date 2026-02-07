"use client";

// Perfil editable con estado local para la demo.
import { useState } from "react";
import { demoUser } from "../../src/lib/demoData";
import TopNav from "../components/TopNav";

export default function PerfilPage() {
  const [nombre, setNombre] = useState(demoUser.nombre);
  const [email, setEmail] = useState(demoUser.email);
  const [tipo, setTipo] = useState(demoUser.tipo);
  const [mensaje, setMensaje] = useState("");

  const handleSave = () => {
    setMensaje("Perfil actualizado localmente.");
    window.setTimeout(() => setMensaje(""), 2500);
  };

  return (
    <main className="space-y-8">
      <header className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
        <h1 className="text-3xl font-semibold text-white">Mi Perfil</h1>
        <p className="mt-2 text-sm text-slate-400">
          Gestiona tus datos personales para la recaudación 2026.
        </p>
        <div className="mt-6">
          <TopNav />
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[220px_1fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-center">
          <img
            src={demoUser.foto}
            alt={`Foto de ${demoUser.nombre}`}
            className="mx-auto h-28 w-28 rounded-full border border-slate-700 object-cover"
          />
          <p className="mt-4 text-base font-semibold text-white">
            {demoUser.nombre}
          </p>
          <p className="text-xs text-slate-400">{demoUser.tipo}</p>
        </div>

        <form
          className="space-y-5 rounded-3xl border border-slate-800 bg-slate-900/60 p-8"
          onSubmit={(event) => {
            event.preventDefault();
            handleSave();
          }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm text-slate-300">
              Nombre completo
              <input
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
              />
            </label>
            <label className="text-sm text-slate-300">
              Email
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
              />
            </label>
          </div>
          <label className="text-sm text-slate-300">
            Tipo de voluntariado
            <input
              value={tipo}
              onChange={(event) => setTipo(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
            />
          </label>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300"
            >
              Guardar cambios
            </button>
            {mensaje ? (
              <span className="text-sm text-emerald-300">{mensaje}</span>
            ) : null}
          </div>
        </form>
      </section>
    </main>
  );
}
