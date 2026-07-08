import type { Metadata } from "next";
import { PricingCard } from "@/components/public/PricingCard";
import { PublicLayout } from "@/components/public/PublicLayout";
import { plans } from "@/constants/pricing";

export const metadata: Metadata = {
  title: "Pricing — GuardRules",
  description:
    "Simple GuardRules pricing for Shopify stores. Start free and upgrade when you need more inventory-based guard rules.",
};

export default function PricingPage() {
  return (
    <PublicLayout>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">Plans & Pricing</span>
            <h2>Simple pricing for every Shopify store</h2>
            <p className="hero-copy">
              Start free, then upgrade when you need more guard rules for your
              store. Prices are in USD/month.
            </p>
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
          <p
            className="hero-copy"
            style={{ marginTop: 22, fontSize: "0.75rem" }}
          >
            Guard limits control how many automation rules you can create.
            Prices are in USD/month.
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
