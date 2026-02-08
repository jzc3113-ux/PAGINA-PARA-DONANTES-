type PillVariant = "success" | "warning" | "neutral";

const variantStyles: Record<PillVariant, string> = {
  success: "bg-[var(--color-success)] text-[var(--color-text-primary)]",
  warning: "bg-[var(--color-highlight)] text-[var(--color-text-primary)]",
  neutral: "bg-[var(--color-surface)] text-[var(--color-text-primary)]",
};

type PillProps = {
  variant?: PillVariant;
  children: string;
  className?: string;
};

export default function Pill({
  variant = "neutral",
  children,
  className,
}: PillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        variantStyles[variant]
      } ${className ?? ""}`}
    >
      {children}
    </span>
  );
}

export type { PillVariant };
