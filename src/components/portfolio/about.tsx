import { MapPin, Mail, Globe, GraduationCap } from "lucide-react";
import { SectionHeading } from "./section-heading";

const info = [
  { icon: MapPin, label: "Location", value: "Myanglung, Terhathum, Nepal" },
  { icon: Mail, label: "Email", value: "khadkasuman89@gmail.com" },
  { icon: Globe, label: "Website", value: "suman-khadka.com.np" },
  { icon: GraduationCap, label: "Profession", value: "Civil Engineer" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering rooted in research & rigor"
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">Er. Suman Khadka</span> is a Civil
              Engineer graduated from Pulchowk Engineering Campus, Institute of Engineering (IOE),
              Tribhuvan University. He specializes in structural engineering, transportation
              engineering, project estimation, cost analysis, and construction management.
            </p>
            <p>
              He has worked with engineering consultancy firms across Nepal and contributed to
              research in transportation systems — including multi-criteria decision making
              under fuzzy environments for public transit planning in Kathmandu.
            </p>
            <p>
              His practice blends modern computational tools — ETABS, SAP2000, HEC-RAS, Civil
              3D — with on-the-ground site supervision, BOQ preparation, and project
              coordination.
            </p>
          </div>

          <div className="lg:col-span-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {info.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-card transition-transform hover:-translate-y-0.5"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {label}
                  </div>
                  <div className="truncate text-sm font-semibold">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
