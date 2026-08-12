import { Cpu, Wrench, Code2 } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { useI18n } from "@/lib/i18n";

const icons = [Cpu, Wrench, Code2];

export function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="relative py-20 lg:py-28 bg-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.skills.groups.map((g, i) => {
            const Icon = icons[i] ?? Cpu;
            return (
              <div key={g.title} className="border-t-2 border-primary bg-card p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold">{g.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((name) => (
                    <li
                      key={name}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
