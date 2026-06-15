import { Award, Trophy, BookOpen, PenTool, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./section-heading";

const items = [
  { icon: Award, title: "Scholarship Recipient", desc: "IOE Pulchowk Engineering Campus" },
  { icon: Trophy, title: "Second Runner-Up", desc: "National Civil Engineering Exhibition" },
  { icon: BookOpen, title: "Research Publication", desc: "Transportation Engineering Author" },
  { icon: PenTool, title: "District Essay Winner", desc: "Inter-school competition" },
  { icon: ShieldCheck, title: "NEC Registered Engineer", desc: "Nepal Engineering Council" },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-20 lg:py-28 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Achievements" title="Recognition & milestones" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-primary opacity-10 blur-2xl transition-opacity group-hover:opacity-30" />
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
