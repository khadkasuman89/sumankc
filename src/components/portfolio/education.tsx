import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { useI18n } from "@/lib/i18n";

export function Education() {
  const { t } = useI18n();
  const items = t.education.items;
  // Emphasise M.Sc. and B.E. first, then LL.B., +2, SLC — content unchanged.
  const order = [1, 2, 0, 3, 4].filter((i) => items[i]);

  return (
    <section id="education" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.education.eyebrow} title={t.education.title} align="left" />
        <ol className="relative border-l border-border pl-8">
          {order.map((idx, n) => {
            const e = items[idx];
            const major = n < 2;
            return (
              <li key={e.school} className="relative pb-10 last:pb-0">
                <span className={`absolute -left-[41px] top-1 grid h-5 w-5 place-items-center border ${major ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background"}`}>
                  {major && <GraduationCap className="h-3 w-3" />}
                </span>
                <Reveal>
                  <div className="font-mono text-xs text-primary">{e.score}</div>
                  <h3 className={`mt-2 font-semibold ${major ? "text-2xl" : "text-lg"}`}>{e.program}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
