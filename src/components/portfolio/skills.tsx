import { useEffect, useRef, useState } from "react";
import { Cpu, Wrench, Code2 } from "lucide-react";
import { SectionHeading } from "./section-heading";

const groups = [
  {
    icon: Cpu,
    title: "Engineering Software",
    items: [
      ["AutoCAD", 95],
      ["Civil 3D", 88],
      ["ETABS", 90],
      ["SAP2000", 85],
      ["HEC-RAS", 80],
      ["SketchUp", 78],
      ["Smart Road", 82],
    ],
  },
  {
    icon: Wrench,
    title: "Technical Skills",
    items: [
      ["Structural Analysis", 92],
      ["Quantity Surveying", 90],
      ["Cost Estimation", 88],
      ["Transportation Engg.", 87],
      ["Construction Mgmt.", 85],
      ["Hydrology", 78],
      ["Surveying", 90],
    ],
  },
  {
    icon: Code2,
    title: "Web & Computer",
    items: [
      ["Website Design", 80],
      ["Web Hosting", 75],
      ["HTML / CSS", 78],
      ["MS Office", 95],
    ],
  },
] as const;

function Bar({ label, value, animate }: { label: string; value: number; animate: boolean }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-gradient-primary transition-[width] duration-1000 ease-out"
          style={{ width: animate ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills" className="relative py-20 lg:py-28 bg-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading eyebrow="Skills" title="Tools & expertise" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-card"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">{g.title}</h3>
              </div>
              <div className="mt-5 space-y-4">
                {g.items.map(([name, val]) => (
                  <Bar key={name as string} label={name as string} value={val as number} animate={animate} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
