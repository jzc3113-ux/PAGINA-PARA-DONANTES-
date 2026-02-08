import type { ReactNode } from "react";
import PortalNavbar from "../../components/PortalNavbar";

type PortalLayoutProps = {
  children: ReactNode;
};

export default function PortalLayout({ children }: PortalLayoutProps) {
  return (
    <div className="space-y-6">
      <PortalNavbar />
      {children}
    </div>
  );
}
