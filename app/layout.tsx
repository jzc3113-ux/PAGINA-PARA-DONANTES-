import type { ReactNode } from "react";

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
      <body>{children}</body>
    </html>
  );
}
