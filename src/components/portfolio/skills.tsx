import { Cpu, Wrench, Code2 } from "lucide-react";
import { SectionHeading } from "./section-heading";

const groups = [
  {
    icon: Cpu,
    title: "Engineering Software",
    items: ["AutoCAD", "Civil 3D", "ETABS", "SAP2000", "HEC-RAS", "SketchUp", "Smart Road"],
  },
  {
    icon: Wrench,
    title: "Technical Skills",
    items: [
      "Contract Administration",
      "Procurement & Bid Evaluation",
      "Construction Supervision",
      "Quality Assurance",
      "Project Management",
      "Civil Engineering Design",
      "Quantity Surveying",
      "Cost Estimation",
    ],
  },
  {
    icon: Code2,
    title: "Web & Computer",
    items: ["Website Design", "Web Hosting", "HTML / CSS", "Practical AI Tools", "MS Office"],
  },
] as const;

export function Skills() {
  return (
    <section id="skills" className="relative py-20 lg:py-28 bg-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Skills" title="Tools & expertise" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="border-t-2 border-primary bg-card p-6 shadow-card">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <g.icon className="h-5 w-5" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
