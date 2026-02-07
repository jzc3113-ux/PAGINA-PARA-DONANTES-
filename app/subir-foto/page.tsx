"use client";

// Subida de foto con preview local sin backend.
import { useEffect, useState } from "react";
import TopNav from "../components/TopNav";

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
      <header className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
        <h1 className="text-3xl font-semibold text-white">Subir Foto</h1>
        <p className="mt-2 text-sm text-slate-400">
          Adjunta evidencia de tus actividades (solo preview local).
        </p>
        <div className="mt-6">
          <TopNav />
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
          <label className="text-sm text-slate-300">
            Selecciona una imagen
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-3 w-full rounded-xl border border-dashed border-slate-700 bg-slate-950 px-4 py-6 text-sm text-slate-300 file:mr-4 file:rounded-full file:border-0 file:bg-emerald-400 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-slate-900 hover:file:bg-emerald-300"
            />
          </label>
          <p className="mt-4 text-xs text-slate-500">
            No se sube ninguna foto, solo se muestra una vista previa local.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <p className="text-sm text-slate-300">Vista previa</p>
          <div className="mt-4 flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Vista previa seleccionada"
                className="max-h-[200px] rounded-xl object-cover"
              />
            ) : (
              <p className="text-xs text-slate-500">
                Aún no has seleccionado una imagen.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
