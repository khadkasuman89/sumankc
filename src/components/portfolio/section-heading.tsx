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
    <div className={`mb-14 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div
        className={`text-xs font-bold uppercase tracking-[0.3em] ${
          invert ? "text-steel" : "text-steel"
        }`}
      >
        {eyebrow}
      </div>
      <h2
        className={`mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          invert ? "text-paper" : "text-navy-deep"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mx-auto mt-5 h-1 w-16 ${
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
