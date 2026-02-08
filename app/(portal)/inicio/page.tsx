"use client";

import { useRouter } from "next/navigation";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Pill from "../../../components/Pill";
import { dashboardHighlights, dashboardSummary } from "../../../data/mock";
import { useRole } from "../../../src/lib/useRole";

export default function InicioPage() {
  const router = useRouter();
  const { role } = useRole();

  return (
    <main className="space-y-8">
      <header className="rounded-3xl border border-[var(--color-surface)] bg-[var(--color-background)] p-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">
            Gracias por ser parte de Amigos Crea+ 💗
          </h1>
          <p className="text-sm text-[var(--color-text-primary)] opacity-70">
            Tu presencia sostiene procesos educativos que transforman.
          </p>
          <Pill variant="success">Membresía activa</Pill>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {dashboardSummary.map((card) => (
          <Card key={card.id} title={card.title}>
            <div className="space-y-2">
              <p className="text-lg font-semibold">{card.value}</p>
              {card.helper ? (
                <p className="text-sm text-[var(--color-text-primary)] opacity-60">
                  {card.helper}
                </p>
              ) : null}
            </div>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">
            Este es tu espacio en Crea+
          </h2>
          <p className="text-sm text-[var(--color-text-primary)] opacity-70">
            Tu rol actual: <span className="font-semibold">{role.label}</span>
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {dashboardHighlights.map((highlight) => (
            <Card key={highlight.id} title={highlight.title}>
              <p className="text-sm text-[var(--color-text-primary)] opacity-70">
                {highlight.id === "rol"
                  ? `${role.label}. ${highlight.description}`
                  : highlight.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <div className="flex">
        <Button type="button" onClick={() => router.push("/mi-membresia")}>
          Ver mi membresía
        </Button>
      </div>
    </main>
  );
}
