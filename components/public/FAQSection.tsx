import type { FAQItem } from "@/constants/siteContent";
import { SectionHeading } from "./SectionHeading";

type FAQSectionProps = {
  faqs: FAQItem[];
  title?: string;
  description?: string;
};

export function FAQSection({ faqs, title = "Frequently asked questions", description }: FAQSectionProps) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title={title} description={description} />
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
