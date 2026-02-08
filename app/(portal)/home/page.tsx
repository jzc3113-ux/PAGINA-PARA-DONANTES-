import Link from "next/link";
import Pill from "../../../components/Pill";

const primaryLinkStyles =
  "inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-background)] transition hover:opacity-90";

export default function HomePage() {
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

      <section className="rounded-3xl border border-[var(--color-surface)] bg-[var(--color-surface)] p-8">
        <div className="space-y-4">
          <p className="text-sm text-[var(--color-text-primary)] opacity-70">
            Aquí podrás ver tu recorrido, tu impacto y tus reconocimientos.
          </p>
          <Link href="/dashboard" className={primaryLinkStyles}>
            Ir a mi espacio
          </Link>
        </div>
      </section>
    </main>
  );
}
