import { Download, ArrowRight, BadgeCheck } from "lucide-react";
import portrait from "@/assets/suman-portrait.webp";
import cv from "@/assets/suman-cv.pdf";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <section id="home" className="relative isolate overflow-hidden bg-background px-5 pb-20 pt-36 sm:px-8 lg:px-16 lg:pb-24 lg:pt-40">
      <div aria-hidden className="editorial-grid absolute inset-0 opacity-60" />
      <svg aria-hidden className="blueprint-drift pointer-events-none absolute -right-40 top-10 h-[640px] w-[640px] text-primary/15" viewBox="0 0 400 400" fill="none">
        {[40, 70, 100, 130, 160, 190].map((r) => (
          <ellipse key={r} cx="200" cy="200" rx={r * 1.1} ry={r * 0.8} stroke="currentColor" strokeWidth="1" />
        ))}
      </svg>
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <span className="technical-label inline-flex items-center gap-3 text-primary">
            <span className="h-px w-10 bg-primary/50" />
            <BadgeCheck className="h-3.5 w-3.5" /> {h.badge}
          </span>
          <h1 className="mt-6 font-display text-5xl font-light leading-[0.95] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
            {h.firstName} <span className="font-semibold text-primary">{h.lastName}</span>
          </h1>
          <p className="mt-6 text-base font-semibold text-foreground sm:text-lg">{h.role}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{h.summary}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#about" className="inline-flex min-h-12 items-center gap-2 bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-primary">
              {h.viewProfile} <ArrowRight className="h-4 w-4" />
            </a>
            <a href={cv} download className="inline-flex min-h-12 items-center gap-2 border border-foreground px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background">
              <Download className="h-4 w-4" /> {h.downloadCv}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div aria-hidden className="absolute -inset-4 border border-primary/25" />
          <div aria-hidden className="absolute -left-8 top-10 hidden h-px w-16 bg-primary lg:block" />
          <figure className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-muted">
            <img src={portrait} alt={h.portraitAlt} fetchPriority="high" decoding="async" className="h-full w-full object-cover object-top" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-foreground/90 px-5 py-3 text-background">
              <div className="technical-label">{h.badge}</div>
              <div className="mt-1 text-xs opacity-80">{h.govt} · {h.govtSub}</div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
