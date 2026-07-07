import Link from "next/link";

type CTASectionProps = {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonHref?: string;
};

export function CTASection({ title, description, buttonLabel, buttonHref = "/#install-store" }: CTASectionProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-section">
          <div>
            <h2>{title}</h2>
            {description ? <p>{description}</p> : null}
          </div>
          <Link className="button button-primary" href={buttonHref}>
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
