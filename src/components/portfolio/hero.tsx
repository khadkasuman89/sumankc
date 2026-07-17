import { Download, Mail, BadgeCheck, Building2 } from "lucide-react";
import portrait from "@/assets/suman-portrait.jpg.asset.json";
import cv from "@/assets/suman-cv.pdf.asset.json";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen flex-col pt-20 md:flex-row"
    >
      {/* Left — paper panel */}
      <div className="flex w-full flex-col justify-center bg-paper px-6 py-16 sm:px-10 md:w-1/2 md:px-16 lg:px-24 lg:py-24">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-steel">
            <BadgeCheck className="h-3.5 w-3.5" />
            Civil Engineer · Gov. of Nepal
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-navy-deep sm:text-6xl lg:text-7xl">
            Er. Suman
            <br />
            Khadka
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-navy sm:text-lg">
            Serving the Government of Nepal with structural integrity and
            sustainable infrastructure — water supply, sewerage and construction
            management since 2019.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-navy-deep px-7 py-4 text-sm font-bold text-paper transition-all hover:bg-navy"
            >
              <Mail className="h-4 w-4" /> Collaborate
            </a>
            <a
              href={cv.url}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-navy-deep px-7 py-4 text-sm font-bold text-navy-deep transition-all hover:bg-navy-deep hover:text-paper"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Right — navy portrait panel */}
      <div className="relative flex w-full items-center justify-center overflow-hidden bg-navy-deep p-8 md:w-1/2 md:p-12">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.55 0.11 250 / 0.55), transparent 60%)",
          }}
        />
        <div className="relative z-10 aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={portrait.url}
            alt="Er. Suman Khadka — Civil Engineer, Government of Nepal"
            className="h-full w-full grayscale object-cover transition-all duration-700 hover:grayscale-0"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/50 to-transparent p-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper text-navy-deep">
                <Building2 className="h-5 w-5" />
              </div>
              <div className="min-w-0 text-paper">
                <div className="text-sm font-semibold">Government of Nepal</div>
                <div className="text-xs opacity-80">DWSSM · Itahari</div>
              </div>
            </div>
          </div>
          <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-paper/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy-deep">
            <BadgeCheck className="h-3 w-3 text-steel" /> NEC
          </div>
        </div>
      </div>
    </section>
  );
}
