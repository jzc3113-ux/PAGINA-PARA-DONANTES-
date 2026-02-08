import type { InputHTMLAttributes } from "react";

const baseInputStyles =
  "mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none transition";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helperText?: string;
  errorMessage?: string;
};

export default function InputField({
  label,
  helperText,
  errorMessage,
  className,
  disabled,
  ...props
}: InputFieldProps) {
  const hasError = Boolean(errorMessage);

  return (
    <label className="block text-sm text-[var(--color-text-primary)]">
      {label}
      <input
        className={`${baseInputStyles} ${
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
      />
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
