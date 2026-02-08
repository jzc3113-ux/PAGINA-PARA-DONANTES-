"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Inicio", href: "/dashboard" },
  { label: "Mi membresía", href: "/membresia" },
  { label: "Perfil", href: "/perfil" },
];

const baseTabStyles =
  "rounded-full px-4 py-2 text-sm font-semibold transition";

export default function PortalNavbar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-3">
      {tabs.map((tab) => {
        const isActive =
          pathname === tab.href ||
          (tab.href === "/dashboard" && pathname === "/home");

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`${baseTabStyles} ${
              isActive
                ? "bg-[var(--color-surface)]"
                : "hover:bg-[var(--color-surface)]"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
