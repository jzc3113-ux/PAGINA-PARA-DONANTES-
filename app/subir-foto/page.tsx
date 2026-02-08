"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../../components/Button";
import Card from "../../components/Card";

export default function SubirFotoPage() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  return (
    <main className="space-y-8">
      <header className="rounded-3xl border border-[var(--color-surface)] bg-[var(--color-background)] p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Evidencias
            </p>
            <h1 className="mt-3 text-3xl font-semibold">Subir foto</h1>
            <p className="mt-2 text-sm text-[var(--color-text-primary)] opacity-70">
              Adjunta evidencia de tus actividades (solo preview local).
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

      <section className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <Card title="Selecciona una imagen">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-4 w-full rounded-2xl border border-dashed border-[var(--color-surface)] bg-[var(--color-background)] px-4 py-6 text-sm text-[var(--color-text-primary)] file:mr-4 file:rounded-full file:border-0 file:bg-[var(--color-primary)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[var(--color-background)] hover:file:opacity-90"
          />
          <p className="mt-4 text-xs text-[var(--color-text-primary)] opacity-60">
            No se sube ninguna foto, solo se muestra una vista previa local.
          </p>
          <div className="mt-6">
            {/* Regla: una sola CTA primaria por pantalla. */}
            <Button variant="secondary">Guardar evidencia</Button>
          </div>
        </Card>

        <Card title="Vista previa">
          <div className="mt-4 flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-[var(--color-surface)] bg-[var(--color-background)]">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Vista previa seleccionada"
                className="max-h-[200px] rounded-xl object-cover"
              />
            ) : (
              <p className="text-xs text-[var(--color-text-primary)] opacity-60">
                Aún no has seleccionado una imagen.
              </p>
            )}
          </div>
        </Card>
      </section>
    </main>
  );
}
