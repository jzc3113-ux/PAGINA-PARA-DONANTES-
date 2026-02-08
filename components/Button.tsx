import type { ButtonHTMLAttributes } from "react";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantStyles = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-background)] hover:opacity-90 active:scale-[0.98] focus-visible:outline-[var(--color-primary)]",
  secondary:
    "border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:opacity-90 active:scale-[0.98] focus-visible:outline-[var(--color-primary)]",
  ghost:
    "text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] active:scale-[0.98] focus-visible:outline-[var(--color-primary)]",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variantStyles;
  isLoading?: boolean;
  fullWidth?: boolean;
};

export default function Button({
  variant = "primary",
  isLoading = false,
  fullWidth = false,
  type = "button",
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${
        fullWidth ? "w-full" : ""
      } ${isDisabled ? "cursor-not-allowed opacity-60" : ""} ${
        className ?? ""
      }`}
      disabled={isDisabled}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          Cargando
        </span>
      ) : (
        children
      )}
    </button>
  );
}
