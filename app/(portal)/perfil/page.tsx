"use client";

import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import SelectField from "../../../components/SelectField";
import { profileDefaults, roleOptions } from "../../../data/mock";
import { useRole } from "../../../src/lib/useRole";

export default function PerfilPage() {
  const { roleId, saveRole } = useRole();
  const [nombre, setNombre] = useState(profileDefaults.nombre);
  const [email, setEmail] = useState(profileDefaults.email);
  const [preferencia, setPreferencia] =
    useState(profileDefaults.preferencia);
  const [selectedRole, setSelectedRole] = useState(roleId);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    setSelectedRole(roleId);
  }, [roleId]);

  const handleSave = () => {
    saveRole(selectedRole);
    setMensaje("Cambios guardados en esta demo.");
    window.setTimeout(() => setMensaje(""), 2500);
  };

  return (
    <main className="space-y-8">
      <header className="rounded-3xl border border-[var(--color-surface)] bg-[var(--color-background)] p-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">Tu perfil</h1>
          <p className="text-sm text-[var(--color-text-primary)] opacity-70">
            Queremos comunicarnos contigo de la forma que prefieras.
          </p>
          <p className="text-sm text-[var(--color-text-primary)] opacity-70">
            Usamos esta información solo para mantenerte informado.
          </p>
        </div>
      </header>

      <form
        className="space-y-5 rounded-3xl border border-[var(--color-surface)] bg-[var(--color-background)] p-8"
        onSubmit={(event) => {
          event.preventDefault();
          handleSave();
        }}
      >
        <div className="grid gap-5 md:grid-cols-2">
          <InputField
            label="Nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <SelectField
          label="Preferencia de comunicación"
          value={preferencia}
          onChange={(event) => setPreferencia(event.target.value)}
        >
          <option>WhatsApp</option>
          <option>Email</option>
        </SelectField>

        <SelectField
          label="Rol seleccionado"
          value={selectedRole}
          onChange={(event) => setSelectedRole(event.target.value)}
        >
          {roleOptions.map((role) => (
            <option key={role.id} value={role.id}>
              {role.label}
            </option>
          ))}
        </SelectField>

        <div className="flex flex-wrap items-center gap-4">
          <Button type="submit">Guardar cambios</Button>
          {mensaje ? (
            <span className="text-sm text-[var(--color-primary)]">
              {mensaje}
            </span>
          ) : null}
        </div>
      </form>
    </main>
  );
}
