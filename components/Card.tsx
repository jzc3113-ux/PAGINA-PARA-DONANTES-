import type { ReactNode } from "react";

const variantStyles = {
  default: "border border-[var(--color-surface)] bg-[var(--color-surface)]",
  info: "border border-[var(--color-surface)] bg-[var(--color-surface)] border-l-4 border-l-[var(--color-highlight)]",
};

type CardProps = {
  title?: string;
  description?: string;
  footer?: ReactNode;
  variant?: keyof typeof variantStyles;
  className?: string;
  children?: ReactNode;
};

export default function Card({
  title,
  description,
  footer,
  variant = "default",
  className,
  children,
}: CardProps) {
  return (
    <div
      className={`rounded-3xl p-6 ${variantStyles[variant]} ${
        className ?? ""
      }`}
    >
      {title ? (
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            {title}
          </h3>
          {description ? (
            <p className="text-sm text-[var(--color-text-primary)] opacity-70">
              {description}
            </p>
          ) : null}
        </div>
      ) : null}
      {children ? <div className={title ? "mt-4" : ""}>{children}</div> : null}
      {footer ? <div className="mt-6">{footer}</div> : null}
    </div>
  );
}
