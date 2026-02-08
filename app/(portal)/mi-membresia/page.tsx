"use client";

import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Pill from "../../../components/Pill";
import { membershipBadges, membershipStatus } from "../../../data/mock";

export default function MiMembresiaPage() {
  return (
    <main className="space-y-8">
      <header className="rounded-3xl border border-[var(--color-surface)] bg-[var(--color-background)] p-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">
            La continuidad también transforma.
          </h1>
          <p className="text-sm text-[var(--color-text-primary)] opacity-70">
            Tu acompañamiento sostiene aprendizajes que siguen creciendo.
          </p>
        </div>
      </header>

      <Card title="Estado de membresía">
        <div className="space-y-3">
          <Pill variant="success" className="px-4 py-2 text-sm">
            {membershipStatus.label}
          </Pill>
          <p className="text-sm text-[var(--color-text-primary)] opacity-70">
            {membershipStatus.message}
          </p>
          <p className="text-sm text-[var(--color-text-primary)] opacity-70">
            Impacto que sostienes: acompañamiento que continúa.
          </p>
        </div>
      </Card>

      <section id="medallas" className="space-y-4">
        <h2 className="text-xl font-semibold">Medallas</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {membershipBadges.map((badge) => (
            <Card key={badge.id}>
              <Pill
                variant={
                  badge.status === "lograda"
                    ? "success"
                    : badge.status === "en progreso"
                    ? "warning"
                    : "neutral"
                }
                className="px-3 py-1 text-xs"
              >
                {badge.label}
              </Pill>
            </Card>
          ))}
        </div>
        <p className="text-sm text-[var(--color-text-primary)] opacity-70">
          Tu recorrido recién comienza. Cada paso cuenta.
        </p>
      </section>

      <div className="flex">
        <Button
          type="button"
          onClick={() =>
            document
              .getElementById("medallas")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Ver mis reconocimientos
        </Button>
      </div>
    </main>
  );
}
