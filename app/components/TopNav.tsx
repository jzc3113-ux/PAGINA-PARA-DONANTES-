// Navegación superior para las rutas principales del MVP.
import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/perfil", label: "Mi Perfil" },
  { href: "/medallas", label: "Mis Medallas" },
  { href: "/subir-foto", label: "Subir Foto" },
];

export default function TopNav() {
  return (
    <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-slate-500 hover:text-white"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
