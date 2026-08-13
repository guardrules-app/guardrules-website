import type { Metadata } from "next";
import { CTASection } from "@/components/public/CTASection";
import { PublicLayout } from "@/components/public/PublicLayout";

export const metadata: Metadata = {
  title: "Features - Guard Rules",
  description:
    "Explore Guard Rules features for blocking unwanted discount codes with rule-based conditions, custom messages, and Shopify-focused checkout control.",
};

const featureRows = [
  {
    number: "01",
    title: "Block abuse of discount codes",
    // badge: "Best for: Protecting margins",
    copy: [
      "Automatically stop discount codes that should not be used at checkout.",
      "Our app helps merchants reduce unwanted discount usage and protect margins with clear rules and predictable behavior.",
    ],
    cards: [
      {
        title: "Fast validation",
        copy: "Reject unwanted codes as soon as the checkout rule is matched.",
      },
      {
        title: "Checkout protection",
        copy: "Keep discount abuse from cutting into margin.",
      },
      {
        title: "Policy control",
        copy: "Make rules that reflect how your store should behave.",
      },
      {
        title: "Clear outcome",
        copy: "Display a predictable response when a code is blocked.",
      },
    ],
  },
  {
    number: "02",
    title: "Show validation custom messages on checkout",
    // badge: "Best for: Better UX",
    copy: ["Show shoppers a clear message when specfic conditions are met."],
    cards: [
      {
        title: "Custom messaging",
        copy: "Validate checkout conditions and show a clear message when a rule is triggered.",
      },
      {
        title: "Less confusion",
        copy: "Make checkout behavior easier to understand.",
      },
      {
        title: "Better support",
        copy: "Reduce questions about why not complete the checkout.",
      },
      {
        title: "Prevent unwanted behavior",
        copy: "Stop shoppers from entering invalid fields at checkout.",
      },
    ],
  },
  {
    number: "03",
    title: "Fraud prevention",
    // badge: "Best for: Flexible logic",
    copy: [
      "Block or whitelist Ip addresses, countries, products, collections or pages with flexible rules.",
    ],
    cards: [
      {
        title: "Ip address based",
        copy: "Block or allow specific Ip addresses or ranges.",
      },
      {
        title: "Country based",
        copy: "Block or allow specific countries.",
      },
      {
        title: "Product based",
        copy: "Block or allow specific products.",
      },
      {
        title: "Collection based",
        copy: "Block or allow specific collections.",
      },
    ],
  },
  {
    number: "04",
    title: "Store protection",
    // badge: "Best for: Flexible logic",
    copy: [
      "Protect your store with one click by disabling content copying,inspect, right click, shortcuts, screenshots and enable emergency mode when needed.",
    ],
    cards: [
      {
        title: "Disable content copying",
        copy: "Prevent users from copying content from your store.",
      },
      {
        title: "Inspect element protection",
        copy: "Disable the ability to inspect elements on your store.",
      },
      {
        title: "Right click protection",
        copy: "Prevent users from right-clicking on your store.",
      },
      {
        title: "Shortcuts protection",
        copy: "Disable keyboard shortcuts in your store.",
      },
      {
        title: "Screenshots protection",
        copy: "Prevent users from taking screenshots of your store.",
      },
      {
        title: "Emergency mode",
        copy: "Enable emergency mode when needed.",
      },
    ],
  },
] as const;

export default function FeaturesPage() {
  return (
    <PublicLayout>
      <section className="features-section">
        <div className="container">
          <div className="features-heading">
            <span className="page-heading-badge">Key Features</span>
            <h2 className="heading-title">
              Powerful features to guard your store
            </h2>
            <p>
              Explore flexible features built to help you manage, protect, and
              control your store with simple rules and powerful customization.
            </p>
          </div>

          <div className="features-stack">
            {featureRows.map((row) => (
              <article className="feature-row" key={row.number}>
                <div className="feature-row-meta">
                  <div className="feature-row-number">{row.number}</div>
                  <div className="feature-row-titlewrap">
                    <h3>{row.title}</h3>
                    {row.copy.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="feature-row-body">
                  {/* {row.copy.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))} */}
                  <div className="feature-highlight-grid">
                    {row.cards.map((card) => (
                      <div className="feature-highlight" key={card.title}>
                        <strong>{card.title}</strong>
                        <span>{card.copy}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="features-section features-split">
        <div className="container features-split-grid">
          <div>
            <span className="eyebrow">Shopify listing</span>
            <h2>Features pulled from the app store page</h2>
            <p className="features-split-copy">
              Block unwanted discount codes using customizable checkout rules.
              Create conditions based on products, customers, discount codes,
              and country. Display custom messages when discount codes are
              rejected.
            </p>
          </div>

          <div className="features-split-panel">
            <ul className="check-list features-checklist">
              <li>
                Block unwanted discount codes using customizable checkout rules.
              </li>
              <li>
                Create conditions based on products, customers, discount codes,
                and country.
              </li>
              <li>Display custom messages when discount codes are rejected.</li>
            </ul>
          </div>
        </div>
      </section> */}

      <CTASection
        title="Ready to protect checkout with clear rules?"
        description="Install Guard Rules and start enforcing the guard rules your store needs."
        buttonLabel="Install App"
      />
    </PublicLayout>
  );
}
