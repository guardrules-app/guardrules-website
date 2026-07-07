import type { Metadata } from "next";
import { PublicLayout } from "@/components/public/PublicLayout";

export const metadata: Metadata = {
  title: "Contact — GuardRules",
  description: "Contact GuardRules support."
};

export default function ContactPage() {
  return (
    <PublicLayout>
      <section className="hero contact-hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Contact GuardRules.</h2>
            <p className="hero-copy">Need help with GuardRules? Email support and we will get back to you.</p>
          </div>
          <div className="hero-panel contact-hero-card" aria-label="GuardRules contact email">
            <div className="automation-card">
              <div>
                <span className="pricing-badge">Support</span>
                <h3>Email support</h3>
                <p>For support, billing, privacy, or app questions.</p>
              </div>
              <a className="contact-email" href="mailto:support@guardrules.com">
                support@guardrules.com
              </a>
              <a className="button button-primary" href="mailto:support@guardrules.com">
                Email support
              </a>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
