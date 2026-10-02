import { Droplets, HardHat, FileCheck2, Ruler, Monitor } from "lucide-react";
import { Reveal } from "./reveal";
import { useI18n } from "@/lib/i18n";

const icons = [Droplets, HardHat, FileCheck2, Ruler];

/** Expertise content rendered inside the Experience section (no separate tab). */
export function Expertise() {
  const { t } = useI18n();
  const e = t.expertise;
  const s = t.software;

  // Deduplicate items that appear in more than one group.
  const seen = new Set<string>();
  const groups = e.groups.map((g) => ({
    ...g,
    items: g.items.filter((it) => {
      const k = it.toLowerCase();
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    }),
  }));

  return (
    <div className="mt-24">
      <div className="technical-label text-steel">{e.eyebrow}</div>
      <h3 className="mt-3 font-display text-3xl font-light text-paper sm:text-4xl">{e.title}</h3>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g, i) => {
          const Icon = icons[i] ?? Ruler;
          return (
            <Reveal key={g.title} className="border border-paper/10 border-t-2 border-t-primary bg-navy/40 p-6">
              <Icon className="h-6 w-6 text-steel" strokeWidth={1.5} />
              <h4 className="mt-4 text-lg font-semibold text-paper">{g.title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-paper/75">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2"><span className="mt-2 h-px w-3 shrink-0 bg-steel" />{it}</li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-16">
        <div className="technical-label text-steel">{s.eyebrow}</div>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {s.items.map((name) => (
            <li key={name} className="flex min-h-14 items-center gap-2 border border-paper/10 bg-navy/40 px-4 py-3 text-sm font-medium text-paper">
              <Monitor className="h-4 w-4 shrink-0 text-steel" strokeWidth={1.5} /> {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
