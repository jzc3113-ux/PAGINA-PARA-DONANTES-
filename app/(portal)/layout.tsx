import type { ReactNode } from "react";
import TabsNav from "../../components/TabsNav";

type PortalLayoutProps = {
  children: ReactNode;
};

export default function PortalLayout({ children }: PortalLayoutProps) {
  return (
    <div className="space-y-6">
      <TabsNav />
      {children}
    </div>
  );
}
