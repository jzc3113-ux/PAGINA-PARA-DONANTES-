"use client";

import { useRouter } from "next/navigation";
import Button from "../components/Button";
import Card from "../components/Card";
import { roleOptions } from "../data/mock";
import { useRole } from "../src/lib/useRole";

export default function RootPage() {
  const router = useRouter();
  const { roleId, saveRole } = useRole();

  return (
    <main className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-3xl space-y-6 rounded-3xl border border-[var(--color-surface)] bg-[var(--color-background)] p-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold">Bienvenido a Crea+</h1>
          <p className="text-sm text-[var(--color-text-primary)] opacity-70">
            Elige cómo formas parte de la comunidad.
          </p>
          <p className="text-xs text-[var(--color-text-primary)] opacity-70">
            Este rol solo personaliza tu experiencia.
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
                className="text-left"
              >
                <Card
                  className={`h-full border ${
                    isSelected
                      ? "border-[var(--color-primary)]"
                      : "border-transparent"
                  }`}
                >
                  <span className="text-sm font-semibold">{role.label}</span>
                </Card>
              </button>
            );
          })}
        </div>

        <Button
          type="button"
          fullWidth
          onClick={() => router.push("/inicio")}
        >
          Entrar al portal
        </Button>
      </div>
    </main>
  );
}
