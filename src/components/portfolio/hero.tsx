import { Download, Mail, BadgeCheck } from "lucide-react";
import portrait from "@/assets/suman-portrait.png";
import cv from "@/assets/suman-cv.pdf";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-background px-5 pb-24 pt-32 sm:px-8 lg:min-h-[800px] lg:px-16 lg:pb-28 lg:pt-36"
    >
      <div aria-hidden className="editorial-grid absolute inset-0" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7 lg:pb-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-12 bg-primary/40" />
            <BadgeCheck className="h-3.5 w-3.5" />
            {h.badge}
          </span>

          <h1 className="mt-7 font-display text-6xl leading-[0.9] text-foreground sm:text-7xl lg:text-8xl xl:text-9xl">
            {h.firstName}<br /><span className="italic text-primary">{h.lastName}</span>
          </h1>

          <dl className="mt-8 grid max-w-2xl grid-cols-3 border-y border-border bg-background/75 backdrop-blur-sm">
            {h.stats.map((s) => (
              <div key={s.label} className="min-w-0 border-r border-border px-3 py-4 last:border-r-0 sm:px-5">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">{s.label}</dt>
                <dd className="mt-1 font-display text-lg leading-tight text-foreground sm:text-2xl">{s.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {h.summary}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
               className="inline-flex items-center gap-2 bg-foreground px-7 py-4 text-sm font-semibold text-background transition-colors hover:bg-primary"
            >
              <Mail className="h-4 w-4" /> {h.collaborate}
            </a>
            <a
              href={cv}
              download
              target="_blank"
              rel="noopener noreferrer"
               className="inline-flex items-center gap-2 border border-foreground px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <Download className="h-4 w-4" /> {h.downloadCv}
            </a>
          </div>

        </div>
      </div>

      <div className="relative lg:col-span-5 lg:pl-4">
        <div aria-hidden className="absolute -inset-6 border border-primary/20 bg-primary/5 [background-image:linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
        <div aria-hidden className="absolute -left-10 top-12 hidden h-px w-24 bg-primary lg:block" />
        <div aria-hidden className="absolute -right-5 bottom-16 hidden h-28 w-px bg-primary lg:block" />
        <figure className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-muted shadow-elegant">
          <img
            src={portrait}
            alt={h.portraitAlt}
            className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.025]"
          />
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 border-t border-background/20 bg-foreground/90 px-5 py-4 text-background">
            <div className="text-sm font-semibold">{h.govt}</div>
            <div className="mt-0.5 text-xs opacity-80">{h.govtSub}</div>
          </figcaption>
        </figure>
        <a href="#experience" className="absolute -bottom-7 left-0 inline-flex items-center gap-4 bg-primary px-7 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-foreground">{h.explore} <span aria-hidden>→</span></a>
      </div>
      </div>
    </section>
  );
}
