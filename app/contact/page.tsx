import type { Metadata } from "next";
import { PublicLayout } from "@/components/public/PublicLayout";

export const metadata: Metadata = {
  title: "Contact — GuardRules",
  description: "Get in touch with the GuardRules team.",
};

export default function ContactPage() {
  return (
    <PublicLayout>
      <section className="hero contact-hero">
        {/* <div className="container">
          <span className="badge">Contact</span>

          <h1>We're here to help.</h1>

          <p className="hero-copy">
            Have a question about GuardRules or need assistance? Email us and
            we'll get back to you as soon as possible.
          </p>

          <div className="contact-email">support@guardrules.com</div>
        </div> */}

        <div className="features-heading">
          <span className="page-heading-badge">Contact</span>
          <h2 className="heading-title">We're here to help</h2>
          <p>
            Have a question about GuardRules or need assistance? Email us and
            we'll get back to you as soon as possible.
          </p>
          <div className="contact-email">team@guardrules.com</div>
        </div>
      </section>
    </PublicLayout>
  );
}
