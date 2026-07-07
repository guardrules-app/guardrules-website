import Link from "next/link";
import { navLinks } from "@/constants/siteContent";
import { siteTheme } from "@/constants/siteTheme";

export function PublicHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="GuardRules home">
            <span className="brand-mark" aria-hidden="true">
              GR
            </span>
            <span>{siteTheme.brandName}</span>
          </Link>
          <nav className="nav-links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link className="button button-primary" href="/#install-store">
              Install App
            </Link>
          </div>
          <details>
            <summary className="mobile-summary">Menu</summary>
            <nav className="mobile-menu" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
              <Link className="button button-primary" href="/#install-store">
                Install App
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
