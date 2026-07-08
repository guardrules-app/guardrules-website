import Link from "next/link";
import { heroBullets, installHref } from "@/constants/siteContent";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="badge">Protect your advertising revenue</span>
          <h2>Protect your Shopify Ad Spend</h2>
          <p className="hero-copy">
            Automatically pause and resume Meta ads based on inventory, so you
            never waste budget promoting out-of-stock products.
          </p>
          <ul className="hero-bullets">
            {heroBullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          <div className="hero-actions">
            <Link className="button button-primary" href={installHref}>
              Install Guardrules
            </Link>
            <Link className="button button-secondary" href="#how-it-works">
              See how it works
            </Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="GuardRules automation example">
          <div className="automation-card">
            <div className="automation-row">
              <div>
                <div className="automation-label">Inventory condition</div>
                <div className="automation-value">
                  Stock is less than or equal to 0
                </div>
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
