import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./section-heading";

const items = [
  {
    school: "Mid-West University, Surkhet",
    program: "Master in Construction Management",
    score: "2024 – 2026",
  },
  {
    school: "Pulchowk Engineering Campus, IOE",
    program: "Bachelor in Civil Engineering",
    score: "79.65%",
  },
  { school: "Pinnacle Academy", program: "+2 Science", score: "84.10%" },
];

export function Education() {
  return (
    <section id="education" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((e) => (
            <div
              key={e.school}
              className="rounded-3xl border border-border bg-card p-6 shadow-card"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold">{e.school}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.program}</p>
              <div className="mt-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {e.score}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
