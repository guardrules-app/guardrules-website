import type { Metadata } from "next";
import { CTASection } from "@/components/public/CTASection";
import { PublicLayout } from "@/components/public/PublicLayout";
import { SectionHeading } from "@/components/public/SectionHeading";
import { featureSections } from "@/constants/siteContent";

export const metadata: Metadata = {
  title: "Features — GuardRules",
  description:
    "Explore GuardRules features for Shopify inventory monitoring, Meta ad automation, guard rules, notifications, and activity logs."
};

export default function FeaturesPage() {
  return (
    <PublicLayout>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Features</span>
          <h1>Features built to protect your ad budget.</h1>
          <p className="hero-copy">
            GuardRules gives Shopify merchants a practical way to connect inventory changes with Meta ad actions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Inventory automation that stays understandable"
            description="Set clear rules, choose where they apply, and review the actions GuardRules performs."
          />
          {featureSections.map((section) => (
            <article className="feature-detail" key={section.heading}>
              <div>
                <span className="eyebrow">{section.eyebrow}</span>
                <h2>{section.heading}</h2>
                <p>{section.copy}</p>
              </div>
              <ul className="check-list">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CTASection title="Ready to stop wasting ad spend?" buttonLabel="Install GuardRules" />
    </PublicLayout>
  );
}
