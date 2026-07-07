import Link from "next/link";
import { heroBullets, installHref } from "@/constants/siteContent";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Inventory-based Meta ad protection</span>
          <h1>Protect your Shopify ad spend with inventory-based guard rules.</h1>
          <p className="hero-copy">
            GuardRules monitors your Shopify inventory and helps automate Meta ad actions, so you do not waste budget
            promoting products that cannot sell.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href={installHref}>
              Install GuardRules
            </Link>
            <Link className="button button-secondary" href="#how-it-works">
              See how it works
            </Link>
          </div>
          <ul className="hero-bullets">
            {heroBullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
        <div className="hero-panel" aria-label="GuardRules automation example">
          <div className="automation-card">
            <div className="automation-row">
              <div>
                <div className="automation-label">Inventory condition</div>
                <div className="automation-value">Stock is less than or equal to 0</div>
              </div>
              <span className="status-pill">Matched</span>
            </div>
            <div className="automation-row">
              <div>
                <div className="automation-label">Protected product</div>
                <div className="automation-value">Core Hoodie</div>
              </div>
              <span className="status-pill">Shopify</span>
            </div>
            <div className="automation-row">
              <div>
                <div className="automation-label">Meta action</div>
                <div className="automation-value">Pause campaign</div>
              </div>
              <span className="status-pill">Done</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
