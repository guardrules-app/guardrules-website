import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { footerLinks } from "@/constants/siteContent";

export function PublicFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link className="brand" href="/" aria-label="GuardRules home">
            <BrandLogo variant="footer" />
          </Link>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
