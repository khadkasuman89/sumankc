import { FileText, ExternalLink } from "lucide-react";
import { SectionHeading } from "./section-heading";

const papers = [
  {
    year: "2026",
    title:
      "A Study on Bidding Trend and Performance of Construction Projects: A Case Study of Water Supply Projects in Koshi Province, Nepal",
    journal:
      "International Journal on Engineering Technology and Infrastructure Development 2(2):197–211 · June 2026",
    doi: "10.3126/injet-indev.v2i2.95726",
    authors: "Suman Khadka",
  },
  {
    year: "2025",
    title:
      "Evaluation of Factors Causing Cost Variation in Construction of Water Supply Projects in Nepal",
    journal:
      "Mid-West University Journal of Engineering & Innovation 1:119–135 · December 2025",
    doi: "10.3126/mujoei.v1i1.91107",
    authors: "Suman Khadka",
  },
  {
    year: "2018",
    title:
      "Ranking of Public Bus Alternatives Using Hybrid Multi-Criteria Decision Making Approach Under Fuzzy Environment: A Case Study of Kathmandu",
    journal: "MAT Journal of Transportation Systems · October 2018",
    doi: null,
    authors:
      "Anil Marsani, Subid Ghimire, Saurav Parajuli, Suman Khadka and others (7 authors)",
  },
];

export function Research() {
  return (
    <section id="research" className="relative py-20 lg:py-28 bg-gradient-subtle">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Research" title="Published research" />

        <div className="divide-y divide-border border-y border-border">
          {papers.map((p) => (
            <article
              key={p.title}
              className="grid gap-5 py-8 md:grid-cols-[100px_1fr_auto] md:items-start"
            >
              <div className="font-display text-3xl italic text-primary">{p.year}</div>
              <div>
                <h3 className="text-xl font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.journal}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.authors}</p>
                {p.doi && (
                  <a
                    href={`https://doi.org/${p.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" /> DOI: {p.doi}
                  </a>
                )}
              </div>
              <FileText className="hidden h-5 w-5 text-primary md:block" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
