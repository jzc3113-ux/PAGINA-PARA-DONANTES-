import Link from "next/link";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Pill from "../../components/Pill";
import Table from "../../components/Table";
import { demoAportes } from "../../src/lib/demoData";

const columns = [
  { key: "fecha", label: "Fecha" },
  { key: "aporte", label: "Monto" },
  { key: "metodo", label: "Método" },
  {
    key: "status",
    label: "Estado",
    className: "text-right",
  },
];

export default function AportesPage() {
  return (
    <main className="space-y-8">
      <header className="rounded-3xl border border-[var(--color-surface)] bg-[var(--color-background)] p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Historial de aportes
            </p>
            <h1 className="mt-3 text-3xl font-semibold">Tu aporte suma</h1>
            <p className="mt-2 text-sm text-[var(--color-text-primary)] opacity-70">
              Aquí puedes revisar cada aporte y su estado actual.
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

      <Alert
        title="¿Hubo un problema con tu pago?"
        description="Si tu aporte aparece en revisión, avísanos y lo resolvemos contigo."
        actionLabel="Contactar soporte"
        actionHref="/perfil"
      />

      <Card title="Últimos aportes" description="Datos mock para el MVP.">
        <Table
          columns={columns}
          rows={demoAportes.map((aporte) => ({
            id: aporte.id,
            fecha: aporte.fecha,
            aporte: aporte.aporte,
            metodo: aporte.metodo,
            status: aporte.status ? (
              <Pill variant={aporte.status.variant}>
                {aporte.status.label}
              </Pill>
            ) : null,
          }))}
        />
      </Card>

      <div className="flex flex-wrap items-center gap-3">
        {/* Regla: una sola CTA primaria por pantalla. */}
        <Button>Actualizar método de aporte</Button>
        <Button variant="secondary">Descargar comprobantes</Button>
      </div>
    </main>
  );
}
