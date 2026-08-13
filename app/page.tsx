import type { Metadata } from "next";
import Link from "next/link";
import { FAQSection } from "@/components/public/FAQSection";
import { FeatureCard } from "@/components/public/FeatureCard";
import { HeroSection } from "@/components/public/HeroSection";
import { PublicLayout } from "@/components/public/PublicLayout";
import { SectionHeading } from "@/components/public/SectionHeading";
import { featureSections, landingFaqs } from "@/constants/siteContent";

export const metadata: Metadata = {
  title: "GuardRules — Inventory-Based Ad Protection for Shopify Stores",
  description:
    "GuardRules helps Shopify merchants pause, resume, and monitor Meta ads based on product inventory rules.",
};

export default function HomePage() {
  return (
    <PublicLayout>
      <HeroSection />
      {/* <StoreConnectSection /> */}
      {/* 
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Running ads on unavailable products wastes money."
            description="Inventory changes fast. GuardRules helps your ads react before more budget goes to products that cannot convert."
          />
          <div className="grid grid-3">
            {problemCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section> */}

      <section className="section" id="how-it-works">
        <div className="container">
          <SectionHeading
            title="Key Features"
            description="GuardRules gives Shopify merchants checkout protection, custom messaging, fraud-prevention controls, and clear visibility into rule activity."
          />
          <div className="grid grid-3 steps">
            {featureSections.map((feature, index) => (
              <FeatureCard
                key={feature.heading}
                title={feature.heading}
                copy={feature.copy}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <section className="section">
        <div className="container">
          <SectionHeading
            title="Core features for Shopify merchants"
            description="Everything is focused on one practical job: keeping Meta ads aligned with Shopify inventory."
          />
          <div className="grid grid-4">
            {coreFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="section">
        <div className="container">
          <SectionHeading
            title="Built for everyday inventory moments"
            description="Use GuardRules for best sellers, restocks, seasonal products, and any product where wasted ad traffic hurts."
          />
          <div className="grid grid-3">
            {useCases.map((useCase) => (
              <FeatureCard key={useCase.title} {...useCase} />
            ))}
          </div>
        </div>
      </section> */}

      <FAQSection faqs={landingFaqs} />
      <section className="section">
        <div className="container pricing-preview">
          <div className="pricing-row">
            <div>
              <span className="badge">Plans & Pricing</span>
              <h2 className="cta-heading">
                Start with 2 free guard. Upgrade when you need more.
              </h2>
              <p>
                Every plan includes all core features. Usage limits depend on
                your selected plan.
              </p>
            </div>
            <Link className="button button-secondary" href="/pricing">
              View pricing
            </Link>
          </div>
          {/* <div className="grid pricing-cards" style={{ marginTop: 24 }}>
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div> */}
        </div>
      </section>
      {/* <CTASection
        title="Protect your ad spend when inventory changes."
        description="Install GuardRules, create your first guard, and keep Meta ad traffic away from unavailable products."
        buttonLabel="Install GuardRules"
      /> */}
    </PublicLayout>
  );
}
