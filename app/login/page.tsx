"use client";

// Página de login fake con redirección al dashboard.
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl">
        <h1 className="text-3xl font-semibold text-white">Ingresar</h1>
        <p className="mt-2 text-sm text-slate-400">
          Acceso rápido para la demo de donantes.
        </p>

        <div className="mt-8 space-y-4">
          <label className="block text-sm text-slate-300">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="tucorreo@email.com"
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
            />
          </label>
          <label className="block text-sm text-slate-300">
            Contraseña
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="********"
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
            />
          </label>
        </div>

        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="mt-6 w-full rounded-full bg-emerald-400 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300"
        >
          Ingresar
        </button>

        <p className="mt-6 text-center text-xs text-slate-500">
          Este login es solo una simulación para el MVP.
        </p>
      </div>
    </main>
  );
}
