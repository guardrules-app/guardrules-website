import type { Metadata } from "next";
import { PricingCard } from "@/components/public/PricingCard";
import { PublicLayout } from "@/components/public/PublicLayout";
import { plans } from "@/constants/pricing";

export const metadata: Metadata = {
  title: "Pricing — GuardRules",
  description:
    "Simple GuardRules pricing for Shopify stores. Start free and upgrade when you need more inventory-based guard rules."
};

export default function PricingPage() {
  return (
    <PublicLayout>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Pricing</span>
            <h2>Simple pricing for every Shopify store.</h2>
            <p className="hero-copy">
              Start free, then upgrade when you need more guard rules for your store. Prices are in USD/month.
            </p>
          </div>
          <div className="hero-panel" aria-label="GuardRules pricing summary">
            <div className="automation-card">
              <div className="automation-row">
                <div>
                  <div className="automation-label">Free</div>
                  <div className="automation-value">1 guard included</div>
                </div>
                <span className="status-pill">$0/mo</span>
              </div>
              <div className="automation-row">
                <div>
                  <div className="automation-label">Starter</div>
                  <div className="automation-value">5 guards for small stores</div>
                </div>
                <span className="status-pill">$4.99/mo</span>
              </div>
              <div className="automation-row">
                <div>
                  <div className="automation-label">Advanced</div>
                  <div className="automation-value">20 guards for growing stores</div>
                </div>
                <span className="status-pill">$12.99/mo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid pricing-cards">
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
          <p className="hero-copy" style={{ marginTop: 22, fontSize: "1rem" }}>
            All plans include unlimited product protection. Guard limits control how many automation rules you can
            create.
          </p>
        </div>
      </section>

      {/* <section className="section">
        <div className="container">
          <SectionHeading title="Compare plans" description="Every plan includes the essentials for Shopify inventory monitoring and Meta ad automation." />
          <div className="comparison">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  {plans.map((plan) => (
                    <th key={plan.name}>{plan.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    {row.values.map((value, index) => (
                      <td key={`${row.label}-${plans[index].name}`}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQSection faqs={pricingFaqs} title="Pricing FAQ" /> */}
    </PublicLayout>
  );
}
