import { MapPin, Mail, Heart, Building2 } from "lucide-react";
import { SectionHeading } from "./section-heading";

const info = [
  { icon: MapPin, label: "Home", value: "Myanglung, Terhathum, Koshi Province" },
  { icon: Building2, label: "Position", value: "Gazetted (Class III), Engineer (Civil)" },
  { icon: Mail, label: "Email", value: "khadkasuman89@gmail.com" },
  { icon: Mail, label: "Official Email", value: "suman.khadka1@nepal.gov.np" },
  { icon: Heart, label: "Spouse", value: "Mrs. Baneeka Thapa Khadka" },
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
               Engineer serving the <span className="font-semibold text-foreground">Government of Nepal</span>. His work centers on infrastructure delivery, especially water supply and sewerage projects, with responsibility for contract administration, construction supervision, procurement review, IPC payments, completion certification, and quality assurance.
            </p>
            <p>
               With more than seven years of professional practice, he combines field engineering with research in public procurement policy and contractor performance. He earned an M.Sc. in Construction Management from Mid-West University with distinction (CGPA 3.77) and a B.E. in Civil Engineering from Pulchowk Campus with 79.65%.
            </p>
            <p>
               His practice blends AutoCAD, Civil 3D, ETABS, SketchUp, Smart Road, and MS Office with procurement management, BOQ preparation, quality verification, stakeholder coordination, and regulatory decision-making.
              Happily married to <span className="font-semibold text-foreground">Mrs. Baneeka
              Thapa Khadka</span>.
            </p>
          </div>

          <div className="lg:col-span-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {info.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 border-t border-border py-4"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center bg-primary text-primary-foreground">
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
