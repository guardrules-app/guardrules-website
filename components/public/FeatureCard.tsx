import type { FeatureItem } from "@/constants/siteContent";

type FeatureCardProps = FeatureItem & {
  index?: number;
};

export function FeatureCard({ title, copy, icon, index }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <div className="feature-icon" aria-hidden="true">
        {icon ?? (index ? index : "✓")}
      </div>
      <h3>{title}</h3>
      <p>{copy}</p>
    </article>
  );
}
