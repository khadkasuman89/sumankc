import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import bus from "@/assets/proj-bus.jpg";
import brick from "@/assets/proj-brick.jpg";
import survey from "@/assets/proj-survey.jpg";
import road from "@/assets/proj-road.jpg";

const projects = [
  {
    title: "Public Bus Alternative Ranking System",
    tag: "Transportation Research",
    desc: "Hybrid multi-criteria decision making approach under fuzzy environment for ranking Kathmandu public transit alternatives.",
    image: bus,
  },
  {
    title: "Mortarless Masonry Technology",
    tag: "Construction Innovation",
    desc: "Interlocking brick construction system with reduced material, faster execution, and improved seismic performance.",
    image: brick,
  },
  {
    title: "Survey Camp Project",
    tag: "Field Engineering",
    desc: "Road, bridge and topographic survey design — full alignment, longitudinal & cross sections, and contour mapping.",
    image: survey,
  },
  {
    title: "Smart Road Workshop",
    tag: "Road Design",
    desc: "Highway geometric design, drainage layout, and traffic planning using Smart Road and Civil 3D.",
    image: road,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected engineering work"
          description="A mix of structural, transportation, and research projects delivered across Nepal."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold leading-tight">{p.title}</h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
