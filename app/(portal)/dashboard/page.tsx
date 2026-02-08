"use client";

import Link from "next/link";
import Card from "../../../components/Card";
import { dashboardCards } from "../../../data/mock";
import { useRole } from "../../../src/lib/useRole";

const primaryLinkStyles =
  "inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-background)] transition hover:opacity-90";

export default function DashboardPage() {
  const { role } = useRole();

  return (
    <main className="space-y-8">
      <header className="rounded-3xl border border-[var(--color-surface)] bg-[var(--color-background)] p-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">Este es tu espacio en Crea+</h1>
          <p className="text-sm text-[var(--color-text-primary)] opacity-70">
            Gracias por acompañar con constancia.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            {role.label}
          </p>
          <p className="text-sm text-[var(--color-text-primary)] opacity-70">
            La transformación ocurre cuando caminamos juntos.
          </p>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {dashboardCards.map((card) => (
          <Card key={card.id} title={card.title} description={card.description} />
        ))}
      </section>

      <section className="rounded-3xl border border-[var(--color-surface)] bg-[var(--color-surface)] p-8">
        <div className="space-y-4">
          <p className="text-sm text-[var(--color-text-primary)] opacity-70">
            Explora el detalle de tu acompañamiento y tus reconocimientos.
          </p>
          <Link href="/membresia" className={primaryLinkStyles}>
            Ver mi membresía
          </Link>
        </div>
      </section>
    </main>
  );
}
