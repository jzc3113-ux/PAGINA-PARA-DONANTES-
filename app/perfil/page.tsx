"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../../components/Button";
import Card from "../../components/Card";
import InputField from "../../components/InputField";
import SelectField from "../../components/SelectField";
import { demoUser } from "../../src/lib/demoData";

export default function PerfilPage() {
  const [nombre, setNombre] = useState(demoUser.nombre);
  const [email, setEmail] = useState(demoUser.email);
  const [tipo, setTipo] = useState(demoUser.tipo);
  const [mensaje, setMensaje] = useState("");

  const handleSave = () => {
    setMensaje("Tus cambios quedaron guardados en esta demo.");
    window.setTimeout(() => setMensaje(""), 2500);
  };

  return (
    <main className="space-y-8">
      <header className="rounded-3xl border border-[var(--color-surface)] bg-[var(--color-background)] p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Perfil
            </p>
            <h1 className="mt-3 text-3xl font-semibold">Tus datos</h1>
            <p className="mt-2 text-sm text-[var(--color-text-primary)] opacity-70">
              Actualiza tu información para seguir en contacto.
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

      <section className="grid gap-6 lg:grid-cols-[220px_1fr]">
        <Card className="flex flex-col items-center gap-4 text-center">
          <img
            src={demoUser.foto}
            alt={`Foto de ${demoUser.nombre}`}
            className="h-28 w-28 rounded-full object-cover"
          />
          <div>
            <p className="text-base font-semibold">{demoUser.nombre}</p>
            <p className="text-xs text-[var(--color-text-primary)] opacity-70">
              {demoUser.tipo}
            </p>
          </div>
        </Card>

        <form
          className="space-y-5 rounded-3xl border border-[var(--color-surface)] bg-[var(--color-background)] p-8"
          onSubmit={(event) => {
            event.preventDefault();
            handleSave();
          }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <InputField
              label="Nombre completo"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              helperText="Así aparecerás en los reconocimientos internos."
            />
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              helperText="Enviaremos recordatorios importantes aquí."
            />
          </div>

          <SelectField
            label="Tipo de voluntariado"
            value={tipo}
            onChange={(event) => setTipo(event.target.value)}
            helperText="Selecciona la opción que mejor describa tu rol."
          >
            <option>Voluntaria activa</option>
            <option>Donante mensual</option>
            <option>Embajadora comunitaria</option>
          </SelectField>

          <div className="flex flex-wrap items-center gap-4">
            {/* Regla: una sola CTA primaria por pantalla. */}
            <Button type="submit">Guardar cambios</Button>
            <Button variant="secondary" type="button">
              Ver historial
            </Button>
            {mensaje ? (
              <span className="text-sm text-[var(--color-primary)]">
                {mensaje}
              </span>
            ) : null}
          </div>
        </form>
      </section>
    </main>
  );
}
