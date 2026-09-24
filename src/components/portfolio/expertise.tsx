import { Droplets, HardHat, FileCheck2, Ruler, Monitor } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { useI18n } from "@/lib/i18n";

const icons = [Droplets, HardHat, FileCheck2, Ruler];

export function Expertise() {
  const { t } = useI18n();
  const e = t.expertise;
  const s = t.software;
  const d = t.domains;

  return (
    <section id="expertise" className="relative bg-muted/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={e.eyebrow} title={e.title} description={e.description} align="left" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {e.groups.map((g, i) => {
            const Icon = icons[i] ?? Ruler;
            return (
              <Reveal key={g.title} className="border border-border border-t-2 border-t-primary bg-card p-6">
                <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-4 text-lg font-semibold">{g.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-2"><span className="mt-2 h-px w-3 shrink-0 bg-primary" />{it}</li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-20">
          <div className="technical-label text-steel">{d.eyebrow}</div>
          <h3 className="mt-3 font-display text-3xl font-light sm:text-4xl">{d.title}</h3>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {d.items.map((it, i) => (
              <Reveal key={it.title} className="border border-border bg-background p-8">
                <div className="font-mono text-xs text-primary">D-0{i + 1}</div>
                <h4 className="mt-3 text-xl font-semibold">{it.title}</h4>
                <p className="mt-3 text-sm text-muted-foreground">{it.items}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="technical-label text-steel">{s.eyebrow}</div>
          <h3 className="mt-3 font-display text-3xl font-light sm:text-4xl">{s.title}</h3>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {s.items.map((name) => (
              <li key={name} className="flex min-h-14 items-center gap-2 border border-border bg-card px-4 py-3 text-sm font-medium">
                <Monitor className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} /> {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
