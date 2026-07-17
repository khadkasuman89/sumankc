import { Briefcase } from "lucide-react";
import { SectionHeading } from "./section-heading";

const items = [
  {
    org: "Government of Nepal — DWSSM",
    role: "Civil Engineer · Integrated Water Supply & Sewerage Management Project, Itahari",
    period: "2019 – Present",
    bullets: [
      "Ministry of Infrastructure Development, Department of Water Supply and Sewerage Management",
      "Planning, design and supervision of water supply and sewerage infrastructure",
      "Project management and contract administration for public infrastructure",
      "Site supervision, quality assurance and progress monitoring",
      "Coordination with stakeholders, contractors and local authorities",
    ],
  },
  {
    org: "Design Core Pvt. Ltd.",
    role: "Civil Engineer",
    period: "2019",
    bullets: [
      "Structural design and analysis of residential buildings",
      "Quantity surveying and estimation",
      "Road project valuation",
      "Hydraulic component design",
      "Building and road drafting",
    ],
  },
  {
    org: "Himalayan Prefab Pvt. Ltd.",
    role: "Civil Engineer",
    period: "2018 – 2019",
    bullets: [
      "Steel and prefab structure design",
      "Cost estimation and valuation",
      "Site supervision",
      "BOQ preparation",
      "Project coordination",
    ],
  },
  {
    org: "IOE Pulchowk Campus",
    role: "Research Fellow",
    period: "2018",
    bullets: [
      "Transportation engineering research",
      "Research publication",
      "Data analysis and reporting",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 lg:py-28 bg-navy-deep text-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Experience" title="Professional Journey" invert />


        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-1/2" />

          <div className="space-y-10">
            {items.map((it, i) => (
              <div
                key={it.org}
                className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className="absolute left-4 -translate-x-1/2 top-6 grid h-8 w-8 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant md:left-1/2">
                  <Briefcase className="h-4 w-4" />
                </div>

                <div className="pl-14 md:pl-0 md:pr-10 md:text-right md:[&.left]:pl-10 md:[&.left]:pr-0 md:[&.left]:text-left">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-steel">
                    {it.period}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-paper">{it.org}</h3>
                  <p className="text-sm text-paper/60">{it.role}</p>
                </div>

                <div className="mt-3 pl-14 md:mt-0 md:pl-10">
                  <ul className="space-y-2 rounded-2xl border border-paper/10 bg-navy/40 p-5 backdrop-blur">
                    {it.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-paper/75">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
