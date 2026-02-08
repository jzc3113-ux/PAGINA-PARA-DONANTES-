import Link from "next/link";
import Card from "../components/Card";

const primaryLinkStyles =
  "inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-background)] transition hover:opacity-90";

const ghostLinkStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition hover:bg-[var(--color-surface)]";

export default function HomePage() {
  return (
    <main className="space-y-8">
      <Card
        title="Página para Donantes"
        description="Demo visual del portal de Amigos Crea+ con datos mock."
        footer={
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/login" className={primaryLinkStyles}>
              Ir al login
            </Link>
            <Link href="/dashboard" className={ghostLinkStyles}>
              Ver dashboard
            </Link>
          </div>
        }
      >
        <p className="text-sm text-[var(--color-text-primary)] opacity-70">
          Explora el resumen, el historial de aportes y el impacto generado.
        </p>
      </Card>
    </main>
  );
}
