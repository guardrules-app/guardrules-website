type SectionHeadingProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === "left" ? "align-left" : ""}`}>
      {badge ? <span className="badge">{badge}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
