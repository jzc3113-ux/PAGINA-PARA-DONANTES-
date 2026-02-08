import Link from "next/link";
import Card from "../../../components/Card";
import Pill from "../../../components/Pill";
import {
  membershipBadges,
  membershipStatus,
  teamInfo,
} from "../../../data/mock";

const primaryLinkStyles =
  "inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-background)] transition hover:opacity-90";

const statusVariant = {
  activa: "success",
  pausa: "highlight",
  pendiente: "neutral",
} as const;

export default function MembresiaPage() {
  const status = membershipStatus.status;

  return (
    <main className="space-y-8">
      <header className="rounded-3xl border border-[var(--color-surface)] bg-[var(--color-background)] p-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">Tu membresía</h1>
          <p className="text-sm text-[var(--color-text-primary)] opacity-70">
            Ser Amigo Crea+ es acompañar con constancia.
          </p>
          <p className="text-sm text-[var(--color-text-primary)] opacity-70">
            Tu aporte sostiene procesos en el tiempo.
          </p>
        </div>
      </header>

      <Card title="Estado de membresía">
        <div className="flex flex-col gap-4">
          <Pill variant={statusVariant[status]} className="px-4 py-2 text-sm">
            {status === "activa"
              ? "Activa"
              : status === "pausa"
              ? "En pausa"
              : "Pendiente"}
          </Pill>
          <p className="text-sm text-[var(--color-text-primary)] opacity-70">
            {membershipStatus.copy[status]}
          </p>
          <Link href="#medallas" className={primaryLinkStyles}>
            Ver mis reconocimientos
          </Link>
        </div>
      </Card>

      <section id="medallas" className="space-y-4">
        <h2 className="text-xl font-semibold">Medallas</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {membershipBadges.map((badge) => (
            <Card key={badge.id} title={badge.name}>
              <p className="text-sm text-[var(--color-text-primary)] opacity-70">
                {badge.status === "lograda" ? "Lograda" : "En progreso"}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <Card title="Tu equipo">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-[var(--color-text-primary)]">
            {teamInfo.name}
          </p>
          <p className="text-sm text-[var(--color-text-primary)] opacity-70">
            {teamInfo.description}
          </p>
        </div>
      </Card>
    </main>
  );
}
