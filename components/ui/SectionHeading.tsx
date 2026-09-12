import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const titleColor = tone === "dark" ? "text-cream" : "text-ink";
  const eyebrowColor = tone === "dark" ? "text-gold-light" : "text-gold-dark";
  const descriptionColor = tone === "dark" ? "text-cream/70" : "text-ink-soft";

  return (
    <Reveal className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowColor}`}>
          <span className="h-px w-6 bg-gold" />
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-balance ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed text-balance ${descriptionColor}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
