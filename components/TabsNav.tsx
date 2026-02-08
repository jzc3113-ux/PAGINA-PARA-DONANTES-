"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Inicio", href: "/inicio" },
  { label: "Mi membresía", href: "/mi-membresia" },
  { label: "Perfil", href: "/perfil" },
];

const baseTabStyles =
  "rounded-full px-4 py-2 text-sm font-semibold transition";

export default function TabsNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-3">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`${baseTabStyles} ${
              isActive
                ? "text-[var(--color-primary)]"
                : "text-[var(--color-text-primary)] opacity-60 hover:opacity-100"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
