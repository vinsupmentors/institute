export default function SectionHeader({
  eyebrow = "",     // small label above title (optional)
  title,            // main heading (required)
  subtitle = "",    // brief line under title (optional)
  align = "left",   // "left" | "center" | "right"
  id                // optional id for anchor links
}) {
  const alignClass =
    align === "center" ? "sh-center" : align === "right" ? "sh-right" : "sh-left";

  return (
    <header className={`section-header ${alignClass}`} id={id}>
      {eyebrow ? <div className="sh-eyebrow">{eyebrow}</div> : null}
      <h2 className="sh-title">{title}</h2>
      {subtitle ? <p className="sh-sub">{subtitle}</p> : null}
    </header>
  );
}
