import { FileText } from "lucide-react";
import { SectionHeading } from "./section-heading";

export function Research() {
  return (
    <section id="research" className="relative py-20 lg:py-28 bg-gradient-subtle">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Research" title="Published research" />

        <div className="divide-y divide-border border-y border-border">
          {[
            ["2026", "A Study on Bidding Trend and Performance of Construction Projects: A Case Study of Water Supply Projects in Koshi Province, Nepal", "International Journal on Engineering Technology and Infrastructure Development · June 2026"],
            ["2025", "Evaluation of Factors Causing Cost Variation in Construction of Water Supply Projects in Nepal", "Mid-West University Journal of Engineering & Innovation · December 2025"],
            ["2018", "Ranking of Public Bus Alternatives Using Hybrid Multi-Criteria Decision-Making Approach Under Fuzzy Environment: A Case Study of Kathmandu", "MAT Journal of Transportation Systems · October 2018"],
          ].map(([year, title, journal]) => (
            <article key={title} className="grid gap-5 py-8 md:grid-cols-[100px_1fr_auto] md:items-start">
              <div className="font-display text-3xl italic text-primary">{year}</div>
              <div><h3 className="text-xl font-semibold leading-snug">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{journal}</p></div>
              <FileText className="hidden h-5 w-5 text-primary md:block" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
