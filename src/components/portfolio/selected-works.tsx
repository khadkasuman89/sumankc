import { Building2, CheckCircle2, Landmark, Ruler } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { useI18n } from "@/lib/i18n";

const icons = [Landmark, Building2, Ruler, Building2];

export function SelectedWorks() {
  const { t } = useI18n();

  return (
    <section id="works" className="relative py-24 lg:py-36">
      <div aria-hidden className="editorial-grid absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.works.eyebrow}
          title={t.works.title}
          description={t.works.description}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {t.works.items.map((project, index) => {
            const Icon = icons[index] ?? Building2;
            return (
              <article
                key={project.name}
                className="group border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant sm:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {project.agency}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight text-foreground">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm font-semibold text-primary">{project.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center gap-2 border-t border-border pt-4 text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {project.status}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}