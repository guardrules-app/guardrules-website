type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === "left" ? "align-left" : ""}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
