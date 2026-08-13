import Link from "next/link";
import { heroBullets, installHref } from "@/constants/siteContent";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          {/* <span className="badge">Checkout protection for Shopify</span> */}
          <h2 className="hero-heading">
            Secure every part of your store with guard rules
          </h2>
          <p className="hero-copy">
            Guard Rules helps Shopify merchants block bad discount codes, show
            custom validation messages, and control fraud-prevention rules with
            simple conditions.
          </p>
          {/* <ul className="hero-bullets">
            {heroBullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul> */}

          <div className="hero-actions">
            <Link className="button button-primary" href={installHref}>
              Install Guard Rules
            </Link>
            <Link className="button button-secondary" href="#how-it-works">
              Explore features
            </Link>
          </div>
        </div>
        <div
          className="hero-visual"
          aria-label="Guard Rules checkout protection illustration"
        >
          <img
            src="/hero-checkout-protection.svg"
            alt="Illustration of checkout protection rules, custom validation messages, and fraud prevention"
          />
        </div>
      </div>
    </section>
  );
}
