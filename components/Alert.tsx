import Link from "next/link";

const baseStyles =
  "flex flex-col gap-4 rounded-3xl border border-[var(--color-surface)] bg-[var(--color-surface)] p-6 md:flex-row md:items-center md:justify-between";

type AlertProps = {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
};

export default function Alert({
  title,
  description,
  actionLabel,
  actionHref,
}: AlertProps) {
  return (
    <div className={`${baseStyles} border-l-4 border-l-[var(--color-highlight)]`}>
      <div>
        <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
          {title}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-text-primary)] opacity-70">
          {description}
        </p>
      </div>
      {actionLabel && actionHref ? (
        <Link
          href={actionHref}
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[var(--color-text-primary)] transition hover:opacity-80"
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
