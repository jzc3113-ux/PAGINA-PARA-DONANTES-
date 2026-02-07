// Card de navegación usada en el dashboard.
import Link from "next/link";

type NavCardProps = {
  title: string;
  description: string;
  href?: string;
  disabled?: boolean;
};

export default function NavCard({
  title,
  description,
  href,
  disabled = false,
}: NavCardProps) {
  const cardClasses = `rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition ${
    disabled ? "opacity-60" : "hover:border-slate-600 hover:bg-slate-900"
  }`;

  if (disabled || !href) {
    return (
      <div className={cardClasses}>
        <p className="text-lg font-semibold text-white">{title}</p>
        <p className="mt-2 text-sm text-slate-400">{description}</p>
        <p className="mt-4 text-xs uppercase tracking-wide text-slate-500">
          Próximamente
        </p>
      </div>
    );
  }

  return (
    <Link href={href} className={cardClasses}>
      <p className="text-lg font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-slate-400">{description}</p>
      <span className="mt-4 inline-flex items-center text-xs font-semibold text-emerald-300">
        Ver detalle →
      </span>
    </Link>
  );
}
