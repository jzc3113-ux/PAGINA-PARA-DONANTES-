import Link from "next/link";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { demoImpacto } from "../../src/lib/demoData";

export default function ImpactoPage() {
  return (
    <main className="space-y-8">
      <header className="rounded-3xl border border-[var(--color-surface)] bg-[var(--color-background)] p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Impacto
            </p>
            <h1 className="mt-3 text-3xl font-semibold">Tus aportes en acción</h1>
            <p className="mt-2 text-sm text-[var(--color-text-primary)] opacity-70">
              Resumen del impacto generado gracias a tu apoyo constante.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="rounded-full px-4 py-2 text-sm font-semibold hover:bg-[var(--color-surface)]"
          >
            Volver al resumen
          </Link>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {demoImpacto.map((item) => (
          <Card key={item.id} title={item.titulo} description={item.detalle} />
        ))}
      </section>

      <Card
        variant="info"
        title="Impacto del mes"
        description="En septiembre logramos abrir dos nuevos espacios educativos."
        footer={
          <div className="flex flex-wrap items-center gap-3">
            {/* Regla: una sola CTA primaria por pantalla. */}
            <Button>Ver reporte completo</Button>
            <Button variant="ghost">Compartir impacto</Button>
          </div>
        }
      >
        <p className="text-sm text-[var(--color-text-primary)] opacity-70">
          Gracias por sostener las iniciativas que cambian vidas.
        </p>
      </Card>
    </main>
  );
}
