"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../../components/Button";
import InputField from "../../components/InputField";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-md rounded-3xl border border-[var(--color-surface)] bg-[var(--color-background)] p-8">
        <h1 className="text-3xl font-semibold">Ingresar</h1>
        <p className="mt-2 text-sm text-[var(--color-text-primary)] opacity-70">
          Acceso rápido para la demo de donantes.
        </p>

        <div className="mt-8 space-y-4">
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="tucorreo@email.com"
          />
          <InputField
            label="Contraseña"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="********"
          />
        </div>

        <Button
          type="button"
          fullWidth
          className="mt-6"
          onClick={() => router.push("/dashboard")}
        >
          Ingresar
        </Button>

        <p className="mt-6 text-center text-xs text-[var(--color-text-primary)] opacity-60">
          Este login es solo una simulación para el MVP.
        </p>
      </div>
    </main>
  );
}
