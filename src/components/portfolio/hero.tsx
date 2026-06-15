import { Download, Mail, BadgeCheck, Building2, Briefcase, HardHat, Ruler, Compass, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";

function Counter({ end, label, suffix = "+" }: { end: number; label: string; suffix?: string }) {
  return (
    <div className="rounded-2xl glass p-4 text-center">
      <div className="text-3xl font-bold text-gradient">
        {end}
        {suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <BadgeCheck className="h-3.5 w-3.5" />
            NEC Registered Civil Engineer
          </div>

          <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Er. <span className="text-gradient">Suman Khadka</span>
          </h1>

          <p className="mt-4 text-base font-medium text-muted-foreground sm:text-lg">
            Civil Engineer · Structural Design · Transportation Engineering · Project Planning
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Passionate Civil Engineer with experience in structural design, project estimation,
            transportation engineering, construction management, and research. Graduate of
            Pulchowk Engineering Campus (IOE) with a proven record in engineering consultancy
            and project delivery.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-primary shadow-elegant hover:opacity-90">
              <a href="/cv-suman-khadka.pdf" download>
                <Download className="h-4 w-4" /> Download CV
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 max-w-md">
            <Counter end={5} label="Years" />
            <Counter end={20} label="Projects" />
            <Counter end={3} label="Research" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border bg-gradient-primary p-8 shadow-elegant">
            {/* Monogram card */}
            <div className="flex h-full w-full flex-col justify-between rounded-[1.5rem] border border-primary-foreground/20 bg-background/10 p-6 text-primary-foreground backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  <BadgeCheck className="h-3 w-3" /> NEC
                </div>
                <HardHat className="h-6 w-6 opacity-80" />
              </div>

              <div className="text-center">
                <div className="mx-auto grid h-32 w-32 place-items-center rounded-full border-4 border-primary-foreground/40 bg-primary-foreground/10 text-5xl font-black tracking-tight">
                  SK
                </div>
                <div className="mt-5 text-xl font-extrabold">Er. Suman Khadka</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-[0.2em] opacity-80">
                  Civil Engineer
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-semibold uppercase tracking-wider">
                <div className="flex flex-col items-center gap-1 rounded-lg bg-primary-foreground/10 p-2">
                  <Ruler className="h-4 w-4" /> Design
                </div>
                <div className="flex flex-col items-center gap-1 rounded-lg bg-primary-foreground/10 p-2">
                  <Compass className="h-4 w-4" /> Survey
                </div>
                <div className="flex flex-col items-center gap-1 rounded-lg bg-primary-foreground/10 p-2">
                  <Hammer className="h-4 w-4" /> Build
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-background text-primary">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold">Pulchowk Campus, IOE</div>
                  <div className="text-xs text-muted-foreground">B.E. Civil · 79.65%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -left-3 top-10 hidden md:flex items-center gap-2 rounded-2xl glass px-4 py-3 shadow-card animate-fade-in">
            <Briefcase className="h-5 w-5 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Available for</div>
              <div className="text-sm font-bold">Consultancy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
