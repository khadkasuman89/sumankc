import { ExternalLink } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { useI18n } from "@/lib/i18n";
import { publicationMeta } from "@/lib/publications";

export function Research() {
  const { t } = useI18n();
  const r = t.research;

  return (
    <section id="research" className="relative overflow-hidden bg-navy-deep py-24 text-paper lg:py-32">
      <div aria-hidden className="editorial-grid absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={r.eyebrow} title={r.title} invert align="left" />

        <dl className="mb-12 grid gap-px border border-paper/15 bg-paper/15 sm:grid-cols-3">
          {r.metrics.map((m) => (
            <div key={m.label} className="bg-navy-deep p-5">
              <dd className="font-display text-2xl font-light">{m.value}</dd>
              <dt className="technical-label mt-1 text-steel">{m.label}</dt>
            </div>
          ))}
        </dl>

        <div className="space-y-5">
          {r.papers.map((p, i) => {
            const meta = publicationMeta[i];
            return (
              <Reveal key={p.title}>
                <article className="grid gap-5 border border-paper/15 bg-navy/40 p-6 transition-colors hover:border-steel md:grid-cols-[110px_1fr] md:p-8">
                  <div className="font-display text-4xl font-light text-steel">{meta?.year}</div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-snug sm:text-xl">{p.title}</h3>
                    <p className="mt-3 text-sm text-paper/75">{p.journal}</p>
                    <p className="mt-1 text-sm text-paper/60">{p.authors}</p>
                    {meta?.doi && (
                      <div className="mt-5 flex flex-wrap items-center gap-4">
                        <a href={`https://doi.org/${meta.doi}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 bg-paper px-5 py-2.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-steel">
                          {r.readPaper} <ExternalLink className="h-4 w-4" />
                        </a>
                        <span className="break-all font-mono text-xs text-paper/60">DOI: {meta.doi}</span>
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-14">
          <h3 className="technical-label text-steel">{r.interestsTitle}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {r.interests.map((x) => (
              <li key={x} className="border border-paper/20 px-3 py-1.5 text-sm text-paper/85">{x}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
