export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={`mb-14 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div
        className={`text-xs font-semibold uppercase tracking-[0.22em] ${
          invert ? "text-steel" : "text-steel"
        }`}
      >
        {eyebrow}
      </div>
      <h2
         className={`mt-4 font-display text-4xl leading-none sm:text-5xl lg:text-6xl ${
          invert ? "text-paper" : "text-navy-deep"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mx-auto mt-5 h-px w-20 ${
          align === "center" ? "" : "mx-0"
        } bg-steel`}
      />
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            invert ? "text-paper/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
