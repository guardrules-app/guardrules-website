import Link from "next/link";
import { footerLinks } from "@/constants/siteContent";
import { siteTheme } from "@/constants/siteTheme";

export function PublicFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link className="brand" href="/" aria-label="GuardRules home">
            <span className="brand-mark" aria-hidden="true">
              GR
            </span>
            <span>{siteTheme.brandName}</span>
          </Link>
          <p className="footer-note">Protect your ad spend when inventory changes.</p>
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
