"use client";

import { useRouter } from "next/navigation";
import Button from "../../components/Button";
import Pill from "../../components/Pill";
import { roleOptions } from "../../data/mock";
import { useRole } from "../../src/lib/useRole";

export default function LoginPage() {
  const router = useRouter();
  const { roleId, saveRole } = useRole();

  return (
    <main className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-2xl space-y-6 rounded-3xl border border-[var(--color-surface)] bg-[var(--color-background)] p-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold">Bienvenido a Crea+</h1>
          <p className="text-sm text-[var(--color-text-primary)] opacity-70">
            Elige cómo formas parte de la comunidad.
          </p>
          <p className="text-xs text-[var(--color-text-primary)] opacity-70">
            Puedes cambiar este rol más adelante.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {roleOptions.map((role) => {
            const isSelected = roleId === role.id;

            return (
              <button
                key={role.id}
                type="button"
                onClick={() => saveRole(role.id)}
                className={`rounded-2xl border px-4 py-5 text-left text-sm font-semibold transition ${
                  isSelected
                    ? "border-[var(--color-primary)] bg-[var(--color-surface)]"
                    : "border-[var(--color-surface)] hover:bg-[var(--color-surface)]"
                }`}
              >
                {role.label}
              </button>
            );
          })}
        </div>

        <Pill variant="highlight">Este rol solo personaliza tu experiencia</Pill>

        <Button
          type="button"
          fullWidth
          onClick={() => router.push("/home")}
        >
          Entrar al portal
        </Button>
      </div>
    </main>
  );
}
