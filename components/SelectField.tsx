import type { SelectHTMLAttributes } from "react";

const baseSelectStyles =
  "mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none transition";

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  helperText?: string;
  errorMessage?: string;
};

export default function SelectField({
  label,
  helperText,
  errorMessage,
  className,
  disabled,
  children,
  ...props
}: SelectFieldProps) {
  const hasError = Boolean(errorMessage);

  return (
    <label className="block text-sm text-[var(--color-text-primary)]">
      {label}
      <select
        className={`${baseSelectStyles} ${
          hasError
            ? "border-[var(--color-accent)]"
            : "border-[var(--color-surface)] focus:border-[var(--color-primary)]"
        } ${
          disabled
            ? "cursor-not-allowed bg-[var(--color-surface)]"
            : "bg-[var(--color-background)]"
        } ${
          className ?? ""
        }`}
        disabled={disabled}
        {...props}
      >
        {children}
      </select>
      {helperText && !hasError ? (
        <span className="mt-2 block text-xs text-[var(--color-text-primary)] opacity-70">
          {helperText}
        </span>
      ) : null}
      {hasError ? (
        <span className="mt-2 block text-xs text-[var(--color-accent)]">
          {errorMessage}
        </span>
      ) : null}
    </label>
  );
}
