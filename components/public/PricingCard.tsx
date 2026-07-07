import Link from "next/link";
import { pricingCtas, type Plan } from "@/constants/pricing";
import { installHref } from "@/constants/siteContent";

type PricingCardProps = {
  plan: Plan;
};

export function PricingCard({ plan }: PricingCardProps) {
  const isHighlighted = Boolean(plan.badge);
  const price = plan.price === 0 ? "$0" : `$${plan.price.toFixed(2)}`;

  return (
    <article className={`pricing-card ${isHighlighted ? "highlight" : ""}`}>
      <div className="pricing-card-header">
        <div>
          <h3>{plan.name}</h3>
          <p>{plan.description}</p>
        </div>
        {plan.badge ? <span className="pricing-badge">{plan.badge}</span> : null}
      </div>
      <div className="price">
        <strong>{price}</strong>
        <span>/month</span>
      </div>
      <ul className="price-features">
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Link className={`button ${isHighlighted ? "button-primary" : "button-secondary"}`} href={installHref}>
        {pricingCtas[plan.name]}
      </Link>
    </article>
  );
}
