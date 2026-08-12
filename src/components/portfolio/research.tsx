import { FileText, ExternalLink } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { useI18n } from "@/lib/i18n";

const meta = [
  { year: "2026", doi: "10.3126/injet-indev.v2i2.95726" },
  { year: "2025", doi: "10.3126/mujoei.v1i1.91107" },
  { year: "2018", doi: null as string | null },
];

export function Research() {
  const { t } = useI18n();

  return (
    <section id="research" className="relative py-20 lg:py-28 bg-gradient-subtle">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.research.eyebrow} title={t.research.title} />

        <div className="divide-y divide-border border-y border-border">
          {t.research.papers.map((p, i) => (
            <article
              key={p.title}
              className="grid gap-5 py-8 md:grid-cols-[100px_1fr_auto] md:items-start"
            >
              <div className="font-display text-3xl italic text-primary">{meta[i]?.year}</div>
              <div>
                <h3 className="text-xl font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.journal}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.authors}</p>
                {meta[i]?.doi && (
                  <a
                    href={`https://doi.org/${meta[i]!.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" /> DOI: {meta[i]!.doi}
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
