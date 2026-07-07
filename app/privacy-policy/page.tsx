import type { Metadata } from "next";
import { PublicLayout } from "@/components/public/PublicLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — GuardRules",
  description: "Learn how GuardRules collects, uses, and protects merchant data."
};

export default function PrivacyPolicyPage() {
  return (
    <PublicLayout>
      <section className="hero">
        <div className="container policy">
          <span className="eyebrow">Last updated: July 7, 2026</span>
          <h1>Privacy Policy</h1>
          <p className="hero-copy">
            GuardRules respects your privacy. This Privacy Policy explains how we collect, use, store, and protect
            information when you use the GuardRules Shopify app and public website.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container policy">
          <PolicySection title="Information we collect">
            <ul>
              <li>Shopify store information such as store name, domain, email, and basic merchant details.</li>
              <li>Product and inventory information needed to create and run guard rules.</li>
              <li>Guard rule configuration created by the merchant.</li>
              <li>Meta advertising connection information required to perform selected actions.</li>
              <li>Usage and activity logs such as rule triggers, action status, and app events.</li>
              <li>Billing and subscription information handled through the billing provider.</li>
              <li>Website usage data such as browser/device information and basic analytics if analytics are enabled.</li>
            </ul>
          </PolicySection>

          <PolicySection title="How we use information">
            <ul>
              <li>To provide and operate GuardRules.</li>
              <li>To monitor inventory conditions.</li>
              <li>To pause, resume, or notify based on merchant-created rules.</li>
              <li>To display products, rules, and automation history.</li>
              <li>To provide support.</li>
              <li>To manage billing and subscriptions.</li>
              <li>To improve reliability, security, and user experience.</li>
            </ul>
          </PolicySection>

          <PolicySection title="Shopify and Meta data">
            <p>
              GuardRules uses Shopify data only to provide app functionality. If the merchant connects Meta, GuardRules
              uses Meta-related data only to perform the actions selected by the merchant, such as pausing or resuming
              campaigns, ad sets, or ads.
            </p>
          </PolicySection>

          <PolicySection title="Data sharing">
            <p>
              We do not sell merchant data. We may share limited data with service providers needed to operate the app,
              such as hosting, database, analytics, billing, Shopify, and Meta integrations.
            </p>
          </PolicySection>

          <PolicySection title="Data storage and security">
            <p>
              We use reasonable technical and organizational measures to protect data. No system is 100% secure, but we
              work to keep merchant data safe.
            </p>
          </PolicySection>

          <PolicySection title="Data retention">
            <p>
              We retain data while the merchant uses GuardRules and as needed for legal, billing, security, or
              operational purposes. Merchants can request deletion.
            </p>
          </PolicySection>

          <PolicySection title="Merchant choices">
            <ul>
              <li>Merchants can uninstall the app from Shopify.</li>
              <li>Merchants can disconnect integrations where supported.</li>
              <li>Merchants can request access or deletion of their data.</li>
            </ul>
          </PolicySection>

          <PolicySection title="Cookies and analytics">
            <p>
              The public website may use cookies or similar technologies for basic functionality and analytics if
              enabled.
            </p>
          </PolicySection>

          <PolicySection title="Children's privacy">
            <p>GuardRules is intended for business users and is not directed to children.</p>
          </PolicySection>

          <PolicySection title="Changes to this policy">
            <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page.</p>
          </PolicySection>

          <PolicySection title="Contact">
            <p>
              For privacy questions, contact us at:{" "}
              {/* TODO: Replace this support email if GuardRules uses a different privacy contact. */}
              <a href="mailto:support@guardrules.app">support@guardrules.app</a>
            </p>
          </PolicySection>
        </div>
      </section>
    </PublicLayout>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="policy-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
