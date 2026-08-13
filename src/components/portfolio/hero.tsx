import { Download, Mail, BadgeCheck, Building2 } from "lucide-react";
import portrait from "@/assets/suman-portrait.png";
import cv from "@/assets/suman-cv.pdf";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-background px-5 pb-16 pt-28 sm:px-8 lg:min-h-[760px] lg:px-16 lg:pb-20 lg:pt-32"
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

          <dl className="mt-9 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 border-t border-border pt-7 sm:grid-cols-3">
            {h.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.label}</dt>
                <dd className="mt-1 font-display text-2xl italic">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Right — navy portrait panel */}
      <div className="relative lg:col-span-5 lg:pl-4">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted shadow-elegant">
          <img
            src={portrait}
            alt={h.portraitAlt}
            className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.025]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-foreground/90 p-5">
            <div className="flex items-center gap-3">
               <div className="grid h-10 w-10 shrink-0 place-items-center bg-background text-foreground">
                <Building2 className="h-5 w-5" />
              </div>
               <div className="min-w-0 text-background">
                <div className="text-sm font-semibold">{h.govt}</div>
                 <div className="text-xs opacity-80">{h.govtSub}</div>
              </div>
            </div>
          </div>
          <div className="absolute right-4 top-4 inline-flex items-center gap-2 bg-background/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground">
            <BadgeCheck className="h-3 w-3 text-steel" /> NEC
          </div>
        </div><a href="#experience" className="absolute -bottom-7 left-0 inline-flex items-center gap-4 bg-primary px-7 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-foreground">{h.explore} <span aria-hidden>→</span></a>
      </div>
      </div>
    </section>
  );
}
