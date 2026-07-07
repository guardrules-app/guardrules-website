import { PublicFooter } from "./PublicFooter";
import { PublicHeader } from "./PublicHeader";

type PublicLayoutProps = {
  children: React.ReactNode;
};

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="page-shell">
      <PublicHeader />
      <main>{children}</main>
      <PublicFooter />
    </div>
  );
}
