// Layout base con estilos globales y tipografía del MVP.
import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Página para Donantes",
  description: "Portal de donaciones",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
