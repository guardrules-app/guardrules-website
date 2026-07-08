import type { Metadata } from "next";
import { PublicLayout } from "@/components/public/PublicLayout";

export const metadata: Metadata = {
  title: "Terms of Service — GuardRules",
  description:
    "Review the terms that apply when using the GuardRules Shopify app and public website.",
};

export default function TermsOfServicePage() {
  return (
    <PublicLayout>
      <section className="hero">
        <div className="container policy">
          <span className="badge">Last updated: July 7, 2026</span>
          <h1>Terms of Service</h1>
          <p className="hero-copy">
            These Terms of Service explain the rules for using the GuardRules
            Shopify app and public website. By using GuardRules, you agree to
            these terms.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container policy">
          <PolicySection title="Use of GuardRules">
            <p>
              GuardRules helps Shopify merchants create inventory-based guard
              rules for Meta ad actions. You are responsible for configuring
              your store, products, ad connections, and automation rules
              correctly.
            </p>
          </PolicySection>

          <PolicySection title="Shopify and Meta accounts">
            <p>
              You must have the required permissions for any Shopify store or
              Meta advertising account you connect to GuardRules. GuardRules
              only performs actions based on the rules and integrations you
              choose to enable.
            </p>
          </PolicySection>

          <PolicySection title="Billing and subscriptions">
            <p>
              Paid plans, if selected, are billed according to the plan shown at
              the time of purchase. Shopify or another billing provider may
              process billing and subscription management.
            </p>
          </PolicySection>

          <PolicySection title="Acceptable use">
            <p>
              You agree not to misuse GuardRules, interfere with the service,
              attempt unauthorized access, or use the app in a way that violates
              applicable laws, Shopify policies, or Meta policies.
            </p>
          </PolicySection>

          <PolicySection title="Service availability">
            <p>
              We work to keep GuardRules reliable, but we do not guarantee
              uninterrupted service. Inventory data, third-party APIs, ad
              platform behavior, and network conditions may affect automation
              timing.
            </p>
          </PolicySection>

          <PolicySection title="No guarantee of ad results">
            <p>
              GuardRules is designed to help reduce wasted ad spend when
              inventory changes. We do not guarantee revenue, sales, advertising
              performance, or specific business outcomes.
            </p>
          </PolicySection>

          <PolicySection title="Changes to these terms">
            <p>
              We may update these Terms of Service from time to time. The
              updated version will be posted on this page.
            </p>
          </PolicySection>

          <PolicySection title="Contact">
            <p>
              For questions about these terms, contact us at:{" "}
              <a href="mailto:support@guardrules.com">support@guardrules.com</a>
            </p>
          </PolicySection>
        </div>
      </section>
    </PublicLayout>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="policy-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
