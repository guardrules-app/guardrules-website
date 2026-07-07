import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { installHref, navLinks } from "@/constants/siteContent";

export function PublicHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="GuardRules home">
            <BrandLogo />
          </Link>
          <nav className="nav-links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link className="button button-primary" href={installHref}>
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
              <Link className="button button-primary" href={installHref}>
                Install App
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
