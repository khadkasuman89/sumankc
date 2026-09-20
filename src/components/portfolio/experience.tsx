import { Building2, Factory, Landmark } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { useI18n } from "@/lib/i18n";

export function Experience() {
  const { t } = useI18n();
  const items = t.experience.items;
  const icons = [Landmark, Building2, Factory, Factory];

  return (
    <section id="experience" className="relative bg-navy-deep py-24 text-paper lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} invert />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-4 left-5 top-4 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-8">
            {items.map((it, i) => (
              <div
                key={it.org}
                className="relative grid gap-4 pl-16 md:grid-cols-[190px_1fr] md:gap-8"
              >
                <div className="absolute left-5 top-1 grid h-10 w-10 -translate-x-1/2 place-items-center border border-paper/20 bg-navy-deep text-steel shadow-elegant">
                  {(() => {
                    const Icon = icons[i] ?? Building2;
                    return <Icon className="h-4 w-4" />;
                  })()}
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-steel">
                    {it.period}
                  </div>
                  <h3 className="mt-2 font-display text-2xl text-paper">{it.org}</h3>
                  <p className="mt-1 text-sm text-paper/70">{it.role}</p>
                </div>

                <div>
                  <ul className="space-y-2 border border-paper/10 bg-navy/40 p-5 backdrop-blur">
                    {it.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-paper/75">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
